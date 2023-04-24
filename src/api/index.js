import axios from 'axios';

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItem = async (playlistId, pageToken = '', result = []) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`;

	const { data } = await axios.get(URL);
	result = [...result, ...data.items];
	if (data.nextPageToken) {
		result = getPlaylistItem(playlistId, data.nextPageToken, result);
	}
	return result;
};

const getPlaylist = async (playlistId) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

	
	const { data } = await axios.get(URL);

	const {
		title: playlistTitle,
		description: playlistDescription,
		thumbnails,
		channelId,
		channelTitle,
	} = data?.items[0]?.snippet;

	let playlistItems = await getPlaylistItem(playlistId);
	
	playlistItems = playlistItems.map((item) => {
		const {
			title,
			description,
			thumbnails: { maxres },
		} = item.snippet;

		return {
			title,
			description,
			thumbnail: maxres,
			contentDetails: item.contentDetails,
		};
	});

	return {
		playlistId,
		playlistTitle,
		playlistDescription,
		playlistThumbnail: thumbnails.maxres,
		channelId,
		channelTitle,
		playlistItems,
	};
};

export default getPlaylist;