import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const init = {
	height: window.innerHeight / 1.3,
	width: window.innerWidth / 1.5,
};

const Player = () => {
	const updateSize = () => {
		const maxHeight = window.innerHeight / 1.3;
		const maxWidth = window.innerWidth / 1.2;

		let width = maxWidth;
		let height = width * (9 / 16);

		if (height > maxHeight) {
			height = maxHeight;
			width = height * (16 / 9);
		}

		setHw({
			...init,
			height,
			width,
		});
	};
	const [hw, setHw] = useState({ ...init });

	useEffect(() => {
		updateSize();
		window.addEventListener('resize', updateSize);

		return () => {
			window.removeEventListener('resize', updateSize);
		};
	}, []);

	const { vid } = useParams();
	return (
		<Container sx={{ my: 16 }}>
			<YouTube
				videoId={vid}
				opts={{
					height: hw?.height,
					width: hw?.width,
					playerVars: {
						autoplay: 1,
						rel: 0,
						modestbranding: 1,
						origin: 'http://localhost:5173',
					},
				}}
			/>
		</Container>
	);
};

export default Player;
