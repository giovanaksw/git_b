let salva = document.getElementById('salva')
let calcula = document.getElementById('calcula')
let res = document.getElementById('res')
let produto_array = [], qtde_array = []
let blusa = 35.50, calca = 55.50, bermuda = 45.50

salva.addEventListener('click', ()=>{
    let produto = document.getElementById('produto').value
    let qtde = Number(document.getElementById('qtde').value)  

    produto_array.push(produto)
    qtde_array.push(qtde)
    console.log(produto_array)
    console.log(qtde_array)
})
calcula.addEventListener('click', ()=>{
    total = 0.0
    for(i=0; i<produto_array.length; i++){
        if(produto_array[i] = 'blusa'){
            total = total + (blusa*qtde_array[i])
        }else if(produto_array[i] = 'calca'){
            total = total + (calca*qtde_array[i])
        }else if(produto_array[i] = 'bermuda'){
            total = total + (bermuda*qtde_array[i])
        }
    }
    res.innerHTML = 'O valor total da sua compra é de R$ ' + total.toFixed(2)
})