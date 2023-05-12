import { TypeToast } from "~/components/ToastCustom"
import { requestAnimationFrameAccordionInterFace } from "~/types"

const DownloadFile = async ({ url, fileName }: { url: string; fileName?: string }) => {
  if (url) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const blob = await response.blob()
        const blobUrl = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = blobUrl
        link.setAttribute("download", `${fileName || "video"}.mp4`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(blobUrl)
      }
    } catch {
      window.open(url, "_blank")
    }
  }
}

const allowArrTiktok = ["^https://vt[.]tiktok[.]com/.+", "^https://www[.]tiktok[.]com/@.+/video/.+"]
const allowArrFacebook = ["^https://www[.]facebook[.]com/.+/videos/.*", "https://www[.]facebook[.]com/reel/.*"]
const allowArrYoutube = ["^https://www[.]youtube[.]com/watch[?]v=.{11}", "^https://www[.]youtube[.]com/shorts/.{11}"]
const allowArrInstagram = ["^https://www[.]instagram[.]com/reel/.{11}(/?.*)"]
const allowArrUidFb = ["^https://www[.]facebook[.]com/profile[.]php[?]id=.*", "^https://www[.]facebook[.]com/.*"]

const checkOneRegex = (link: string, regex: string) => {
  let error = true
  if (regex && link) {
    const regexNew = new RegExp(regex)
    error = !regexNew.test(link.trim())
  }

  return error
}

const checkVaidUrl = (link: string, allowArr?: string[]) => {
  let error = true
  const allowArrNew = allowArr ?? allowArrTiktok
  if (allowArrNew && link) {
    if (Array.isArray(allowArrNew)) {
      for (const regex of allowArrNew) {
        error = checkOneRegex(link, regex)
        if (!error) {
          break
        }
      }
    }
  }

  return error
}

const subtringDomain = (domain?: string[], str?: string) => {
  let valueStr = ""
  if (domain && str) {
    for (const dm of domain) {
      const maxLength = dm.length
      const newStr = str.trim().substring(0, maxLength)
      if (dm === newStr) {
        valueStr = str.trim().substring(maxLength, maxLength + 11)
        break
      }
    }
  }
  return valueStr
}

const SubmitCheckError = ({
  link,
  callBackError,
  callBackSucc,
  allowArr
}: {
  link?: string | number
  callBackError?: () => void
  callBackSucc?: () => void
  allowArr?: string[]
}) => {
  const error = checkVaidUrl(link as string, allowArr)
  if (!error) {
    typeof callBackSucc === "function" && callBackSucc()
  } else {
    typeof callBackError === "function" && callBackError()
  }
}

const MsgType = (title: string, error = true) => {
  return {
    title,
    type: error ? TypeToast.ERROR : TypeToast.SUCCESS
  }
}

const incrementHeight = (progress: number, element?: HTMLDivElement) => {
  if (element) {
    const sectionHeight = progress * element.scrollHeight
    element.style.height = `${sectionHeight}px`
  }
}

const decrementHeight = (progress: number, element?: HTMLDivElement) => {
  if (element) {
    const sectionHeight = element.scrollHeight - progress * element.scrollHeight
    element.style.height = `${sectionHeight > element.scrollHeight ? element.scrollHeight : sectionHeight}px`
    element.style.overflow = "hidden"
  }
}

const requestAnimationFrameAccordion = ({
  element,
  callBackDone,
  callProgress
}: requestAnimationFrameAccordionInterFace) => {
  const start = performance.now()

  if (element) {
    requestAnimationFrame(function animate(time) {
      const runtime = time - start,
        relativeProgress = runtime / 200,
        process = Math.min(relativeProgress, 1)

      if (process < 1) {
        typeof callProgress === "function" && callProgress(process, element)
        requestAnimationFrame(animate)
      }

      if (process === 1) {
        typeof callBackDone === "function" && callBackDone()
      }
    })
  }
}

const getBaseUrl = () => {
  let url = ""
  const currentLocation = window.location
  url = `${currentLocation.origin}`
  return url
}

const InitPadding = () => {
  const widWindown = window.innerWidth
  const header = document.getElementById("header")
  const wapperContainer: HTMLDivElement | null = document.querySelector(".wapper-container")
  if (header && wapperContainer) {
    if (widWindown < 768) {
      const { height: heightHeader } = header.getBoundingClientRect()
      wapperContainer.style.marginTop = `${heightHeader + 30}px`
    } else {
      wapperContainer.removeAttribute("style")
    }
  }
}

export {
  DownloadFile,
  checkVaidUrl,
  allowArrTiktok,
  allowArrFacebook,
  allowArrYoutube,
  allowArrInstagram,
  allowArrUidFb,
  MsgType,
  SubmitCheckError,
  checkOneRegex,
  subtringDomain,
  requestAnimationFrameAccordion,
  incrementHeight,
  decrementHeight,
  getBaseUrl,
  InitPadding
}
