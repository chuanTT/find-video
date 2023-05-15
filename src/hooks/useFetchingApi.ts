import { useEffect, useState, useRef } from "react"
import { dynamicData } from "~/types"

export enum methodFetch {
  POST = "POST",
  GET = "GET"
}

export interface useGetVideoFetchingProps {
  link?: string
  callBack?: (data?: object) => void
  errorFuc?: () => void
  succesErorrFuc?: () => void
  RapidAPIKey?: string
  RapidAPIHost?: string
  method?: methodFetch
  objectQuery?: {
    [key: string]: string | number | boolean
  }
  baseUrl?: string
  fucOldLink?: () => void
}

interface dataFetching {
  key?: string
  result?: dynamicData[]
}

const useFetchingApi = ({
  link,
  callBack,
  errorFuc,
  succesErorrFuc,
  method,
  RapidAPIKey,
  RapidAPIHost,
  objectQuery,
  baseUrl,
  fucOldLink
}: useGetVideoFetchingProps) => {
  const [data, setData] = useState<dataFetching[]>([{}])
  const OldLink = useRef("")
  const isNoChangeLink = link && OldLink.current === link

  typeof fucOldLink === "function" && isNoChangeLink && fucOldLink()

  useEffect(() => {
    if (link && baseUrl) {
      OldLink.current = link
      const findData = data?.find((d) => {
        if (d?.key === link) {
          return d
        }
      })

      if (!findData) {
        const getData = async () => {
          let url = baseUrl

          if (objectQuery) {
            const arrKey = Object.keys(objectQuery)

            if (Array.isArray(arrKey)) {
              arrKey.forEach((key, index) => {
                if (index === 0) url += "?"

                if (objectQuery) {
                  // eslint-disable-next-line no-prototype-builtins
                  if (key && objectQuery?.hasOwnProperty?.(key)) {
                    if (index > 0) url += "&"
                    url += `${key}=${objectQuery[key]}`
                  }
                }
              })
            }
          }

          let options: RequestInit | undefined = {
            method: method ?? methodFetch.GET,
            headers: {
              "X-RapidAPI-Key":
                RapidAPIKey ??
                ("b2661669a2mshf805f86ac1ce8d3p1a6e1cjsn3807087386b7" ||
                  "07d60ffd88msh4822dfeae245c23p14f52fjsn0e76dfaaf5c8"),
              "X-RapidAPI-Host": RapidAPIHost ?? "instagram-downloader15.p.rapidapi.com"
            }
          }

          if (method === methodFetch.POST) {
            options = { ...options, body: null }
          }

          try {
            const reponsive = await fetch(url, options)
            if (reponsive.ok) {
              const result = await reponsive.json()
              const newResult = result?.data || result

              if (newResult && !newResult?.errors) {
                const newData = [...data, { result: newResult, key: link }]
                typeof callBack === "function" && callBack(newResult)
                setData(newData)
                return
              }
            }
            typeof succesErorrFuc === "function" && succesErorrFuc()
          } catch {
            typeof errorFuc === "function" && errorFuc()
          }
        }

        getData()
      } else {
        typeof callBack === "function" && callBack(findData?.result)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link])

  return data
}

export default useFetchingApi
