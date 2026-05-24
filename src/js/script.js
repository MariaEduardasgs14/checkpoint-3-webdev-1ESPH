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
function adicionarAoCarrinho(nomeProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === nomeProduto) {
            carrinho.push(produtos[i]);
        }
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(nomeProduto + ' foi adicionado ao carrinho!');
}

if (container) {
    todosProdutos(produtos);
}

if (listaCarrinho && totalSpan) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    listaCarrinho.innerHTML = carrinho.map(item => `
<li>${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}</li>
`).join('');

    totalPreco = carrinho.reduce((acumulador, item) => {
        return acumulador + item.preco;
    }, 0);

    totalSpan.innerText =
        'R$ ' + totalPreco.toFixed(2).replace('.', ',');

    if (cupom) {
        // Verifica se o cupom já foi usado anteriormente nesta sessão/navegador
        const cupomUsado = localStorage.getItem('cupomAplicado') === 'true';

        if (cupomUsado) {
            cupom.disabled = true;
            cupom.innerText = "Cupom já utilizado";
            cupom.style.opacity = "0.5"; // Feedback visual de desativado
        }

        cupom.onclick = function () {
            totalPreco = totalPreco * 0.9;
            totalSpan.innerText = 'R$ ' + totalPreco.toFixed(2).replace('.', ',');
            cupom.disabled = true;
            cupom.innerText = "Cupom Aplicado";


            localStorage.setItem('cupomAplicado', 'true');

            alert("Desconto de 10% aplicado com sucesso!");
        };
    }
}
