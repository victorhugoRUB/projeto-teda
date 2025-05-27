import { Injectable } from '@nestjs/common';
import { Paciente } from './paciente.entity';
import { CpfValidator } from './validators/cpf.validator';
import { IdadeValidator } from './validators/idade.validator';
import { RgValidator } from './validators/rg.validator';

@Injectable()
export class PacienteService {
    private pacientes: Paciente[] = [];

    cadastrar(paciente: Paciente): boolean {
        if (
            !paciente.nome?.trim() ||
            !paciente.cpf?.trim() ||
            !paciente.rg?.trim() ||
            !paciente.dataNascimento
        ) {
            return false;
        }
        if (!/^[\p{L}\s'-]+$/u.test(paciente.nome)) return false;
        if (!CpfValidator.isValid(paciente.cpf)) return false;
        if (!RgValidator.isValid(paciente.rg)) return false;
        if (!IdadeValidator.isMaiorDeIdade(paciente.dataNascimento)) return false;
        this.pacientes.push(new Paciente(paciente));
        return true;
    }

    listar(): Paciente[] {
        return this.pacientes;
    }
}
