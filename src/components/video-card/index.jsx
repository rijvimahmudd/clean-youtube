import { Card, Box, Typography, CardContent, CardMedia } from '@mui/material';

const VideoCard = ({ item, channelName }) => {
	return (
		<Card sx={{ display: 'flex' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 1' }}>
					<Typography component="div" variant="h5">
						{item.title}
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						{channelName}
					</Typography>
				</CardContent>
			</Box>
			<CardMedia
				component="img"
				sx={{ width: '100%', height: '100%', maxHeight: 150, maxWidth: 400 }}
				image={item?.thumbnail?.url}
				alt="Live from space album cover"
			/>
		</Card>
	);
};

export default VideoCard;
