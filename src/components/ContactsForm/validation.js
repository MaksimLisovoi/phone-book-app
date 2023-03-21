const REQUIRED_FIELD = 'This field is required';

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.match(/[а-яА-Я-0-9]/)) {
      return 'Name may contain only latin letters';
    }

    return true;
  },
};

export const numberValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.match(/[а-яА-Я-a-zA-Z]/)) {
      return 'Phone may contain only numbers';
    }

    return true;
  },
};
