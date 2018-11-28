var numero = [400,200,1,-23];

var numeroMas1 = numero.map(function(numero){
    return numero + 1;

})

var numeroMas12 = numero.map(numero => numero + 1);


console.log(numeroMas1);
console.log(numeroMas12);