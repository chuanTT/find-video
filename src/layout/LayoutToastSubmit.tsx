import { FC, useState, useRef, Dispatch, SetStateAction } from "react"

import { MsgType } from "~/common/function"
import ToastCustom, { TypeToast } from "~/components/ToastCustom"
import useFetchingApi, { useGetVideoFetchingProps } from "~/hooks/useFetchingApi"
import { dynamicData } from "~/types"

export interface childrenToast {
  isPending?: boolean
  setIsPending: Dispatch<SetStateAction<boolean>>
  ValidToast: () => void
  data: dynamicData[]
}

interface LayoutToastSubmitProps extends useGetVideoFetchingProps {
  children: (obj: childrenToast) => JSX.Element
}

const LayoutToastSubmit: FC<LayoutToastSubmitProps> = ({ children, ...Props }) => {
  const [data, setData] = useState<dynamicData[]>([])
  const [isPending, setIsPending] = useState(false)
  const [isOpenToast, setIsOpenToast] = useState(false)
  const msgToast = useRef<{ title: string; type: TypeToast }>({
    title: "",
    type: TypeToast.ERROR
  })

  const ChangeToast = (msg: string, error?: boolean) => {
    msgToast.current = MsgType(msg, error ?? true)
    setIsOpenToast(true)
    setIsPending(false)
  }

  const ValidToast = () => {
    if (!isOpenToast) {
      msgToast.current = MsgType("Đường dẫn không hợp lệ")
      setIsOpenToast(true)
    }
  }

  useFetchingApi({
    ...Props,
    fucOldLink: () => {
      if (isPending) {
        setIsPending(false)
      }
    },
    callBack: (data) => {
      if (data) {
        setData([{ ...data }])
        ChangeToast("Lấy dữ liệu thành công", false)
      }
    },
    errorFuc: () => {
      ChangeToast("Lỗi không xác định")
    },
    succesErorrFuc: () => {
      ChangeToast("Lấy dữ liệu không thành công")
    }
  })

  return (
    <ToastCustom
      CloseEvent={() => {
        setIsOpenToast(false)
      }}
      isOpenToast={isOpenToast}
      title={msgToast.current.title}
      type={msgToast.current.type}
    >
      {children({ isPending, setIsPending, data, ValidToast })}
    </ToastCustom>
  )
}

export default LayoutToastSubmit
