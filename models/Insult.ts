export interface Field {
    field: string,
    name: string,
}

export interface Insult {
    id: string,
    name: string,
    response: string,
    fields: Field[]
}
