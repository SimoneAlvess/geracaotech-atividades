function abrirModal() {
  overlay.classList.add("active");
  criarTarefa.classList.add("active");
}

function fecharModal() {
  overlay.classList.remove("active");
  criarTarefa.classList.remove("active");
}

function buscarTarefas() {
  fetch("http://localhost:300/tarefas")
    .then((res) => res.json())
    .then((res) => {
      inserirTarefas(res);
    });
}
buscarTarefas();

function inserirTarefas(listaTarefas) {
  if (listaTarefas.length > 0) {
    lista.innerHTML = "";
    listaTarefas.map((tarefa) => {
      lista.innerHTML += `
          <li>
            <h5>${tarefa.titulo}</h5>
            <p>${tarefa.descricao}</p>
            <div class="actions">
              <box-icon type="solid" name="trash" onclick="deletarTarefa(${tarefa.id})"></box-icon>
            </div>
          </li>`;
    });
  }
}

function novaTarefa() {
  event.preventDefault();

  let tarefa = {
    titulo: titulo.value,
    descricao: descricao.value,
  };

  fetch("http://localhost:300/tarefas", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(tarefa),
  })
    .then((res) => res.json())
    .then((res) => {
      fecharModal();
      buscarTarefas();
      let form = document.querySelector("#criarTarefa form");
      form.reset();
    });
}

function deletarTarefa(id) {
  fetch(`http://localhost:300/tarefas/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Tarefa deletada com sucesso!");
      buscarTarefas();
    });
}

function pesquisarTarefas() {
  let lis = document.querySelectorAll("ul li");
  let achouTarefas = false;
  if (busca.value.length > 0) {
    lis.forEach((li) => {
      if (!li.children[0].innerText.includes(busca.value) && !li.children[1].innerText.includes(busca.value)) {
        li.classList.add("oculto");
      } else {
        li.classList.remove("oculto");
        achouTarefas = true;
      }
    });
  } else {
    lis.forEach((li) => {
      li.classList.remove("oculto");
      achouTarefas = true;
    });
  }
  const tarefaNaoRegistrada = document.getElementById("naoRegistrada");
  if (!achouTarefas) {
    tarefaNaoRegistrada.style.display = "block";
  } else {
    tarefaNaoRegistrada.style.display = "none";
  }
}
