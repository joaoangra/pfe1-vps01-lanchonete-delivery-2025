function voltar() {
  window.location.href = "home.html";
}

function carregarPedidosFinal() {
  const pedidos = JSON.parse(localStorage.getItem("final")) || [];
  const tbody = document.querySelector("#tabelaFinal tbody");
  const totalDiv = document.getElementById("PedidosTotal");

  tbody.innerHTML = "";
  let total = 0;

  pedidos.forEach((p, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${p.cliente}</td>
      <td>${p.endereco}</td>
      <td>${p.prod}</td>
      <td>${p.data}</td>
      <td>${p.hora}</td>
      <td>${p.horaChegada || '-'}</td>
      <td>${p.preco || '-'}</td>
    `;
    tbody.appendChild(tr);
    if (p.preco) total += p.preco;
  });

  totalDiv.textContent = `Total Geral R$: ${total.toFixed(2)}`;
}

carregarPedidosFinal();

