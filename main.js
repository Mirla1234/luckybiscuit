//variáveis

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const mindset = document.querySelector("#mindset")

const phrases = [

    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
  ]



btnTry.addEventListener('click', showMindset)
btnReset.addEventListener('click', handleToggle)
    

function showMindset() {
    handleToggle(); 
    mindset.innerText = phrases[Math.round(Math.random() * (phrases.length -1))]  

    console.log(mindset.innerText)
}
   


function handleToggle() {
    screen1.classList.toggle(`hide`)
    screen2.classList.toggle(`hide`)

}










