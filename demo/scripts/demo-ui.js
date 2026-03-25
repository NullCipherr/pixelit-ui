// Script de navegação por abas da demo.
// Mantém troca de painéis desacoplada da lógica de processamento da imagem.

document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(document.querySelectorAll(".config-tab"));
  const panels = Array.from(document.querySelectorAll(".tab-panel"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // Estado visual da aba ativa.
      tabs.forEach((currentTab) => {
        currentTab.classList.toggle("is-active", currentTab === tab);
      });

      // Exibe somente o painel correspondente à aba selecionada.
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.id === target);
      });
    });
  });
});
