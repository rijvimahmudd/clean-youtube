import { useEffect } from 'react';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
	const { getPlaylistById, playlists } = usePlaylists();
	useEffect(() => {
		getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
	}, []);

	console.log(playlists);
	return (
		<>
			<h1>hello</h1>
		</>
	);
};

export default App;
