export interface FormErrors {
  required: string;
}

export const useFormError = () => {
  const getValidateMessages = (): FormErrors => ({
    required: 'Text field is required',
  });

  return { getValidateMessages };
};
