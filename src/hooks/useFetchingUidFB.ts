import { useEffect, useState, useRef } from "react"

interface dataFindUidList {
  link?: string
  result?: string
}

interface useFetchingUidFBProps {
  link?: string
  callBack?: (uid: string) => void
  baseUrl?: string
  succesErorrFuc?: () => void
  errorFuc?: () => void
  fucOldLink?: (uid?: string) => void
}

const useFetchingUidFB = ({ link, callBack, baseUrl, errorFuc, succesErorrFuc, fucOldLink }: useFetchingUidFBProps) => {
  const [data, setData] = useState<dataFindUidList[]>([{}])
  const OldLink = useRef("")
  const isNoChangeLink = link && OldLink.current === link
  typeof fucOldLink === "function" &&
    isNoChangeLink &&
    (() => {
      const findUidData: dataFindUidList | undefined = data.find((item) => {
        if (item?.link === link) {
          return item
        }
      })
      fucOldLink(findUidData?.result)
    })()

  useEffect(() => {
    if (link) {
      OldLink.current = link
      const findUidData: dataFindUidList | undefined = data.find((item) => {
        if (item?.link === link) {
          return item
        }
      })

      if (!findUidData) {
        const findUid = async () => {
          let url = baseUrl ?? "https://fbuid.mktsoftware.net/api/v1/fbprofile"
          url += `?url=${link}`

          try {
            const reponsive = await fetch(url)
            if (reponsive.ok) {
              const result = await reponsive.json()

              if (result?.uid) {
                setData((prev) => [...prev, { link, result: result?.uid }])
                typeof callBack === "function" && callBack(result?.uid)
              }
            } else {
              typeof succesErorrFuc === "function" && succesErorrFuc()
            }
          } catch {
            typeof errorFuc === "function" && errorFuc()
          }
        }

        findUid()
      } else {
        if (findUidData?.result) {
          typeof callBack === "function" && callBack(findUidData.result)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link])

  return data
}

export default useFetchingUidFB
