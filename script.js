$(document).ready(function(){

    fetch("pokedex.json")
    .then((rawData) => rawData.json())
    .then(pokedex => {

        let linkId = 0;
        pokedex.forEach(pokemon => {
           

            let id = pokemon["id"];
            let name = pokemon["name"]["english"];
            let image = pokemon["image"]["hires"];
            let types = pokemon["type"];
            let typesHtml = "";
            types.forEach (type => {
                typesHtml += `<span class="${type}">${type}</span>`
            });

            let species = pokemon["species"];


            $('.pokedex').append(
                ` <div class="poke-card">
                    <div><img src="${image}" alt="${name}"></div>
                        <div class="shadow"></div>
                        <div class="poke-data">
                            <ul type="none">
                                <li class="poke-id">#${id}</li>
                                <li class="poke-name">
                                <a href="pages/pokemon.html?id=${linkId++}">${name}</a></li>
                                <li class="poke-type">${typesHtml}</li>
                            </ul>
                        </div>
                    </div>`
            )

        })

    })

})