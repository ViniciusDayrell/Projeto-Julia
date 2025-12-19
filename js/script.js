const form = document.getElementById("form")
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const comentarioInput = document.getElementById("mensagem")
const listaComentarios = document.getElementById("lista-comentarios")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = nomeInput.value.trim()
    const email = emailInput.value.trim()
    const comentario = comentarioInput.value.trim()

    if (!nome || !email || !comentario){
        alert("Por favor, preencha todos os campos.")
        nomeInput.focus()
        return 
    }
})