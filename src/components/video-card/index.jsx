import { Card, Box, Typography, CardContent, CardMedia } from '@mui/material';

const VideoCard = ({ item, channelName }) => {
	return (
		<Card sx={{ display: 'flex', height: 90, justifyContent: 'space-between' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto', flexGrow: 1 }}>
					<Typography component="div" variant="subtitle2">
						{item.title}
					</Typography>
					<Typography variant="caption" color="text.secondary" component="div">
						{channelName}
					</Typography>
				</CardContent>
			</Box>
			<CardMedia
				component="img"
				sx={{
					width: '100%',
					height: 'auto',
					maxHeight: 90,
					maxWidth: 150,
					objectFit: 'fill',
				}}
				image={item?.thumbnail?.url}
			/>
		</Card>
	);
};

export default VideoCard;
