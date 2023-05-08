import axios from 'axios';

const key = import.meta.env.VITE_YOUTUBE_API_KEY || process.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItem = async (playlistId, pageToken = '', result = []) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`;

	const { data } = await axios.get(URL);
	result = [...result, ...data.items];
	if (data.nextPageToken) {
		result = getPlaylistItem(playlistId, data.nextPageToken, result);
	}
	return result;
};

const getChannelInfo =async (channelId) =>{
	const URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${key}`;

	const {data} = await axios.get(URL);

	const {thumbnails : {high}} = data?.items[0]?.snippet;

	return {
		thumbnail : high
	}

	
}

const getPlaylist = async (playlistId) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

	const { data } = await axios.get(URL);
	let playlistItems = await getPlaylistItem(playlistId);
	
	const {
		title: playlistTitle,
		description: playlistDescription,
		thumbnails,
		channelId,
		channelTitle,
	} = data?.items[0]?.snippet;
	
	let channelItem = await getChannelInfo(channelId);
	console.log("channelItem",channelItem);
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
		playlistItems,
		playlistId,
		playlistTitle,
		playlistDescription,
		playlistThumbnail: thumbnails.maxres,
		channelId,
		channelTitle,
		channelDp : channelItem.thumbnail,
	};
};

export default getPlaylist;
