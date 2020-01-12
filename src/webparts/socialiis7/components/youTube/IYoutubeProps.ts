export interface IYoutubeProps {
  description: string;
  apiKey: string;
  objectId: string;
  objectType: string; //Like channelId, playlistId
  maxResults: number;
}
