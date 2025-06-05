export type UsuarioDto = {
    id?: number;
    nome_completo: string;
    data_nascimento: string;
    telefone: string;
    cep: string;
    email: string;
    senha: string;
    confirm_senha: string;
};