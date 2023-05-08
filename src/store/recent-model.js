import { action } from "easy-peasy";
import { persist } from "easy-peasy";

const recentModel = persist({
    items:[],
    addToRecent : action((state, playlistId)=>{
        state.items.unshift(playlistId);
        state.items = state.items.slice(0,5);
    })
}, {storage:"localStorage"});


export default recentModel;