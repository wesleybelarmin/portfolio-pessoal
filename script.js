
  const form = document.getElementById("form-contato");
  const mensagem = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    mensagem.style.display = "block";
    form.reset(); 
  });

