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
  const passaword = document.querySelector("#passaword").value

  if (name === "" || email === "" || age === "" || nickname === "") {
  alert("Preencha TODAS as informações!")
  return
 }

 const user = {
  name,
  email,
  age,
  nickname,
  passaword
}

console.log(user)

const response = await fetch("http://localhost:3000/cadastrar", {
    method: "post",

    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  }).then(response => response.json())

  alert(response.massage)
}
