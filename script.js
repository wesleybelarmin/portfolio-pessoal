// Seleciona o formulário e a mensagem de sucesso

  const form = document.getElementById("form-contato");
  const mensagem = document.getElementById("mensagem-sucesso");

  // Escuta o evento de envio do formulário

  form.addEventListener("submit", function(e){
    e.preventDefault();
  // Pega os valores dos campos

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
  // Verifica se todos os campos foram preenchidos

    if (nome && email && mensagem){
        document.getElementById("mensagem-sucesso").style.display = "block";
        form.reset();// Limpa os campos
        
    } else {
        alert("Preencha tods os campos!");
    }
  });


