const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3001

// Configurações do banco de dados
const pool = new Pool({
  user: 'liebe_ro',
  host: 'dbexp.vcenter.com.br',
  database: 'liebe',
  password: '%eTS$33qPO8XZNMc',
  port: 20168, // Porta padrão do PostgreSQL
});

// Rota para a consulta
app.get('/vr_ger_empresa', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vr_ger_empresa');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).send('Erro interno do servidor');
  }
});
