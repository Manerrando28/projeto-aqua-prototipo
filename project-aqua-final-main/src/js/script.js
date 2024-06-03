// JavaScript

// Exemplo: Alternar o menu de navegação em dispositivos móveis
const botaoMenu = document.querySelector('.botao-menu');
const menuNavegacao = document.querySelector('.menu-navegacao');

botaoMenu.addEventListener('click', () => {
    menuNavegacao.classList.toggle('ativo');
    botaoMenu.classList.toggle('menu-ativo'); // Adiciona ou remove uma classe para mudar a aparência do botão
});


