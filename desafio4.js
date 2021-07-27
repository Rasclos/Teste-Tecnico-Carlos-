/*
4 )
Devido a um erro no pagamento do último mês, uma empresa acabou tendo um gasto extra de
R$1873003111,00 sendo 16% deste valor destinado para os 782 funcionários do seu setor. 
Dada a situação citada anteriormente, construa um algoritmo capaz de:

1 - Recebendo uma listagem com os dados do colaborador 
    # valor hora, 
    # horas feitas, 
    # pagamento, 
    # cpf,
    # nome,

2 - Devolver uma lista com os valores a ser debitado dos pagamentos de cada colaborador, 
    podendo ser o valor parcelado num período de até 6 meses (dependendo do valor excedente). 
    (OBS: Realizar no GITHUB e enviar o link)
*/ 

let gastoExtra = 1873003111.00
let valorParaFuncionarios = (gastoExtra * 0.16)
let qtdFuncionariosDoSetor = 782

let valorIndividualPorFuncionario = valorParaFuncionarios / qtdFuncionariosDoSetor

let pagamentoPorMes = valorIndividualPorFuncionario / 6  // 6 meses  // 63870.52381926684 = 1 mês
let qtdDiasNoMes = 31

let valorPorDia = pagamentoPorMes / qtdDiasNoMes

let horasFeitasPorDia = 8

let valorPorHora = valorPorDia / horasFeitasPorDia 

const dadosDoColaborador = {
    valorHora: valorPorHora,
    horasFeitas: horasFeitasPorDia, // dia
    pagamento: pagamentoPorMes,
    cpf: '123.456.789-12',
    nome: 'Carlos'
}

// Resolução:
console.log(`
    Nome: ${dadosDoColaborador.nome}
    CPF: ${dadosDoColaborador.cpf}
    Pagamento/mês: R$ ${Math.ceil(dadosDoColaborador.pagamento)}
    Horas feitas: ${dadosDoColaborador.horasFeitas}
    Valor por hora: R$ ${Math.ceil(dadosDoColaborador.valorHora)}
`)
