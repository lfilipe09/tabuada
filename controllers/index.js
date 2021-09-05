//A logica em si fica dentro do controller, o routes soh conecta

const home = (req, res) => {
  res.render('home')
}

module.exports = {
  home
}