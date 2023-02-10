import { validate } from 'validate.js'

const loginFormConstraints = {
    email: {
        email: {
            message: '^не корректно введен email',
        },
        presence: {
            allowEmpty: false,
            message: '^обязательное поле',
        }
    },
    password: {
        length: {
            minimum: 1,
            maximum: 20,
            message: '^пароль должен содержать от 1 до 20 символов',
        },
        presence: {
            allowEmpty: false,
            message: '^обязательное поле',
        }
    }
};
const registrationFormConstraints = {
    email: {
        email: {
            message: '^не корректно введен email',
        },
        presence: {
            allowEmpty: false,
            message: '^обязательное поле',
        }

    },
    password: {
        length: {
            minimum: 1,
            maximum: 20,
            message: '^пароль должен содержать от 1 до 20 символов',
        },
        presence: {
            allowEmpty: false,
            message: '^обязательное поле',
        }
    },
    name: {
        format: {
            pattern: /^[a-zA-Zа-яА-Я_\s]+$/,
            message: '^поле имя может содержать только латиницу, кириллицу, пробел или дефис.',
        },
        presence: {
            allowEmpty: false,
            message: '^обязательное поле',
        }
    }
};
const profileFormConstraints = {
    email: {
        email: {
            message: '^не корректно введен email',
        },
        presence: {
            allowEmpty: false,
            message: '^обязательное поле',
        }
    },
    name: {
        format: {
            pattern: /^[a-zA-Zа-яА-Я-\s]+$/,
            message: '^поле имя может содержать только латиницу, кириллицу, пробел или дефис.',
        },
        presence: {
            allowEmpty: false,
            message: '^обязательное поле',
        }
    }
};
const searchConstraints = {
    search: {
        presence: {
            allowEmpty: false,
            message: '^Нужно ввести ключевое слово',
        }
    }
};



export const validateLoginForm = ({ email, password }) => {
    return validate({ email, password }, loginFormConstraints)
}
export const validateRegistrationForm = ({ name, email, password }) => {
    return validate({ name, email, password }, registrationFormConstraints);
}
export const validateProfileForm = ({ name, email }) => {
    return validate({ name, email }, profileFormConstraints)
}
export const validateSearch = ({ search }) => {
    return validate({ search }, searchConstraints)
}