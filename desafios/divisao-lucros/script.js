function calcularDivisaoLucros() {
    var lucro = parseFloat(document.getElementById('lucro').value);
    var socios = parseFloat(document.getElementById('socios').value);

    // verificar se os valores sao numeros
    if (isNaN(lucro) || isNaN(socios)) {
        alert('Favor inserir numeros validos');
        return;
    }

    // calcular a divisão

    var resultado = lucro / socios;

    // exibir resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}