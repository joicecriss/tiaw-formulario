function aplicarMascaraTelefone(input) {
    let phone = input.value.replace(/\D/g, '');
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); 
    input.value = phone;
}

function aplicarMascaraCPF(input) {
    let document = input.value.replace(/\D/g, '');
    document = document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    input.value = document;
}

function validarNome(input) {
    let name = input.value;
    let letter  = /^[A-Za-z\s]+$/;

    if (!letter .test(name)) {
        alert("Por favor, insira apenas letras e espaços no campo de nome.");
        input.value = '';
    }
}

function enviarDados() {
    alert("Dados enviados!");
}
  