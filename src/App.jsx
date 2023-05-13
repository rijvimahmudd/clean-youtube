import { Grid, Typography, Container, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/navbar';
import PlaylistCardItem from './components/playlist-card-item';
import PlaylistDescription from './components/playlistDescriptionPage';
import Player from './components/player';

import YouTube from 'react-youtube';

// const playlistId = 'PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl';

const HomePage = ({ playlistArray }) => {
	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			{playlistArray.length > 0 && (
				<Grid container alignItems="stretch">
					{playlistArray.map(item => (
						<Grid item xs={12} md={6} lg={4} mb={2} key={item?.playlistId}>
							<PlaylistCardItem
								playlistThumbnail={item.playlistThumbnail}
								playlistTitle={item.playlistTitle}
								channelTitle={item.channelTitle}
								playlistId={item?.playlistId}
								channelDp={item?.channelDp?.url}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Container>
	);
};

const NotFound = () => {
	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Typography variant="h2" align="center">
				404 Page Not Found!
			</Typography>
		</Container>
	);
};

const App = () => {
	const playlist = useStoreActions(actions => actions.playlist);

	const playlistitem = useStoreState(state => state.playlist.data);

	// useEffect(() => {
	// 	playlist.getPlaylist(playlistId);
	// }, []);

	useEffect(() => {
		console.log(playlistitem);
	}, []);

	const playlistArray = Object.values(playlistitem);

	console.log('playlistItem ------>', playlistArray);
	// console.log(error);

	return (
		<BrowserRouter>
			<CssBaseline />
			<Navbar getPlaylistById={playlist.getPlaylist} />

			<Routes>
				<Route
					path="/player/:playlistId"
					element={<PlaylistDescription playlists={playlistitem} />}
				></Route>
				<Route path="/player/:playlistId/:vid" element={<Player />} />
				<Route path="/" element={<HomePage playlistArray={playlistArray} />} />
				<Route path="/youtube" element={<YouTube videoId={'EvedtMPYDPo'} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
