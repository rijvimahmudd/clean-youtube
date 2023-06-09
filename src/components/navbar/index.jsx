import { Button, Link, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PlaylistForm from '../playlist-form';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = ({ getPlaylistById }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getPlaylistId = playlistId => {
		getPlaylistById({ playlistId });
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" color="default" sx={{ py: 2 }}>
				<Container maxWidth={'lg'}>
					<Toolbar>
						<Stack sx={{ flexGrow: 1 }}>
							<Link
								to="/"
								component={RouterLink}
								sx={{ textDecoration: 'none', color: 'black' }}
							>
								<Typography variant="h4">Clean Youtube</Typography>
							</Link>
							<Link
								href="https://rijvimahmudd.showwcase.com/"
								target={'_blank'}
								sx={{ textDecoration: 'none', color: 'black' }}
							>
								<Typography variant="body1">By Rijvi Mahmud</Typography>
							</Link>
						</Stack>

						<Stack flexDirection={'row'}>
							<Button
								href={'https://github.com/rijvimahmudd/clean-youtube'}
								target={'_blank'}
							>
								<GitHubIcon></GitHubIcon>
							</Button>
							<Button variant="contained" onClick={handleClickOpen}>
								Add Playlist
							</Button>
						</Stack>

						<PlaylistForm
							open={open}
							handleClose={handleClose}
							getPlaylistId={getPlaylistId}
						/>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Navbar;
