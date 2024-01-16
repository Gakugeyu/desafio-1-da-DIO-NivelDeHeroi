class heroi {

    constructor(nome, idade, tipo){

        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }    
}

let aventureiro = new heroi ("Heroi", 20, "mago")
let attack = ""



if (aventureiro.tipo === "mago"){

    attack = " a magia"

} else if(aventureiro.tipo === "guerreiro"){

    attack = " a espada"

} else if(aventureiro.tipo === "monge"){

    attack = " as artes marciais"

} else if(aventureiro.tipo === "ninja"){

    attack = " a shuriken"

}



console.log("O " + aventureiro.tipo + " atacou usando" + attack)

