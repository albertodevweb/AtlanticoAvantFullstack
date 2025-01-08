let produtos = [
    {
        nome : "banana",
        valor: 5,
        quantidade: 10
    },
    {
        nome : "maça",
        valor: 11,
        quantidade: 3
    },
    {
        nome : "abacaxi",
        valor: 8,
        quantidade: 1
    },
    {
        nome : "uva",
        valor: 9,
        quantidade: 2
    },
    {
        nome : "mamao",
        valor: 3,
        quantidade: 4
    },
    {
        nome : "melao",
        valor: 4,
        quantidade: 5
    },
    {
        nome : "pêra",
        valor: 13,
        quantidade: 7
    },
    {
        nome : "abacate",
        valor: 14,
        quantidade: 8
    },
    {
        nome : "pitaya",
        valor: 15,
        quantidade: 7
    },
    {
        nome : "manga",
        valor: 6,
        quantidade: 9
    },
];

// function calculaProdutos(){
//     produtos.forEach((produto)=>{
//         const valorTotal = produto.valor * produto.quantidade;
//         console.log(`Produto: ${produto.nome}, Valor total: R$ ${valorTotal}`);
//     })
// }

// calculaProdutos();

function valorProdutos(){
    for(let i= 0; i < produtos.length; i++){
        const valorFull = produtos[i].valor * produtos[i].quantidade;
        console.log(`Produto: ${produtos[i].nome}, Valor total: R$ ${valorFull}`);    
    }
}

valorProdutos();