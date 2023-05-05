let salva = document.getElementById('salva')
let calcula = document.getElementById('calcula')
let res = document.getElementById('res')
let produto_array = [], qtde_array = []

salva.addEventListener('click', ()=>{
    let produto = document.getElementById('produto').value
    let qtde = Number(document.getElementById('qtde').value)  

    produto_array.push(produto)
    qtde_array.push(qtde)
})