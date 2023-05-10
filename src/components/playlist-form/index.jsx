import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import isValidUrl from '../../utils/isValidUrl';

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
	const [state, setState] = useState('');

	const handleSubmit = () => {
		if (!state) {
			alert('Invalid State');
		} else {
			let id;
			if (isValidUrl(state)) {
				const params = new URL(state).searchParams;
				id = params.get('list');
			} else if (state.startsWith('PL')) {
				id = state;
			} else {
				alert('Enter a valid playlist id or url');
				return;
			}

			getPlaylistId(id);
			setState('');
			handleClose();
		}
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add Playlist</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a new playlist please insert the playlist id or playlist link.
					Please make sure the link is correct. Otherwise we won't able to fetch
					the playlist information.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					label="Playlist ID or Link"
					fullWidth
					variant="standard"
					onChange={e => setState(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleSubmit}>Add Playlist</Button>
			</DialogActions>
		</Dialog>
	);
};

export default PlaylistForm;
