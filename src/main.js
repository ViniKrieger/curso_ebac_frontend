const alunos = [
    { nome: 'João', nota: 4.0 },
    { nome: 'Maria', nota: 5.8 },
    { nome: 'Pedro', nota: 9.2 },
    { nome: 'Ana', nota: 6.8 },
    { nome: 'Carlos', nota: 3.5 }
];

function alunosAprovados(alunos) {
    return alunos.filter(function(aluno) {
    return aluno.nota >= 6;
    });
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);