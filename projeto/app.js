// Definindo parametros de entrada para o banco de dados
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = 3000;

// ativando o servidor do node.js
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Configuração do Banco de Dados SQLite
const db = new sqlite3.Database('./todo.db', (err) => {
    if (err) console.error(err.message);
    console.log('Conectado ao banco de dados SQLite.');
});

// Criar tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT
)`);

//definir o padrao do arquivo a ser transacionado
app.use(express.json());
// Servir arquivos estáticos (HTML/CSS)
app.use(express.static('./')); 

// API: Listar tarefas
app.get('/api/todos', (req, res) => {
    db.all('SELECT * FROM todos', [], (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// API: Adicionar tarefa
app.post('/api/todos', (req, res) => {
    const { task } = req.body;
    db.run('INSERT INTO todos (task) VALUES (?)', [task], function(err) {
        if (err) res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, task });
    });
});

