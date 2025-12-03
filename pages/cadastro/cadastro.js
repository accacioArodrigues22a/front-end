const button = document.querySelector("button")
button.onclick = (event) => {
  event.preventDefault()
  signUpEagle()
}

async function signUpEagle() {
 const name = document.querySelector("#nome").value
  const email = document.querySelector("#email").value
  const age = document.querySelector("#age").value
  const nickname = document.querySelector("#nickname").value
  const password = document.querySelector("#password").value

  if (name === "" || email === "" || age === "" || nickname === "" || password === "") {
  alert("Preencha TODAS as informações!")
  return
 }

 const user = {
  name,
  email,
  age,
  nickname,
  password
}

console.log(user)

const response = await fetch("https://backend-andressa.vercel.app/cadastrar", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  }).then(response => response.json())

  const { message } = response

  alert(message)

  window.location.href = "../../index.html"
}
