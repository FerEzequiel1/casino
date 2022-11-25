
const apuesta = document.querySelector("#apuesta")
const tirarDado = document.querySelector("#tirarDado")
tirarDado.addEventListener("click", tirar);
const  valorDelDado= document.querySelector("#valorDelDado")
function tirar (){

        if((apuesta.value)>saldo){ 
         alert("Lo sentimos,pero no puede apostar mayor a su saldo actual.")
        } else {}
        Dado()
        if((valorDelDado.value)== DADO){
        alert("Felicidades,ganaste");
        saldo = (apuesta.value)*4 + saldo }
        else {
            saldo = saldo -= apuesta;
            alert("Perdiste,maquinola");
            
        }                  
}
function Dado(){
    DADO = Math.round(Math.random()*6)
}