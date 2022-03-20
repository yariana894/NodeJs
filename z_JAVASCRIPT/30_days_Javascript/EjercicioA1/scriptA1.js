document.getElementById('resolver').addEventListener('click', mayorMenor);

function mayorMenor() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);


    let res = `El número ${n1} es ${num1 > num2 ? 'mayor' : 'menor'} que el número ${n2}`;

    document.getElementById('resultado').innerHTML = res;
}