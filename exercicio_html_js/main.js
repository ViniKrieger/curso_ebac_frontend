const form = document.querySelector('form');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');
const enviar = document.querySelector('#enviar');

form.addEventListener('submit', function(event) {
if (parseInt(campoB.value) <= parseInt(campoA.value)) {
    event.preventDefault();
    alert('Erro no formulário: \nO campo B deve ser maior que o campo A!');
}
    else {
        alert ('Valor de B maior que valor de A \nFormulário enviado com sucesso!');
    }

});