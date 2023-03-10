// Middleware para garantir que a criação/atualização terá o que precisa(name e initals nesse caso)
const validateTeam = (req, res, next) => {
  const requiredProperties = ['name', 'initials'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.sendStatus(400).send('Falta informações para o time');
  }
};

module.exports = validateTeam;