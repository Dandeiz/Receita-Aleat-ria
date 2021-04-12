let btn = document.querySelector("#btn")
let h2Ingredientes = document.querySelector("#ingredientes")
let h2Preparo = document.querySelector("#modo")
let ul= document.querySelector("#lista")
let ol = document.querySelector("#preparo")
let nomeReceita = document.querySelector("#nome")
let tempo = document.querySelector("#tempo")
let porcao = document.querySelector("#porção")

const receitas = [
    {nome: "macarrão",
    img: "https://img.itdg.com.br/tdg/images/recipes/000/020/816/315977/315977_original.jpg?mode=crop&width=710&height=400"},

    {nome: "panqueca",
    img: "https://img.itdg.com.br/tdg/images/recipes/000/000/760/326537/326537_original.jpg?mode=crop&width=710&height=400"
},
    {nome: "fricasse",
    img: "https://img.itdg.com.br/tdg/images/recipes/000/010/254/294238/294238_original.jpg?mode=crop&width=710&height=400"
    }
]
// muita atenção as vírgulas na criação de um objeto

let numero = 0

function gerar(){
    numero = Math.floor(Math.random() * receitas.length)
    // como não repetir o número logo que foi chamado?
    imagem.setAttribute('src', receitas[numero].img)

    console.log(numero)

    
    h2Ingredientes.innerHTML = "<h2>Ingredientes</h2>"
    h2Preparo.innerHTML = "<h2> Modo de Preparo </h2>"
    ul.innerHTML = ""
    ol.innerHTML = ""

    if (numero == 0){
        nomeReceita.innerHTML = "<h1> Macarrão com Bacon e Molho Branco </h1>"
        
        tempo.innerHTML = "<p>Preparo: 30 min</p>"
        porcao.innerHTML = "<p>Serve: 6 pessoas</p>"

        ul.innerHTML = "<ul> <li> 1 pacote de macarrão </li> <li> 2 copos de leite </li> <li>1 colher de manteiga</li> <li>1/2 kg de bacon frito</li><li>1 caldo de galinha</li><li>cebola, cheiro-verde a gosto</li> <li>2 colheres de maisena dissolvidas em leite</li><li>milho e ervilha</li> <li>sal a gosto</li> </ul>" 
        
        ol.innerHTML = "<ol> <li> Cozinhe o macarrão em água e sal. </li><li>Escorra, lave em água fria e reserve.</li><li>Frite o bacon e reserve.</li><li>Em uma panela junte a manteiga, a cebola picada, o cheiro-verde e os temperos que você desejar e frite.</li><li>Em seguida acrescente o leite e o caldo de galinha e o sal a gosto.</li><li>Quando começar a ferver acrescente a maisena dissolvida e deixe engrossar.</li><li>Junte o bacon, o milho e a ervilha.</li><li>Misture tudo no macarrão, cubra com bastante queijo e leve ao forno para gratinar.</li></ol>" 
} else if ( numero == 1){
    nomeReceita.innerHTML = "<h1> Panqueca de Carne Moída </h1>"
    
    tempo.innerHTML = "<p>Preparo: 40 min</p>"
    porcao.innerHTML = "<p>Serve: 10 pessoas</p>"

    ul.innerHTML = "<ul><li><strong>Massa</strong></li><li>1 e 1/2 xícara &#40;chá&#41; de farinha de trigo</li><li>1 xícara &#40;chá&#41; de leite</li><li>2 ovos</li><li>4 colheres &#40;sopa&#41; de óleo</li><li>sal a gosto</li><li><strong>Recheio</strong></li><li>300 g de carne moída</li><li>2 colheres &#40;sopa&#41; de cebola picada ou ralada</li><li>1/2 tomate cortado em cubos</li><li>1/2 lata de extrato de tomate</li><li>1 caixa de creme de leite</li><li>sal a gosto</li><li>400 g de muçarela fatiado</li><li>queijo ralado a gosto</li></ul>"

    ol.innerHTML = "<ol><li><strong>Massa</strong></li><li>Bata no liquidificador os ovos, o leite, o óleo, e acrescente a farinha de trigo aos poucos.</li><li>Após acrescentar toda a farinha de trigo, adicione sal a gosto.</li><li>Misture a massa até obter uma consistência cremosa.</li><li>Com um papel-toalha, espalhe óleo por toda a frigideira e despeje uma concha de massa.</li><li>Faça movimentos circulares para que a massa se espalhe por toda a frigideira.</li><li>Espere até a massa soltar do fundo e vire a massa para fritar do outro lado.</li><li>Recheio</li><li>Em uma panela, doure a cebola com o óleo e acrescente a carne.</li><li>Deixe cozinhar até que saia água da carne, diminua o fogo e tampe.</li><li>Acrescente o tomate picado e tampe novamente.</li><li>Deixe cozinhar por mais 3 minutos e misture.</li><li>Acrescente o extrato de tomate e temperos a gosto.</li><li>Deixe cozinhar por mais 10 minutos.</li><li>Quando o molho engrossar, desligue o fogo.</li><li>Deixe esfriar o molho, acrescente o creme de leite e misture bem.</li><li>Quando estiver bem homogêneo, leve novamente ao fogo e deixe cozinhar em fogo baixo por mais 5 minutos.</li><li><strong>Montagem</strong></li><li>Recheie a panqueca com uma fatia de mussarela, uma porção de carne e enrole.</li><li>Faça esse processo com todas as panquecas.</li><li>Despeje um pouco de caldo no fundo de um refratário, para untar.</li><li>Disponha as panquecas já prontas no refratário e despeje sobre elas o restante do molho.</li><li>Polvilhe queijo ralado sobre as panquecas.</li><li>Leve ao forno para gratinar, em fogo médio, por 20 minutos ou até que o queijo esteja derretido.</li></ol>"
} else if( numero == 2){
    nomeReceita.innerHTML = "<h1> Fricassê de Frango </h1>"
    
    tempo.innerHTML = "<p>Preparo: 30 min</p>"
    porcao.innerHTML = "<p>Serve: 5 pessoas</p>"

    ul.innerHTML = "<ul><li>1 lata de creme de leite</li><li>1 lata de milho verde</li><li>1 copo de requeijão cremoso</li><li>100 g de azeitona sem caroço</li><li>2 peitos de frango desfiados</li><li>200 g de mussarela fatiada</li><li>100 g de batata palha</li><li>1 xícara de água</li><li>1 pitada de sal</li></ul>"

    ol.innerHTML = "<ol><li>Bata no liquidificador o milho, o requeijão, o creme de leite e a água.</li> <li>Refogue o creme do liquidificador com o frango desfiado, as azeitonas e o sal até ficar com uma textura espessa.</li> <li>Coloque o refogado numa assadeira, cubra com mussarela e espalhe a batata palha por cima.</li> <li>Leve ao forno até borbulhar.</li> <li>Sirva com arroz branco.</li></ol>"
}
}