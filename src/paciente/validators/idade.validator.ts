export class IdadeValidator {
  static isMaiorDeIdade(dataNascimento: Date): boolean {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    return idade > 18 || (idade === 18 && m >= 0);
  }
}
