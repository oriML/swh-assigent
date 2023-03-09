interface NativeName {
    ara: State;
}


interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface TND {
    name: string;
    symbol: string;
}

export interface Currencies {
    TND: TND;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    ara: string;
}

export interface State {
    official: string;
    common: string;
}
export interface Translations {
    ara: State;
    bre: State;
    ces: State;
    cym: State;
    deu: State;
    est: State;
    fin: State;
    fra: State;
    hrv: State;
    hun: State;
    ita: State;
    jpn: State;
    kor: State;
    nld: State;
    per: State;
    pol: State;
    por: State;
    rus: State;
    slk: State;
    spa: State;
    srp: State;
    swe: State;
    tur: State;
    urd: State;
    zho: State;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Fra2 {
    f: string;
    m: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Fra2;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Car {
    signs: string[];
    side: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface PostalCode {
    format: string;
    regex: string;
}

export interface CountryModel {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: any;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}