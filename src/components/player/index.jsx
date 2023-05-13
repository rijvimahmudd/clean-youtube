import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Player = () => {
	const { vid } = useParams();
	return (
		<>
			<YouTube videoId={vid}></YouTube>
		</>
	);
};

export default Player;
