const menuCheckbox = document.getElementById('opções_menu');
const menu = document.querySelector('.opções');
let timeoutId; // Armazena o ID do timeout para cancelamento posterior

function toggleActive(event, element) {
  // Evita que o evento de clique no elemento feche ele
  event.stopPropagation();

  // Adiciona a classe 'ativo' ao elemento clicado
  element.classList.toggle('ativ');
}

// Remove a classe 'ativo' ao clicar em qualquer lugar da página
document.addEventListener('click', function() {
  const links = document.querySelectorAll('.opções_lin .opções_item');
  links.forEach(link => link.classList.remove('ativ'));
});

