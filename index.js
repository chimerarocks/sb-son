System.import('./test').then(module => {
  console.log(module)
  module.default() //executando a função do modulo
}, error => {
  console.log('Ops... não foi possível carregar o módulo')
})

$(document).ready(() => {
  $('input').val('Jquery funcionando')
})