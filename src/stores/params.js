import {derived, writable} from 'svelte/store';
import {autoType} from 'd3-dsv';


const defaultParams = {
    data: 'data/song_genres.json',
    dfAll: 'data/songs.csv',
    dfPersonal: 'data/my_most_listened.csv',
    corrMatrix: 'data/all_corr_matrix.csv',
    title: 'Los géneros más populares',
    subtitle: 'Playlist de los últimos 40 años',
    sources: 'Fuente: ...',
    embed: false,
    debug: false
};

export const embedParams = writable({});

export const params = derived(embedParams, ($embedParams, set) => {
    const urlParamsObj = new URLSearchParams(window.location.search);
    const urlParams = Object.fromEntries(urlParamsObj);
    const completeParams = {
        ...defaultParams,
        ...autoType(urlParams),
        ...autoType($embedParams)
    };
   
    set(completeParams);
});
