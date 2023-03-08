const express = require('express'); 

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());

// Primeira mensagem ao entrar na rota /
app.get('/', (req, res) =>
res.status(200).json({ message: 'Olá Mundo! Esse é um projeto iniciante' }));

// Ao entrar na rota teams mostrar o objeto teamm feito acima
app.get('/teams', (req, res) => res.status(200).json({ teams }));

// Rota de time especifico mostrar apenas ele, caso não exista o id passado, erro 404
app.get('/teams/:id', (req, res) => {
  const team = teams.find((teamId) => teamId.id === Number(req.params.id));
  if (!team) {
    res.status(404).json({ message: 'Team not found' });
  }
  res.status(200).json(team);
});

// Criar novo time
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// Atualizar time
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;