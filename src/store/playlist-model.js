import { action, persist, thunk } from 'easy-peasy';
import getPlaylist from '../api';

const playlistModel = persist({
	data : {},
	error : "",
	isLoading:false,
	addPlaylist : action((state, payload)=>{
		state.data[payload.playlistId] = payload;
	}),
	setLoading : action((state, payload)=>{
		state.isLoading = payload;
	}),
	setError : action((state, payload)=>{
		state.error = payload;
	}),

	getPlaylist: thunk(async({addPlaylist, setLoading, setError}, {playlistId, refresh = false}, {getState})=>{
		if(getState().data[playlistId] && !refresh) return;
		setLoading(true);
		try {
			const playlist =  await getPlaylist(playlistId);
			addPlaylist(playlist);
		} catch (e) {
			setError(e.response?.data?.error?.message || "something went wrong");
		} finally {
			setLoading(false);

		}

	})


}, {storage:"localStorage"});

export default playlistModel;
