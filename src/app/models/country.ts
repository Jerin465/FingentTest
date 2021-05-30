interface Item {
    flag: String;
    _id:number
}

export interface Country {
    country:String;
    countryInfo:Item;
    cases: number;
    deaths: number;
    recovered: number;
    tests: number;
    population: number;
}
