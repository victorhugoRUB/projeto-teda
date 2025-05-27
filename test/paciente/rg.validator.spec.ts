import { RgValidator } from '../../src/paciente/validators/rg.validator';
import { VARIAVEIS_TESTE } from './variaveis_teste';

describe('RG Validator', () => {
  it('deve validar um RG válido', () => {
    expect(RgValidator.isValid(VARIAVEIS_TESTE.rg_valido)).toBe(true);
  });

  it('deve invalidar um RG com letras', () => {
    expect(RgValidator.isValid(VARIAVEIS_TESTE.rg_invalido)).toBe(false);
  });

  it('deve invalidar um RG vazio', () => {
    expect(RgValidator.isValid(VARIAVEIS_TESTE.rg_vazio)).toBe(false);
  });
});