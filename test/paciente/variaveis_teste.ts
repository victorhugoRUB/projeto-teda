export const VARIAVEIS_TESTE = {
  cpf_valido: '52998224725',
  cpf_invalido: '12345678900',
  cpf_repetido: '11111111111',

  maior_idade: new Date('2000-01-01'),
  menor_idade: new Date('2010-01-01'),
  limite_18_anos: (() => {
    const hoje = new Date();
    hoje.setFullYear(hoje.getFullYear() - 18);
    return hoje;
  })(),

  nome_preenchido: 'João',
  nome_invalido: 'João123',
  nome_vazio: '',

  rg_valido: '1234567',
  rg_invalido: 'abc123',
  rg_vazio: '',
};