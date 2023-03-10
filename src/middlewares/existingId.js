// middleware para garantir que o ID passado é um número, não uma string por exemplo, isNAN = not a number
const existingId = (req, res, next) => {
  const { id } = req.params;
  const isAsNumber = Number(id);
  if (Number.isNaN(isAsNumber)) {
    res.status(400).send('Id precisa ser um número');
  } else next();
};

module.exports = existingId;