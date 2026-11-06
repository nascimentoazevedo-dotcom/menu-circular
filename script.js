
// Seleciona os elementos do HTML.
const menu = document.querySelector(".menu");
const botao = document.getElementById("alternar");
const opcoes = document.getElementById("opcoes");
const mensagem = document.getElementById("mensagem");

// Atualiza o estado visual e a acessibilidade do menu.
function definirMenu(aberto) {
  if (!aberto && opcoes.contains(document.activeElement)) {
    botao.focus();
  }

  menu.classList.toggle("aberto", aberto);

  botao.setAttribute("aria-expanded", String(aberto));

  botao.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );

  opcoes.inert = !aberto;

  mensagem.textContent = aberto
    ? "Escolha um site para abrir em uma nova aba. Clique em × para fechar o menu."
    : "Clique em + para abrir o menu.";
}

// Abre ou fecha o menu.
botao.addEventListener("click", () => {
  const aberto = menu.classList.contains("aberto");
  definirMenu(!aberto);
});

// Estado inicial.
definirMenu(false);
