class generate {
    constructor (nome, tipo){
        this.nome = nome
        this.tipo = tipo
        this.ataqueTipo = ""
    }
    

     definirTipoAtaque (){
        if (this.tipo === "mago"){
            this.ataqueTipo = "magia"
        }
        else if (this.tipo === "guerreiro"){
            this.ataqueTipo = "espada"}

        else if (this.tipo === "monge"){
            this.ataqueTipo = "artes marciais"}

        else {
            this.ataqueTipo = "shuriken"}
    }   

    atacar () {
        this.definirTipoAtaque()
        console.log(`O ${this.tipo} atacou usando ${this.ataqueTipo}.`)
    }
}


let tipoDeAtaque = new generate("Mestre","monge")
tipoDeAtaque.atacar()
            