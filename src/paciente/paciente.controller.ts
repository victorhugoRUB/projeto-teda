import { Controller, Post, Body, Get } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente.entity';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  cadastrar(@Body() paciente: Paciente): string {
    const sucesso = this.pacienteService.cadastrar(paciente);
    return sucesso ? 'Paciente cadastrado com sucesso' : 'Dados inválidos';
  }

  @Get()
  listar(): Paciente[] {
    return this.pacienteService.listar();
  }
}
