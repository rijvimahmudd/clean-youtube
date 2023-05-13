import { Container, Box, Typography, Stack, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const PlaylistDescription = ({ playlists }) => {
	const { playlistId } = useParams();
	const current = playlists[playlistId];
	console.log('Current Course -->', current);

	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Box
				sx={{
					height: '100%',
					width: '100%',
				}}
				component={'img'}
				src={current.playlistThumbnail.url}
			></Box>
			<Typography variant="h2" align="center">
				{current.playlistTitle}
			</Typography>
			<Typography variant="body1">{current.playlistDescription}</Typography>

			{current.playlistItems.map(item => {
				return (
					<>
						<Button
							to={`/player/${playlistId}/${item?.contentDetails.videoId}`}
							component={Link}
						>
							{item?.contentDetails.videoId}
						</Button>
					</>
				);
			})}
		</Container>
	);
};

export default PlaylistDescription;
