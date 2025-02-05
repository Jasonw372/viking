import { useReducer, useState } from 'react';

export interface FieldDetail {
  name: string;
  value: string;
  rules: any[];
  isValid: boolean;
  error: any[];
}

export interface FieldsState {
  [key: string]: FieldDetail;
}

export interface FormState {
  isValid: boolean;
}

export interface FieldsAction {
  type: 'addField' | 'updateField';
  payload: {
    name: string;
    value: any;
  };
}

function fieldReducer(state: FieldsState, action: FieldsAction): FieldsState {
  const { name, value } = action.payload;

  switch (action.type) {
    case 'addField':
      return {
        ...state,
        [name]: {
          ...value,
        },
      };
    case 'updateField':
      return {
        ...state,
        [name]: { ...state[name], value },
      };
  }
}

function useStore() {
  const [form] = useState<FormState>({ isValid: false });

  const [fields, dispatch] = useReducer(fieldReducer, {});

  return {
    form,
    fields,
    dispatch,
  };
}

export default useStore;
