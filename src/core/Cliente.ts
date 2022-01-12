export default class Cliente {
    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string = null ) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    static() {
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#id
    }

    get idade() {
        return this.#id
    }
}