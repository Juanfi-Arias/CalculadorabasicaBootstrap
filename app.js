function sumar (){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado= 'la operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `${resultado}`;
}

function restar (){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado= 'la operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `${resultado}`;
}

function producto (){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado= 'la operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `${resultado}`;
}

function div (){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado= 'la operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `${resultado}`;
}

function borrar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    document.getElementById('resultado').innerHTML = '';
    operandoA.value = '';
    operandoB.value = '';
}