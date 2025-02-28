import { useReducer, useState } from 'react';
import type { RuleItem, ValidateError } from 'async-validator';
import Schema from 'async-validator';
import each from 'lodash-es/each';
import mapValues from 'lodash-es/mapValues';

export type CustomRuleFunc = (context: { getFieldValue: (name: string) => string }) => RuleItem;

export type CustomRule = RuleItem | CustomRuleFunc;

export interface FieldDetail {
  name: string;
  value: string;
  rules: CustomRule[];
  isValid: boolean;
  errors: ValidateError[];
}

export interface FieldsState {
  [key: string]: FieldDetail;
}

export interface FormState {
  isValid: boolean;
  isSubmitting: boolean; // 是否正在提交表单
  errors: Record<string, ValidateError[]>; // 所有字段的错误信息
}

export interface FieldsAction {
  type: 'addField' | 'updateValue' | 'updateValidateResult' | 'updateField';
  payload: {
    name: string;
    value: any;
  };
}

export interface ValidateErrorType extends Error {
  errors: ValidateError[];
  fields: Record<string, ValidateError[]>;
}

function fieldReducer(state: FieldsState, action: FieldsAction): FieldsState {
  const { name, value } = action.payload;

  switch (action.type) {
    case 'addField': {
      return {
        ...state,
        [name]: {
          name,
          ...value,
        },
      };
    }
    case 'updateValue': {
      return {
        ...state,
        [name]: { ...state[name], value },
      };
    }
    case 'updateValidateResult': {
      const { isValid, errors } = value;
      return {
        ...state,
        [name]: { ...state[name], isValid, errors },
      };
    }
    case 'updateField': {
      return {
        ...state,
        [name]: { ...state[name], ...value },
      };
    }
    default:
      return state;
  }
}

function useStore(initialValues?: Record<string, any>) {
  const [form, setForm] = useState<FormState>({ isValid: false, isSubmitting: false, errors: {} });

  const [fields, dispatch] = useReducer(fieldReducer, {});

  const getFieldValue = (key: string) => {
    return fields[key]?.value;
  };

  const getFieldsValue = () => {
    return mapValues(fields, item => item.value);
  };

  const setFieldValue = (key: string, value: any) => {
    if (fields[key]) {
      dispatch({
        type: 'updateValue',
        payload: {
          name: key,
          value: {
            value,
          },
        },
      });
    }
  };

  const transformRules = (rules: CustomRule[]): RuleItem[] => {
    return rules.map(rule => {
      if (typeof rule === 'function') {
        return rule({ getFieldValue });
      }
      return rule;
    });
  };

  const validateField = async (name: string) => {
    const { value, rules } = fields[name];
    const afterRules = transformRules(rules);
    const descriptor = { [name]: afterRules };

    const valueMap = { [name]: value };
    const validator = new Schema(descriptor);

    try {
      await validator.validate(valueMap, { first: true });
      dispatch({
        type: 'updateValidateResult',
        payload: { name, value: { isValid: true, errors: [] } },
      });
    } catch (e) {
      const { errors } = e as ValidateErrorType;

      dispatch({
        type: 'updateValidateResult',
        payload: {
          name,
          value: {
            isValid: false,
            errors: Array.isArray(errors) ? errors : [],
          },
        },
      });
    }
  };

  const validateAllFields = async () => {
    let isValid = true;
    let errors: Record<string, ValidateError[]> = {};

    const valueMap = mapValues(fields, item => item.value);
    const descriptor = mapValues(fields, item => transformRules(item.rules));
    const validator = new Schema(descriptor);
    setForm({
      ...form,
      isSubmitting: true,
    });
    try {
      await validator.validate(valueMap);
    } catch (e) {
      isValid = false;
      const err = e as ValidateErrorType;
      errors = err.fields;
      each(fields, (value, name) => {
        if (errors[name]) {
          const itemErrors = errors[name];
          dispatch({
            type: 'updateValidateResult',
            payload: {
              name,
              value: {
                isValidate: false,
                errors: itemErrors,
              },
            },
          });
        } else if (value.rules.length > 0 && !errors[name]) {
          dispatch({
            type: 'updateValidateResult',
            payload: {
              name,
              value: {
                isValidate: true,
              },
            },
          });
        }
      });
    } finally {
      setForm({
        ...form,
        isSubmitting: false,
        isValid,
        errors,
      });
      return {
        isValid,
        errors,
        values: valueMap,
      };
    }
  };

  const resetFields = () => {
    if (!initialValues) {
      return;
    }
    each(fields, (_, name) => {
      dispatch({
        type: 'updateField',
        payload: {
          name,
          value: {
            value: initialValues[name] || '',
            isValid: true,
            errors: [],
          },
        },
      });
    });

    setTimeout(() => {
      setForm({
        isValid: false,
        isSubmitting: true,
        errors: {},
      });
    }, 0);
  };

  return {
    form,
    fields,
    dispatch,
    validateField,
    validateAllFields,
    getFieldValue,
    getFieldsValue,
    setFieldValue,
    resetFields,
  };
}

export default useStore;
