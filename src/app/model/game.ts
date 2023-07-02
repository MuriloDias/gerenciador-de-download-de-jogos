export class Game{
    id!: number;
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