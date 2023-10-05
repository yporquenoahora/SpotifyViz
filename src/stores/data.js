import {derived} from 'svelte/store';
import {json, csv} from 'd3-fetch';
import {params} from '@stores/params';


export const data = derived(params, ($params) => {
    const { data, dfAll } = $params;
   
    return Promise.all([
        json(data),
        csv(dfAll)
    ]).then(([jsonData, csvData]) => {
        console.log("data params",jsonData, csvData)
        return {
            data:jsonData,
            dfAll: csvData
        };
    }).catch((error) => {
        console.error("La promesa fue rechazada:", error);
      });
});


export const dataSongsGenres = await json("data/song_genres.json")

export const dataSongsDecades = await csv("data/songs.csv")

export const dataPersonal = await csv("data/my_most_listened.csv") 
    
export const myData = await json("data/my_song_genres.json");

export const corrMatrixDecades = await csv("data/all_corr_matrix.csv");//set right name for corr_matrix file

export const spotifyUsers = 
   { data:[
    { label: "Resto del mundo", value: 28 },
    { label: "Europa", value: 30 },
    { label: "Latinoamérica", value: 21 },
    { label: "Norteamérica", value: 21 }],
    params:{h: 200, color:"green",grid: false, legend: false}
}
  ;