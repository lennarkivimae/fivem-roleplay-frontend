import allTranslation from './translations.config.json';

interface ITranslations {
    [key: string]: ITranslationFields
}

interface ITranslationFields {
    [key: string]: string
}

const translate: ITranslations = allTranslation;

const __ = (word: string, lang?: string): string => {
    const lowerCaseWord = word.toLowerCase();
    let wordFromTranslations: string | undefined = translate.en[lowerCaseWord];

    if (typeof wordFromTranslations !== 'undefined') {
        word = wordFromTranslations;
    }

    if (typeof lang !== 'undefined') {
        if (typeof translate[lang] !== 'undefined') {
            wordFromTranslations = translate[lang][lowerCaseWord];
        }

        if (typeof wordFromTranslations !== 'undefined') {
            word = wordFromTranslations;
        }
    }

    return word;
}

export default __;
