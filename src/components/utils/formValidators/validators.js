export const requiredField = value => (value ? undefined : 'Required field')

export const maxLengthValidator = maxLength => value =>
    value && value.length > maxLength ? `Max length is ${maxLength}` : undefined;
