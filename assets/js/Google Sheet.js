document.addEventListener('DOMContentLoaded', function () {
  const formContainer = document.getElementById('form-container');
  const enviarBtn = document.getElementById('submit');
  const fecharBtn = document.getElementById('fechar-btn');
  const whatsappInput = document.getElementById('whatsapp');
  const form = document.forms['contact-form']; // Pega o formulário com o nome 'contact-form'

  // Função para fechar o formulário ao clicar no botão "Fechar"
  fecharBtn.addEventListener('click', function () {
      formContainer.style.display = 'none'; // Esconde o formulário completamente
  });

  // Máscara de telefone no formato brasileiro (99) 99999-9999
  whatsappInput.addEventListener('input', function (event) {
      let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
      if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
      const formattedValue = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      event.target.value = formattedValue;
  });

  // Função para o envio do formulário e exibir a mensagem de sucesso
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o comportamento padrão de envio do formulário

      // Exibe mensagem de envio em andamento
      enviarBtn.value = 'Enviando...';
      enviarBtn.disabled = true; // Desativa o botão de envio temporariamente

      // Envia os dados para o Google Apps Script
      const formActionURL = this.action;
      const formData = new FormData(this);

      fetch(formActionURL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Permite o envio sem restrições de CORS
      }).then(() => {
          // Altera o estado do botão após o envio
          enviarBtn.value = 'Enviado com sucesso';
          enviarBtn.classList.add('success'); // Altera a cor do botão após sucesso

          // Fecha o formulário completamente após 3 segundos
          setTimeout(function () {
              formContainer.style.display = 'none'; // Esconde o formulário completamente
              enviarBtn.disabled = false; // Reativa o botão de envio após fechar
              enviarBtn.value = 'Enviar'; // Restaura o texto original do botão
          }, 3000);
      }).catch(error => {
          console.error('Erro ao enviar o formulário: ', error.message);
          enviarBtn.disabled = false; // Reativa o botão se houver erro
          enviarBtn.value = 'Enviar'; // Restaura o texto do botão em caso de erro
      });
  });
});
