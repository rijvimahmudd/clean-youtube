import axios from "axios";

const key = `AIzaSyAxHDeMP1MOVjwvV-PN_b7yrMx__8dfsjw`

const getPlaylist = async (playlistId, pageToken='', result = []) => {

    try {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Cid%2Csnippet%2Cstatus&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}&key=${key}`

    const {data} = await axios.get(url);

    result = [...result, ...data.items];

    
    if(data.nextPageToken){
        result = getPlaylist(playlistId, data.nextPageToken, result);
    }
    
    return result;
        
    } catch (error) {
        console.log(error);
    }
    

}


export default getPlaylist;