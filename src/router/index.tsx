import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom"
import App from "~/App"
import config from "~/config"
import DefaultLayout from "~/layout/DefaultLayout"
import FindUidFacebook from "~/pages/FindUidFacebook"
import VideoFacebookReel from "~/pages/VideoFacebookReel"
import VideoInstagramReel from "~/pages/VideoInstagramReel"
import VideoYoutubeShort from "~/pages/VideoYoutubeShort"

export const routes: RouteObject[] = [
  {
    path: config.path.home,
    element: (
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    ),
    children: [
      {
        path: config.path.simple_tikdown_web,
        element: <App />
      },
      {
        path: config.path.facebook_reels_download,
        element: <VideoFacebookReel />
      },
      {
        path: config.path.youtube_shorts_download,
        element: <VideoYoutubeShort />
      },
      {
        path: config.path.instagram_reels_download,
        element: <VideoInstagramReel />
      },
      {
        path: config.path.find_uid_facebook,
        element: <FindUidFacebook />
      }
    ]
  }
]

export const router = createBrowserRouter(routes)
