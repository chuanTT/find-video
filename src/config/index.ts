import router from "./routerPath"

const config = {
  path: router,
  linkApi: {
    tiktok: {
      // url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
      url: "https://tiktok-download.onrender.com/api/v1/tiktok/tiktok-download",
      host: "tiktok-video-no-watermark2.p.rapidapi.com"
    },
    facebook: {
      url: "https://tiktok-download.onrender.com/api/v1/facebook/facebook-download",

      // url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
      host: "facebook-reel-and-video-downloader.p.rapidapi.com"
    },
    instagram: {
      url: "https://instagram-downloader15.p.rapidapi.com/media",
      host: "instagram-downloader15.p.rapidapi.com"
    },
    youtube: {
      // url: "https://tiktok-download.onrender.com/api/v1/youtube/youtube-download",
      url: "https://youtube-media-downloader.p.rapidapi.com/v2/video/details",
      host: "youtube-media-downloader.p.rapidapi.com",
      urlDownload: "https://tiktok-download.onrender.com/api/v1/youtube/youtube-download-quality",
      domain: ["https://www.youtube.com/shorts/", "https://www.youtube.com/watch?v=", "https://youtube.com/shorts/"]
    }
  }
}

export default config
