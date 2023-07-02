export class Game{
    id!: Number;
    nome: string;
    descricao: string;
    linkDown: string;
    linkImg: string;

    constructor(nome: string, descricao: string, linkDown: string, linkImg: string){
        this.nome = nome;
        this.descricao = descricao;
        this.linkDown = linkDown;
        this.linkImg = linkImg;
    }
}