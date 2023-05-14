import { Container, Box, Typography, Link, Stack, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { Link as rLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import VideoCard from '../video-card';
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
			<Box
				component={'div'}
				sx={{
					width: '100%',
					overflowX: 'auto',
					whiteSpace: 'pre-wrap',
				}}
			>
				<Typography
					variant="body1"
					component={'p'}
					sx={{
						width: '100%',
						minHeight: '130px',
					}}
				>
					{current.playlistDescription === '' ? (
						<Typography variant="h5"> No description found !!</Typography>
					) : (
						current.playlistDescription
					)}
				</Typography>
			</Box>

			{current.playlistItems.map(item => {
				return (
					<Link
						component={rLink}
						m={4}
						underline="none"
						to={`/player/${playlistId}/${item?.contentDetails?.videoId}`}
						key={nanoid()}
					>
						<VideoCard
							item={item}
							channelName={current.channelTitle}
						></VideoCard>
					</Link>
				);
			})}
		</Container>
	);
};

export default PlaylistDescription;
