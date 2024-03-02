const fs = require('fs');

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escreverArquivo = (dados: any): void => {
    return fs.writeFileSynca('./bd.json', JSON.stringify(dados))
}


type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: number,
    profissao?: string,
    endereco: Endereco
}

const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[];
    bd.push(dados);
    escreverArquivo(bd)
    return dados;
}

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[]
}

