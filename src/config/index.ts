import router from "./routerPath"

const BASE_URL = import.meta.env.VITE_BASE_URL

const config = {
  path: router,
  linkApi: {
    tiktok: {
      // url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
      url: `${BASE_URL}/api/v1/tiktok/tiktok-download`,
      host: "tiktok-video-no-watermark2.p.rapidapi.com"
    },
    facebook: {
      url: `${BASE_URL}/api/v1/facebook/facebook-download`,

      // url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
      host: "facebook-reel-and-video-downloader.p.rapidapi.com"
    },
    instagram: {
      // url: "https://instagram-downloader15.p.rapidapi.com/media",
      url: `${BASE_URL}/api/v1/instagram/instagram-download`,
      host: "instagram-downloader15.p.rapidapi.com"
    },
    youtube: {
      url: `${BASE_URL}/api/v1/youtube/youtube-download`,
      // url: "https://youtube-media-downloader.p.rapidapi.com/v2/video/details",
      host: "youtube-media-downloader.p.rapidapi.com",
      // urlDownload: `${BASE_URL}/api/v1/youtube/youtube-download-quality`,
      domain: ["https://www.youtube.com/shorts/", "https://www.youtube.com/watch?v=", "https://youtube.com/shorts/"]
    }
  }
}

export default config
