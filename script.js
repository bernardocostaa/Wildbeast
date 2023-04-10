const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("ativo");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//texto escreve

function escreveMaquina(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, index) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 150 * index);
  });
}
const titulo = document.querySelector("h1");
escreveMaquina(titulo);

//anima numero
function animaNumero() {
  const numeros = document.querySelectorAll("[data-numero]");
  numeros.forEach((numero) => {
    const total = +numero.innerText;
    console.log(total);
    const incremento = Math.floor(total / 100);
    let comeco = 0;
    comeco = comeco + incremento;
    const tempo = setInterval(() => {
      comeco++;
      numero.innerText = comeco;
      if (comeco > total) {
        numero.innerText = total;
        clearInterval(tempo);
      }
    }, 100 * Math.random());
  });
}

var ativo = false;
const infosNumeros = document.querySelector(".atributos");
function scrollAnimar() {
  const sessaoTop = Math.floor(infosNumeros.getBoundingClientRect().top);
  // console.log(sessaoTop)
  if (sessaoTop <= 600 && ativo == false) {
    animaNumero();
    ativo = true;
  }
}
window.addEventListener("scroll", scrollAnimar);

//validador de form

let validadorContato = {
  handleSubmit: (event) => {
    event.preventDefault();
    let enviar = true;

    let inputs = form.querySelectorAll("input");
    let textArea = form.querySelector("textarea");

    validadorContato.limparErros();

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let checar = validadorContato.checarInput(input);
      if (checar !== true) {
        enviar = false;
        validadorContato.showErro(input, checar);
      }
    }

    let checarText = validadorContato.checarInput(textArea);
    if (checarText !== true) {
      enviar = false;
      validadorContato.showErro(textArea, checarText);
    }

    if (enviar) {
      form.submit();
    }
  },
  checarInput: (input) => {
    let regras = input.getAttribute("data-rules");
    if (regras !== null) {
      regras = regras.split("|");
      for (let k in regras) {
        let detalhesRegra = regras[k].split("=");
        switch (detalhesRegra[0]) {
          case "required":
            if (input.value == "") {
              return "Campo não pode ser vazio";
            }
            break;
          case "min":
            if (input.value.length < detalhesRegra[1]) {
              return (
                "Campo tem que ter pelomenos " +
                detalhesRegra[1] +
                " caracteres"
              );
            }
            break;
          case "email":
            if (input.value != "") {
              let regex =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!regex.test(input.value.toLowerCase())) {
                return "E-mail digitado não é valido";
              }
            }
            break;
          case "tel":
            let numero = (/\D/g, " ");
            if (!+input.value != numero) {
              return "erro não é um numero";
            }
            break;
          case "limit":
            if (input.value.length < 10) {
              return "BARRIL ESCREVA MAIS RAPA";
            }
            break;
        }
      }
    }
    return true;
  },
  showErro: (input, error) => {
    input.style.borderColor = "red";
    input.style.boxShadow = " 0 0 0 2px red";

    let erroElemento = document.createElement("div");
    erroElemento.classList.add("error");
    erroElemento.innerHTML = error;

    input.parentElement.insertBefore(erroElemento, input.nextElementSibling);
  },
  limparErros: () => {
    let inputs = form.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style = "";
    }
    let erroElementos = document.querySelectorAll(".error");
    for (let i = 0; i < erroElementos.length; i++) {
      erroElementos[i].remove();
    }
    let textArea = form.querySelector("textarea");

    textArea.style = "";
  },
};

let form = document.querySelector(".validador-form");

console.log(form);
form.addEventListener("submit", validadorContato.handleSubmit);
