import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Player = () => {
	const { vid } = useParams();
	return (
		<Container sx={{ my: 16 }}>
			<YouTube videoId={vid}></YouTube>
		</Container>
	);
};

export default Player;
