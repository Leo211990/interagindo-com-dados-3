function info(){
    let agora = new Date
    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>O que foi recebido do sistema foi <mark>${agora}</mark>.</p>`
}