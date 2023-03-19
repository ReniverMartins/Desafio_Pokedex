<h1>POKÉ API</h1>

<h2><b>Hello World!!</b></h2>

<p>Realizei esse desafio utilizando como base conhecimento e ajuda o Canal <b>@ManualdoDev</b>, se você busca um lugar para um aprendizado dinamico e com muita clareza, corre lá, tenho certeza que assim como eu, você vai conseguir aprender muita coisa legal!</p> 


<p>Dito isso, vamos lá!

Para desenvolver o Desafio utilizamos as seguintes tecnologias:</p> 

<h3><b>.:: Front ::.</b></h3>
Para o frontEnd da nossa Pokédex utilizamos a boa e velha dupla dinamica: <b> HTML CSS</b>.
<br>
<br>

<h3><b>.:: BackEnd ::.</b></h3>
No backEnd utilizamos o mil e uma utilidades <b>JavaScript</b>, com todas as suas facilidades e ferramentas para consumir a PokéAPI. (https://pokeapi.co/), como trata-se de um projeto a nivel de iniciante nao houve a necessidade de incluir nenhum tipo de frameWork, porém podemos pensar em uma v2 para tal.
<br>
<br>

Vamos lá!!
<br>
Agora que já falamos brevemente sobre as tecnologias utilizadas, em um contexto geral, realizamos o consumo do endPoint:
 
<code>https://pokeapi.co/api/v2/pokemon/</code> 

Ele nos retorna dentre outros dados as principais informações do pokemon. <b>Nome, Numero e seu gif animado</b> são as informações que vamos utilizar para exibição no front da aplicação.
<br>

Utilizei o consumo da biblioteca <b>.Json</b> para tratar o retorno da API e tornar o consumo/navegação do retorno da API o simples possivel.
<br>

Fora tudo já dito anteriormente foram criadas alguma <b>ArrowFunctions</b> para tornar o projeto o mais dinamico possivel, simulando de fato uma Pokédex, como a que já vimo o <b>Ash Ketchum</b> utilizando, com a possibilidade de avançar vizualizando todos os pokemons e/ou realizar a busca do seu Pokemon Favorito.

É isso, fique avontade para clonar ou realizar o fork do repositorio, para deixar a Pokédex ao seu gosto! 
<br>
<br>
<br>
<h3><b>@Principais funções do projeto</b></h3>

<code>const fetchPokemon = async (pokemon)</code>:Realiza a busca do Pokemon na API;
<br>

<code>const renderPokemon = async (pokemon)</code>:Realiza a renderização do GifPokemon no Front;
<br>

<code>const data = await APIResponse.json()</code>: Variavel utilizada para gravar os dados retornados via .json, e seguirmos com todo o restante do fluxo da nossa aplicação.
<br>
<br>
<i><b>Obs</b>: Utilizamos funções assincronas para utilizarmos o "Await" evitando erro na aplicação pelo atraso de resposta da API.</i>
<br>
<br>

Ate mais!!!!











