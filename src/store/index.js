import { createStore } from 'easy-peasy';
import playlistModel from './playlist-model';
import favoriteModel from './favorite-model';
import recentModel from './recent-model';

const store = createStore({
	playlist: playlistModel,
	favorite: favoriteModel,
	recent: recentModel,
});

export default store;
