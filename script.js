const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
  if(event.type === 'touchstart'){
    event.preventDefault()
  }
  const nav = document.getElementById('nav')
  nav.classList.toggle('ativo')

}


btnMobile.addEventListener('click',toggleMenu)
btnMobile.addEventListener('touchstart',toggleMenu)

//texto escreve

function escreveMaquina(elemento){
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = '';
  textoArray.forEach((letra,index) =>{
    setTimeout(()=>{
      elemento.innerHTML += letra
    },150 * index)
  })
    
}
  const titulo = document.querySelector('h1')
  escreveMaquina(titulo)


  //anima numero
  function animaNumero(){
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach((numero)=>{
      const total = +numero.innerText
      console.log(total)
      const incremento = Math.floor(total / 100)
      let comeco = 0
      comeco = comeco + incremento
      const tempo = setInterval(()=>{
        comeco++
        numero.innerText = comeco
        if(comeco > total){
        numero.innerText = total
          clearInterval(tempo)
        }
      },100 * Math.random())
    })
  }
  

var ativo = false
const infosNumeros = document.querySelector('.atributos')
function scrollAnimar(){
  const sessaoTop = Math.floor(infosNumeros.getBoundingClientRect().top)
  // console.log(sessaoTop)
  if(sessaoTop <= 600 && ativo == false){
    animaNumero()
    ativo = true
  }
}
window.addEventListener('scroll',scrollAnimar)



//validador de form

let validadorContato = {
  handleSubmit:(event)=>{
    event.preventDefault()
    let enviar = true

    let inputs = form.querySelectorAll('input')

    for(let i=0;i<inputs.length;i++){
      let input = inputs[i]
      let checar = validadorContato.checarInput(input)
      if(checar !== true){
        enviar = false;
        //mostrar erro
      }
    }
   
    if(enviar){
      form.submit()
    }
  },
  checarInput:(input) =>{
    
  }
};

let form = document.querySelector('.validador-form')

console.log(form);
form.addEventListener('submit',validadorContato.handleSubmit)

