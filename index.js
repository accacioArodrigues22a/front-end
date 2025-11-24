function init(){
    const menu = document.querySelector("nav ul")

    // recupera o user do sessionStorage e converte para objeto
    const user = JSON.parse(sessionStorage.getItem("user"))

    //verificar se existe um usuário para que o menu seja alterado
    if(user){
        menu.innerHTML += `
            <li>
                <a href="./pages/usuarios/usuarios.html">Usuários</a>
            </li>
            <li>
                <h2>Usuário: ${user.name}</h2>
            </li>
            <li>
                <button id="logout">Sair</button>
            </li>
        `

        const logoutButton = document.querySelector("#logout")
        logoutButton.addEventListener("click", logout)

        return
    }


    //se o usuário não estiver logado
    menu.innerHTML+= `
        <li>
            <a href="./pages/login/login.html">Login</a>
        </li>
    `
}

init()


function logout(){
    //remove o user no sessionStorage
    sessionStorage.removeItem("user")
    alert("Você saiu, mas não se preocupe: você pode voltar outras vezes! Tchau")
    window.location.reload()
}