//let saldo= Number(0)
const NuevoSaldo = document.querySelector("#NuevoSaldo")
const ingresarSaldo= document.querySelector("#ingresarSaldo")
let saldo=document.querySelector("#saldo")
saldo= Number(0)


ingresarSaldo.addEventListener("click",ultimoSaldo);
function ultimoSaldo () {

    saldo = Number(NuevoSaldo.value) + saldo
}
