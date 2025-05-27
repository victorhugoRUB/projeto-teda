import { Test, TestingModule } from '@nestjs/testing';
import { PacienteController } from '../../src/paciente/paciente.controller';
import { PacienteService } from '../../src/paciente/paciente.service';
import { VARIAVEIS_TESTE } from './variaveis_teste';

describe('PacienteController', () => {
    let controller: PacienteController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PacienteController],
            providers: [PacienteService],
        }).compile();

        controller = module.get<PacienteController>(PacienteController);
    });

    it('deve cadastrar paciente com nome preenchido', () => {
        const result = controller.cadastrar({
            nome: VARIAVEIS_TESTE.nome_preenchido,
            cpf: VARIAVEIS_TESTE.cpf_valido,
            rg: VARIAVEIS_TESTE.rg_valido,
            dataNascimento: VARIAVEIS_TESTE.maior_idade,
        });
        expect(result).toBe('Paciente cadastrado com sucesso');
    });

    it('não deve cadastrar paciente com nome inválido', () => {
        const result = controller.cadastrar({
            nome: VARIAVEIS_TESTE.nome_invalido,
            cpf: VARIAVEIS_TESTE.cpf_valido,
            rg: VARIAVEIS_TESTE.rg_valido,
            dataNascimento: VARIAVEIS_TESTE.maior_idade,
        });
        expect(result).toBe('Dados inválidos');
    });

    it('não deve cadastrar paciente com nome vazio', () => {
        const result = controller.cadastrar({
            nome: VARIAVEIS_TESTE.nome_vazio,
            cpf: VARIAVEIS_TESTE.cpf_valido,
            rg: VARIAVEIS_TESTE.rg_valido,
            dataNascimento: VARIAVEIS_TESTE.maior_idade,
        });
        expect(result).toBe('Dados inválidos');
    });
});
