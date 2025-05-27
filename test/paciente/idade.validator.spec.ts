import { IdadeValidator } from '../../src/paciente/validators/idade.validator';
import { VARIAVEIS_TESTE } from './variaveis_teste';

describe('Idade Validator', () => {
    it('deve validar maior de idade', () => {
        expect(IdadeValidator.isMaiorDeIdade(VARIAVEIS_TESTE.maior_idade)).toBe(true);
    });

    it('deve invalidar menor de idade', () => {
        expect(IdadeValidator.isMaiorDeIdade(VARIAVEIS_TESTE.menor_idade)).toBe(false);
    });

    it('deve validar no limite de 18 anos', () => {
        expect(IdadeValidator.isMaiorDeIdade(VARIAVEIS_TESTE.limite_18_anos)).toBe(true);
    });
});
