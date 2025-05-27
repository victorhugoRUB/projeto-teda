export class CpfValidator {
  static isValid(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]/g, '');
    if (!cpf || cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    const calc = (size: number): number => {
      let sum = 0;
      for (let i = 0; i < size; i++) {
        sum += parseInt(cpf[i]) * (size + 1 - i);
      }
      const result = sum % 11;
      return result < 2 ? 0 : 11 - result;
    };

    const d1 = calc(9);
    const d2 = calc(10);

    return d1 === parseInt(cpf[9]) && d2 === parseInt(cpf[10]);
  }
}
