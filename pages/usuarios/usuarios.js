 async function receiveData () {
   const users =  await fetch ("https://back-end-zeta-bice.vercel.app/").then(response => response.json())
 
   users.map(person => {
    document.querySelector("main").innerHTML += `
      <section>
        <h2>Nome: ${person.name}</h2>
        <p>E-mail:${person.email}</p>
        <p>Idade: ${person.age}</p>
        <p>Apelido: ${person.nickname}</p>
    </section>
    `
   })
 }

 receiveData()