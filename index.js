const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
//fazer isso no port significa que primeiro ele vai usar a variavel do ambiente, se nao usara a 3000

const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

//Aqui sinaliza onde estão os arquivos estáticos (html, css, essas coisas), isso faz com que não precise digital /pasta, pode colocar direto o /nomedoarrrrquivo que ele já acha
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

//define onde ficam os views
app.set('views', path.join(__dirname, 'views'))
//define qual view engine que quer utilizar
app.set('view engine', 'ejs')

//o router é um middlewre, por isso se usa o .use nele
app.use('/', indexRouter)
//o que tiver na rota tabuada, vai ficar com /tabuadas
app.use('/tabuadas', tabuadaRouter)

app.listen(port, () => console.log('Tabuada server on port: ', port))
