System.import('./test').then(module => {
  require('./app.less')
  console.log(module)
  module.default() //executando a função do modulo
  $(document).ready(() => {
    $('input').val('Jquery funcionando')
  })
}, error => {
  console.log('Ops... não foi possível carregar o módulo')
})

