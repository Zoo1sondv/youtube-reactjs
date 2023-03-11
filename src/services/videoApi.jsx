// import { KEY } from '@/config/AppConst';
import axiosClient, { API_DEFAULT_PARAMS } from './axiosClient';

const videoApi = {
  getHome(pageToken) {
    return axiosClient.get('/videos', {
      params: {
        ...API_DEFAULT_PARAMS,
        chart: 'mostPopular',
        part: ['snippet', 'statistics', 'status'],
        pageToken: pageToken,
      },
    });
  },

  getFilterTopic(param) {
    return axiosClient.get('/search', {
      params: { ...API_DEFAULT_PARAMS, q: param },
    });
  },

  getInfoVideo(videoId) {
    return axiosClient.get('/videos', {
      params: {
        ...API_DEFAULT_PARAMS,
        part: ['snippet', 'statistics', 'status'],
        id: videoId,
      },
    });
  },

  getSearch(param, pageToken) {
    return axiosClient.get('/search', {
      params: {
        ...API_DEFAULT_PARAMS,
        q: param,
        pageToken: pageToken,
      },
    });
  },

  getChannel(ChannelId) {
    return axiosClient.get('/channels?', {
      params: {
        ...API_DEFAULT_PARAMS,
        id: ChannelId,
      },
    });
  },

  getVideoRelated(param, pageToken, video) {
    return axiosClient.get('/search?', {
      params: {
        ...API_DEFAULT_PARAMS,
        relatedToVideoId: param,
        pageToken: pageToken,
        type: video,
      },
    });
  },
};

export default videoApi;
