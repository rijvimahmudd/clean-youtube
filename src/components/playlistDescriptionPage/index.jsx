import {
	Container,
	Box,
	Typography,
	Link,
	Stack,
	Grid,
	Button,
} from '@mui/material';
import { nanoid } from 'nanoid';
import { Link as rLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import VideoCard from '../video-card';
const PlaylistDescription = ({ playlists, getNewPlaylistItems }) => {
	const { playlistId } = useParams();
	const current = playlists[playlistId];
	console.log('Current Course -->', current);

	function makeLinksClickable(description) {
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		const parts = description?.split(urlRegex);
		return parts?.map((part, index) => {
			if (part.match(urlRegex)) {
				return (
					<Link href={part} target="_blank" underline="none" key={index}>
						{part}
					</Link>
				);
			} else {
				return part;
			}
		});
	}
	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={5}>
					<Grid item xs={6}>
						<Stack spacing={4}>
							<Box
								sx={{
									height: '100%',
									width: '100%',
									maxHeight: '300px',
								}}
								component={'img'}
								src={current.playlistThumbnail.url}
							></Box>
							<Typography variant="h5" align="center">
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
									lineHeight={1.4}
								>
									{current.playlistDescription === ''
										? 'No description found !!'
										: makeLinksClickable(current.playlistDescription)}
								</Typography>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Button
							sx={{ margin: 5 }}
							onClick={() => {
								if (playlistId) {
									getNewPlaylistItems({ playlistId, refresh: true });
								}
							}}
						>
							Refresh
						</Button>
						{current.playlistItems.map(item => {
							return (
								<Link
									component={rLink}
									m={2}
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
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default PlaylistDescription;
