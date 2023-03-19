const PokemonName = document.querySelector('.PokemonName');
const PokemonNro = document.querySelector('.PokemonNro');
const PokemonImg = document.querySelector('.PokemonImg');

const form = document.querySelector('.form');
const input = document.querySelector('.inputSearch');

const buttonPrev = document.querySelector('.btn-Prev');
const buttonNext = document.querySelector('.btn-Next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => { 
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }    
}

const renderPokemon = async (pokemon) => {
    /*Texto de loading até receber o retorno 200 da API*/
    PokemonName.innerHTML = 'Loading ...';

        const data = await fetchPokemon(pokemon);

    if(data){
        PokemonImg.style.display ='block'
        PokemonName.innerHTML = data.name;
        PokemonNro.innerHTML = data.id;
        PokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];     
        input.value = ''
            searchPokemon = data.id;        
    }else{
        PokemonImg.style.display ='none'
        PokemonNro.innerHTML = '#';
        PokemonName.innerHTML = 'NotFound';
    }
}

renderPokemon(searchPokemon)

/*inputando o Pokemon pelo usuario*/
form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value = '';   
})

/*Ação dos Botoes Voltar e Avançar */
buttonPrev.addEventListener('click', () => {
    if(searchPokemon>1){
        searchPokemon -= 1
        renderPokemon(searchPokemon)
    }
})

buttonNext.addEventListener('click', () => {
    searchPokemon += 1
    renderPokemon(searchPokemon)
    
})

