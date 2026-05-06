let user = prompt("Digite o nome de Usuario: ")
let senha = prompt("Digite a senha do Usuario: ")

if (user === null || senha === null){
    alert(`Ta errado benção de Deus!!!!!!!!!!!!!!!!!!`)
}
if (user === "1234" && senha === "1234"){
    alert(`Login efetuado com sucesso!`)
    window.location.href = "home.html"
}
else{
    alert(`Usuario incorreto`)
}