const selectBox = document.getElementById('selectBox');
const checkboxOptions = document.getElementById('checkboxOptions');
const checkboxes = checkboxOptions.querySelectorAll('input[type="checkbox"]');
const helpyForm = document.getElementById('helpyForm');

// Abre e fecha a lista de opções
selectBox.addEventListener('click', (e) => {
    e.stopPropagation();
    checkboxOptions.classList.toggle('show');
});

document.addEventListener('click', () => {
    checkboxOptions.classList.remove('show');
});

checkboxOptions.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Atualiza o texto do selectBox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selecionados = [];
        checkboxes.forEach(cb => {
            if (cb.checked) selecionados.push(cb.value);
        });
        if (selecionados.length > 0) {
            selectBox.textContent = selecionados.join(', ');
            selectBox.style.color = '#000000';
        } else {
            selectBox.textContent = 'Selecione as opções';
            selectBox.style.color = '#757575';
        }
    });
});

// Envio do Formulário salvando no localStorage
helpyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    
    const截opcoesMarcadas = [];
    checkboxes.forEach(cb => {
        if (cb.checked) opcoesMarcadas.push(cb.value);
    });

    if (opcoesMarcadas.length === 0) {
        alert('Por favor, selecione pelo menos uma opção na lista.');
        return;
    }

    // Criar o objeto da nova tarefa/problema
    const novaTask = {
        id: Date.now(), // ID único baseado no tempo
        nome: nome,
        categorias: opcoesMarcadas.join(', '),
        descricao: descricao,
        aceita: false
    };

    // Buscar lista existente ou criar uma nova vazia
    const listaTasks = JSON.parse(localStorage.getItem('helpyTasks')) || [];
    
    // Adicionar a nova tarefa na lista
    listaTasks.push(novaTask);
    
    // Salvar de volta no localStorage
    localStorage.setItem('helpyTasks', JSON.stringify(listaTasks));

    alert('Solicitação enviada com sucesso ao Administrador!');
    
    // Reseta o formulário
    helpyForm.reset();
    selectBox.textContent = 'Selecione as opções';
    selectBox.style.color = '#757575';
});
