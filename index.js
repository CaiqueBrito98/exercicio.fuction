const receberNotas = () => {
    let notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i));
        notas.push(nota);
    }
    return notas;
};


const calcularMedia = (notas) => {
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;
    return media;
};


const verificarAprovacao = (media) => {
    if (media >= 6) {
        console.log("Aprovado! A média do aluno é: " + media);
    } else {
        console.log("Reprovado! A média do aluno é: " + media);
    }
};


const principal = () => {
    let notas = receberNotas();
    let media = calcularMedia(notas);
    verificarAprovacao(media);
};

principal();
