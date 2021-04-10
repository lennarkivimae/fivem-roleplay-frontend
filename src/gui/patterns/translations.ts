interface ITranslations {
    [key: string]: ITranslationFields
}

interface ITranslationFields {
    [key: string]: string
}

const translations: ITranslations = {
    en: {
        'cash': 'Cash',
        'bank': 'Bank',
        'log-in': 'Log in',
        'welcome': 'Welcome',
        'please-log-in': 'Please log in',
        'password': 'Password',
        'password-confirmation': 'Password confirmation',
        'this-username-is-not-registered-yet': 'This username is not registered yet',
        'register': 'Register'
    },
    et: {
        'cash': 'Sula',
        'bank': 'Pank',
        'log-in': 'Logi sisse!',
        'welcome': 'Tere tulemast',
        'please-log-in': 'Palun logi sisse',
        'password': 'Parool',
        'password-confirmation': 'Kinnita parool',
        'this-username-is-not-registered-yet': 'See kasutaja nimi ei ole veel registreeritud',
        'register': 'Registreeri'
    }
};

const __ = (word: string, lang?: string): string => {
    const lowerCaseWord = word.toLowerCase();
    let wordFromTranslations: string | undefined = translations.en[lowerCaseWord];


    if (typeof wordFromTranslations !== 'undefined') {
        word = wordFromTranslations;
    }


    if (typeof lang !== 'undefined') {
        wordFromTranslations = translations[lang][lowerCaseWord];

        if (typeof wordFromTranslations !== 'undefined') {
            word = wordFromTranslations;
        }
    }

    return word;
}

export default __;
