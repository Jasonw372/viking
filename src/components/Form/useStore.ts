import { useReducer, useState } from 'react';
import type { RuleItem, ValidateError } from 'async-validator';
import Schema from 'async-validator';
export interface FieldDetail {
  name: string;
  value: string;
  rules: RuleItem[];
  isValid: boolean;
  errors: ValidateError[];
}

export interface FieldsState {
  [key: string]: FieldDetail;
}

export interface FormState {
  isValid: boolean;
}

export interface FieldsAction {
  type: 'addField' | 'updateField' | 'updateValidateResult';
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
      // 确保完整地构造新字段，避免后续访问缺失属性
      return {
        ...state,
        [name]: {
          name,
          ...value,
        },
      };
    }
    case 'updateField': {
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
    default:
      return state;
  }
}

function useStore() {
  const [form] = useState<FormState>({ isValid: false });

  const [fields, dispatch] = useReducer(fieldReducer, {});

  const validateField = async (name: string) => {
    const { value, rules } = fields[name];
    const descriptor = { [name]: rules };
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
      console.log(errors);

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

  return {
    form,
    fields,
    dispatch,
    validateField,
  };
}

export default useStore;
