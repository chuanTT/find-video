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
