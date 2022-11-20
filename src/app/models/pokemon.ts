export interface PokeResp{
    results: Results[];
}

export interface Results{
    name:string;
    url: string;
}

export class Pokemon {
    id:string = "";
    name: string = "";
    sprites: string = "";
}
