const button = document.querySelector("button")
button.onclick = (event) => {
  event.preventDefault()
  login()
}

async function login() {
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value

  if (email === "" || password === "") {
  alert("Preencha TODAS as informações!")
  return
 }

 const user = {
  email,
  password
}


const response = await fetch("http://localhost:3333/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  }).then(response => response.json())

// se existir response.message significa que o usuario errou algo. Por isso mostramos a mensagem na tela
if(response.message){
    alert(response.message)
    //recarrega a pagina
    window.location.reload()
    return
}

//desetruturar id e name de response
const { id, name } = response

//guardar a informação no sessionStorage convertida em json
sessionStorage.setItem("user", JSON.stringify({ id, name }))
alert("Login realizado com sucesso!")

window.location.href = "../../index.html"
}
