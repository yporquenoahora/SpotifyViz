import { derived } from 'svelte/store';
import { json, csv } from 'd3-fetch';
import { params } from '@stores/params';

export let dataSongsGenres;
export let dataSongsDecades;
export let dataPersonal;
export let myData;
export let corrMatrixDecades;

export const spotifyUsers = {
  data: [
    { label: "Resto del mundo", value: 28 },
    { label: "Europa", value: 30 },
    { label: "Latinoamérica", value: 21 },
    { label: "Norteamérica", value: 21 }
  ],
  params: { h: 200, color: "green", grid: false, legend: false }
};

// Define una función asíncrona para cargar los datos
async function loadData() {
  const { data, dfAll } = params; // Supongo que 'params' es un store reactivo
  
  const [jsonData, csvData] = await Promise.all([
    json(data),
    csv(dfAll)
  ]);

  return {
    data: jsonData,
    dfAll: csvData
  };
}

// Utiliza 'derived' para observar cambios en 'params'
export const data = derived(params, async ($params) => {
  try {
    const result = await loadData();
    console.log("data params", result.data, result.dfAll);
    return result;
  } catch (error) {
    console.error("La promesa fue rechazada:", error);
    return null;
  }
});


// Función para inicializar los datos
async function init() {
  dataSongsGenres = await json("data/song_genres.json");
  dataSongsDecades = await csv("data/songs.csv");
  dataPersonal = await csv("data/my_most_listened.csv");
  myData = await json("data/my_song_genres.json");
  corrMatrixDecades = await csv("data/all_corr_matrix.csv");
}



// Llama a la función de inicialización cuando se importa el módulo
init();
