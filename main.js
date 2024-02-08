

const numeroValidar = document.querySelector("#btncliqueaqui")

numeroValidar.addEventListener("click", function(e){
    e.preventDefault();

    const campoa = Number (document.querySelector("#campoa").value);

    const campob = Number (document.querySelector("#campob").value);

    
    if(campoa > campob){
        alert("NÂO VALIDO - o numero A é maior que o numero B")



    } else{
        alert("VALIDO - o número B é maior que o número A")
    }



   // console.log(valora,valorb);
});



/*
const form = document.getElementById('numero')

function validaNumero(numero){
    const campoaarray = numero.split(' ')
    return campoaarray.length >=2;
}
form.addEventListener('submit', function(e){
e.preventDefault();

const campoa = document.getElementById('campoa')
const campob = document.getElementById('campob')
const mensagemSucesso = 'campoa: ${campoa.value} campob: ${campob.value}';

formValido = validaNumero(numero.value)

if (formValido){
    alert("Numero B é maior que numero A - Valido ");

} else {
    alert("Não está tudo certo");
}
})

console.log(form)

*/
