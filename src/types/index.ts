import { ReactNode } from "react"

export interface defaultProps {
  children: ReactNode
}

export interface configHeaderLinkType {
  to?: string
  name?: string
  logo?: string
}

export interface configFooterChildrenType {
  link?: string
  name?: string
  isArrow?: boolean
  isDots?: boolean
  Icon?: () => JSX.Element
}

export interface configFooterType {
  head?: string
  children?: configFooterChildrenType[]
  classParent?: string
  classDivChild?: string
  lastReactElement?: () => JSX.Element
  innerReactElement?: () => JSX.Element
}

export interface ConfigListMXHType {
  Icon?: () => JSX.Element
  color?: string
  link?: string
}

export interface ConfigHeadingTile {
  isLoading?: boolean
  head?: string
  desc?: string
  note?: string
  instruct?: string
  submitButton?: (vl: string | number) => void
  onChangeInput?: (vl: string | number) => void
  children?: ReactNode
  placeholder?: string
  textButton?: string
  value?: string
  isUpdate?: boolean
}

export interface apiTitokResult {
  origin_cover?: string
  title?: string
  play?: string
  id?: string
  author?: {
    nickname?: string
  }
}

export interface apiYoutubeResult {
  hd?: string
  title?: string
  vid?: string
  channel?: {
    name?: string
  }
  audios?: {
    items?: [
      {
        url?: string
        quality?: string
        extension?: string
        sizeText?: string
      }
    ]
  }
  thumbnails?: [
    {
      url?: string
    }
  ]
  videos?: {
    items?: [
      {
        url?: string
        quality?: string
        extension?: string
        sizeText?: string
      }
    ]
  }
}

export interface mediaConfigInstagram {
  url?: string
  thumbnail?: string
}

export interface apiInstagramResult {
  owner?: {
    username?: string
    full_name?: string
  }
  media?: mediaConfigInstagram[]
}

export interface apiFacebookResult {
  hd?: string
  title?: string
  thumbnail?: string
}

export interface apiFacebookResultNew {
  title?: string
  thumbnail?: string
  links?: {
    "Download High Quality"?: string
  }
}

export interface requestAnimationFrameAccordionInterFace {
  element?: HTMLDivElement
  callBackDone?: () => void
  callProgress?: (process: number, element?: HTMLDivElement) => void
}

export interface awemeListTiktok {
  aweme_id?: string | number
  desc?: string
  author?: {
    uid?: string
    nickname?: string
    signature?: string
    avatar_thumb?: {
      uri?: string
      url_list?: string[]
      width?: number | string
      height?: number | string
    }
    birthday?: string
  }
  video?: {
    play_addr?: {
      url_list?: string[]
      url?: string
    }
    cover?: {
      url_list?: string[]
      url?: string
    }
  }
}

export interface instagramResultNew {
  id?: string
  code?: string
  text?: string
  user?: {
    pk_id?: string
    full_name?: string
    profile_pic_url?: string
  }
  image_versions2?: {
    igtv_first_frame?: { url?: string }
    first_frame?: { url?: string }
  }
  video_versions?: { url?: string }
}
export interface dynamicData
  extends awemeListTiktok,
    apiYoutubeResult,
    apiInstagramResult,
    apiFacebookResult,
    apiFacebookResultNew,
    instagramResultNew {}

export interface apiTitokResultProps {
  aweme_list?: awemeListTiktok[]
}
