const produtos = [
    {
        nome: 'Bee Green Trail ES1S',
        Motor: 'Motor central com pico de 7.600 WATTS',
        Bateria: '26ah / 72v',
        Velocidade: ' Máx. até 75 Km/H',
        preco: 20900.00,
        imagem: 'src/assets/imagens/TRAIL.jpg'
    },
    {
        nome: 'Bee Green Super Soco TC Wanderer',
        Motor: '3.000 WATTS',
        Bateria: '32ah / 60V',
        Velocidade: 'Máx. até 75 km/h',
        preco: 44900.00,
        imagem: 'src/assets/imagens/beegreensuper.jpg'
    },
    {
        nome: 'Bee Green Segway Ninebot E110L',
        Motor: '2.200 WATTS',
        Bateria: 'LÍTIO de 24ah / 72v',
        Velocidade: 'Máx. até 75 KM/H',
        preco: 21000.00,
        imagem: 'src/assets/imagens/E110L.jpg'
    },
    {
        nome: 'Bee Green LK',
        Motor: '2.500 WATTS',
        Bateria: '38.4ah / 72v',
        Velocidade: 'Máx. até 76 km/h',
        preco: 18900.00,
        imagem: 'src/assets/imagens/LK.jpg'
    },
    {
        nome: 'Bee Green Ecooter E2',
        Motor: '4.000 watts',
        Bateria: 'Lítio 45ah / 64v',
        Velocidade: 'Máx. até 100 km',
        preco: 22000.00,
        imagem: 'src/assets/imagens/Design sem nome.jpg'
    }
];
const container = document.getElementById('todosProd');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalSpan = document.getElementById('total');
const cupom = document.getElementById('cupom');

let totalPreco = 0;

function todosProdutos(lista) {
    const htmlProdutos = lista.map(item => `
            <div class="card">
         <img class="card-imagem" src="${item.imagem}" alt="">
            <div class="card-conteudo">
         <h3 class="card-titulo">${item.nome}</h3>

         <p class="card-Motor">
          Motor: ${item.Motor}
         </p>

         <p class="card-Bateria">
          Bateria: ${item.Bateria}
         </p>

         <p class="card-Velocidade">
          Velocidade: ${item.Velocidade}
         </p>

         <p class="card-preco">
         Preço: R$ ${Number(item.preco)
            .toFixed(2)
            .replace('.', ',')}
        </p>

        <button
        class="btn-carrinho"
        onclick="adicionarAoCarrinho('${item.nome}')">
        Adicionar ao Carrinho
         </button>
         </div>
        </div>
         `).join('');

    container.innerHTML = htmlProdutos;
}