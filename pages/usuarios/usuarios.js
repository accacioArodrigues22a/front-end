 async function receiveData () {
   const users =  await fetch ("http://localhost:3333").then(response => response.json())
 
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