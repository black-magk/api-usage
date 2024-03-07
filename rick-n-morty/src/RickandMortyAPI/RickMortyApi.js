import axios from "axios";

const getRickMorty = async (setStateVariableFunction) => {
       
    try {
      
      // https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1
      const response = await axios.get(`https://rickandmortyapi.com/api/character`);
      const data = response.data.results;

      const rickMortyCleaned = data.map(item => ({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        type: item.type,
        gender: item.gender,
        location_name: item.location.name,
        location_url: item.location.url,
        character_url: item.image,
        casted_episodes: item.episode,
        character_completed_data: item.url,
        character_creation: item.created
      }));
       
      setStateVariableFunction(rickMortyCleaned)
      
    } catch (error) {
      console.log(error);
    }
};
  
export default getRickMorty;

