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



