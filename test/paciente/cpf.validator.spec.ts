import { CpfValidator } from '../../src/paciente/validators/cpf.validator';
import { VARIAVEIS_TESTE } from "./variaveis_teste";

describe('CPF Validator', () => {
  it('deve validar um CPF válido', () => {
      expect(CpfValidator.isValid(VARIAVEIS_TESTE.cpf_valido)).toBe(true);
  });

  it('deve invalidar um CPF com dígitos repetidos', () => {
    expect(CpfValidator.isValid(VARIAVEIS_TESTE.cpf_repetido)).toBe(false);
  });

  it('deve invalidar CPF com caracteres inválidos', () => {
    expect(CpfValidator.isValid(VARIAVEIS_TESTE.cpf_invalido)).toBe(false);
  });
});
