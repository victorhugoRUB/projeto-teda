export class Paciente {
  nome: string;
  rg: string;
  cpf: string;
  dataNascimento: Date;

  constructor(partial: Partial<Paciente>) {
    Object.assign(this, partial);
  }
}
