document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  // navLinks.forEach((link) => {
  //   link.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     const target = this.getAttribute("href").substring(1);

  //     if (target === "histórico") {
  //       mostrarHistorico();
  //     } else if (target === "estoque") {
  //       mostrarEstoque();
  //     } else if (target === "contato") {
  //       window.location.href = "./html/Cadastro_de_Produtos.html"; 
  //     }
  //   });
  // });

  function mostrarHistorico() {
    const historico = `
             <div class="modal">
                 <h2>Histórico do Programa</h2>
                 <p>Aqui está todo o histórico...</p>
                 <button id="fechar-historico">Fechar</button>
             </div>
         `;
    document.body.insertAdjacentHTML("beforeend", historico);
    document
      .getElementById("fechar-historico")
      .addEventListener("click", fecharModal);
  }

  function mostrarEstoque() {
    const produtos = [
      { nome: "Produto 1", descricao: "Apple iPhone 16 pro max" },
      { nome: "Produto 2", descricao: "AirPods pro 2 Geração" },
      { nome: "Produto 3", descricao: "MagSafe 2 Geração" },
      { nome: "Produto 4", descricao: "Apple Watch series 9" },
      { nome: "Produto 5", descricao: "Apple iPhone 16 pro" },
    ];

    const estoqueHTML = `
             <div class="modal">
                 <h2>Dados do Estoque</h2>
                 <ul>
                     ${produtos
                       .map(
                         (produto) =>
                           `<li>${produto.nome}: ${produto.descricao}</li>`
                       )
                       .join("")}
                 </ul>
                 <button id="fechar-estoque">Fechar</button>
             </div>
         `;
    document.body.insertAdjacentHTML("beforeend", estoqueHTML);
    document
      .getElementById("fechar-estoque")
      .addEventListener("click", fecharModal);
  }

  function fecharModal() {
    const modal = document.querySelector(".modal");
    if (modal) modal.remove();
  }
});
