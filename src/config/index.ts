import router from "./routerPath"

const config = {
  path: router,
  linkApi: {
    tiktok: {
      url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
      host: "tiktok-video-no-watermark2.p.rapidapi.com"
    },
    facebook: {
      // url: "https://facebook-video-and-reel-downloader.p.rapidapi.com/",
      // host: "facebook-video-and-reel-downloader.p.rapidapi.com"

      url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
      host: "facebook-reel-and-video-downloader.p.rapidapi.com"
    },
    instagram: {
      url: "https://instagram-downloader15.p.rapidapi.com/media",
      host: "instagram-downloader15.p.rapidapi.com"
    },
    youtube: {
      url: "https://youtube-media-downloader.p.rapidapi.com/v2/video/details",
      host: "youtube-media-downloader.p.rapidapi.com",
      domain: ["https://www.youtube.com/shorts/", "https://www.youtube.com/watch?v="]
    }
  }
}

export default config
