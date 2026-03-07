// Carregar tarefas ja cadastradas ao abrir
fetch('/api/todos')
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById('lista-tarefa');
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.task;
            list.appendChild(li);
        });
    });

// adicionar uma nova tarefa
function adicionaTarefa() {
    const taskInput = document.getElementById('nova-tarefa');
    fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: taskInput.value })
    }).then(() => location.reload());
}