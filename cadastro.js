// cadastro de eventos por data, idade e vagas
var data = new Date();
var dataDoEvento = 21/12/2021
if (dataDoEvento => new Date){
console.log("Inserir data de nascimento")
}else{
    console.log("Acesso não autorizado, data inválida")
}


let idade = 25

if (idade >= 18){
    console.log("Participação Autorizada")
}else { 
    console.log("Cadastro não autorizado por idade")
}


let lista = ["Patricia","Júnior","Marcio","Débora"];
let quantidadeDeInscritos = lista.length;
console.log(quantidadeDeInscritos);

if (lista.length < 100){

    console.log("Parabéns, inscrição realizada!")
}else{ 
    console.log("Número de vagas Esgotadas")
}

// a partir daqui surgiriam funções de escolha de palestras e afins

let listaDePalestrantes = ["palestrante1","palestrante2","palestrante3"];
let quantidadeDePalestrantes = listaDePalestrantes.length;
console.log(quantidadeDePalestrantes);


let listaDePalestrante = ["Palestrante1", "Palestrante2", "Palestrante3"];
let quantidadeDePalestrante = listaDePalestrante.length;
for (let indice = 0; indice < quantidadeDePalestrante; indice++) {
	const alunoCorrente = listaDePalestrante[indice];
	console.log(alunoCorrente)
}
{console.log ("Lista de Convidados Especiais")}

let listaDeConvidados = ["Convidado Especial 1", "Convidado Especial 2", "Convidado Especial 3"];
let quantidadeDeConvidados = listaDeConvidados.length;
let inicio = 0;

do {
	console.log(listaDeConvidados[inicio]);
	inicio++;
} while (inicio < quantidadeDeConvidados);
