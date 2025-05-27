import { IdadeValidator } from '../../src/paciente/validators/idade.validator';
import { VARIAVEIS_TESTE } from './variaveis_teste';

describe('Idade Validator', () => {
    it('deve validar maior de idade', () => {
        const nascimento = VARIAVEIS_TESTE.maior_idade
        expect(IdadeValidator.isMaiorDeIdade(nascimento)).toBe(true);
    });

    it('deve invalidar menor de idade', () => {
        const nascimento = VARIAVEIS_TESTE.menor_idade;
        console.log(nascimento);
        expect(IdadeValidator.isMaiorDeIdade(nascimento)).toBe(false);
    });

    it('deve validar no limite de 18 anos', () => {
        const nascimento = VARIAVEIS_TESTE.limite_18_anos;
        expect(IdadeValidator.isMaiorDeIdade(nascimento)).toBe(true);
    });
});
