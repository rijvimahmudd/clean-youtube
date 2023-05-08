import { action } from "easy-peasy";
import { persist } from "easy-peasy";

const favoriteModel = persist({
    items:[],
    addToFavorite : action((state, playlistId)=>{
        state.items.push(playlistId);
    }),
    removeFromFavorite : action((state, playlistId)=>{
        state.items = state.items.filter(pid => playlistId !== pid);

    }),
}, {storage:"localStorage"});


export default favoriteModel;