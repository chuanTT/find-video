import { useState, useRef } from "react"
import StaticImages from "~/assets/images"
import { MsgType, SubmitCheckError, allowArrUidFb } from "~/common/function"
import Accordion from "~/components/Accordion"
import ToastCustom, { TypeToast } from "~/components/ToastCustom"
import { QuestionFindUid } from "~/data"
import useFetchingUidFB from "~/hooks/useFetchingUidFB"
import HeadingTitle from "~/layout/HeadingTitle"

const FindUidFacebook = () => {
  const [data, setData] = useState("")
  const [update, setUpdate] = useState(false)
  const [link, setLink] = useState("")
  const [isPending, setIsPending] = useState(false)
  const [isOpenToast, setIsOpenToast] = useState(false)
  const msgToast = useRef<{ title: string; type: TypeToast }>({
    title: "",
    type: TypeToast.ERROR
  })

  const ValidToast = () => {
    if (!isOpenToast) {
      msgToast.current = MsgType("Đường dẫn không hợp lệ")
      setIsOpenToast(true)
    }
  }

  const ChangeToast = (msg: string, error?: boolean) => {
    msgToast.current = MsgType(msg, error ?? true)
    setIsOpenToast(true)
    setIsPending(false)
  }

  useFetchingUidFB({
    link,
    fucOldLink: (uid) => {
      if (isPending) {
        if (uid) {
          setData(uid)
          setUpdate((prev) => !prev)
        }
        setIsPending(false)
      }
    },
    callBack: (uid) => {
      if (uid) {
        setData(uid)
        setUpdate((prev) => !prev)
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
      <HeadingTitle
        isUpdate={update}
        value={data}
        isLoading={isPending}
        head="Tìm UID Facebook từ link Facebook"
        desc="Nhanh - Miễn Phí - Chính xác"
        instruct="Hướng dẫn đường dẫn facebook lấy UID"
        placeholder="Nhập Link facebook cần lấy UID..."
        textButton="Lấy UID"
        submitButton={(value) => {
          SubmitCheckError({
            link: value,
            callBackSucc: () => {
              setLink(value as string)
              setIsPending(true)
            },
            callBackError: ValidToast,
            allowArr: allowArrUidFb
          })
        }}
      />

      <div className="max-md:w-[calc(100%_-_10px_*_2)] max-lg:w-[80%] lg:w-[60%] max-md:mx-[10px] mx-auto mb-36 mt-11 space-y-9">
        <div className="shadow-2xl bg-white p-5 border space-y-3">
          <span className="block font-medium text-lg">UID/ ID là gì?</span>
          <p className="!mb-10">
            <span className="font-semibold">UID hay ID là viết tắt của cụm từ User ID</span>, đây là 1 chuỗi các con số
            được Facebook sắp xếp theo thời gian tạo tài khoản.
            <br /> – Các tài khoản Facebook tạo lâu năm sẽ có UID ít con số (ví dụ: ID của ông chủ Facebook – Mark
            Zuckerberg là 4)
            <br /> – Các tài khoản Facebook tạo mới sẽ có định dạng 100000xxxxx <br /> Mỗi tài khoản Facebook sẽ được
            gắn cố định vào 1 UID và không thể thay đổi.
          </p>

          <span className="block font-medium text-lg">Cách sử dụng UID Facebook hiệu quả</span>
          <p className="!mb-10">
            UID Fb sẽ có nhiều cách khai thác, điều này tuỳ thuộc vào mục tiêu chuyển đổi mà bạn muốn. Và từ đó có thể
            chọn các phương thức tiếp cận khách hàng Facebook từ UID.
          </p>
        </div>

        <div className="shadow-2xl bg-white p-5 border space-y-3">
          <h2 className="font-semibold text-center text-2xl">Lấy link trên máy tính</h2>

          <div className="flex space-x-3 items-center max-[540px]:flex-col">
            <div>
              <img src={StaticImages.uploadLinkPc} alt="link pc" />
            </div>
            <div className="flex justify-center items-center">
              <p style={{ lineHeight: "30px" }}>
                Bước 1: “CLICK” chuột phải vào tên người dùng Facebook cần lấy UID chọn “Copy link adress” hoặc “Sao
                chép liên kết”
                <br />
                Bước 2: Sau đó “Dán” vào ô Link FB Profile ở trên <br />
                Bước 3: Bấm “Lấy UID” và đợi kết quả
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-2xl bg-white p-5 border space-y-3">
          <h2 className="font-semibold text-center text-2xl mb-4">Lấy link trên điện thoại</h2>

          <div className="flex flex-row-reverse items-center gap-3 max-[540px]:flex-col">
            <div className="flex w-1/2 [&>*]:w-1/2">
              <img src={StaticImages.b1_getLink} alt="lấy link facebook" />
              <img src={StaticImages.b2_getLink} alt="lấy link facebook" />
            </div>
            <div className="flex justify-center items-center flex-1 max-[540px]:items-start">
              <p style={{ lineHeight: "30px" }}>
                Bước 1: Truy cập vào trang cá nhân cần lấy UID
                <br />
                Bước 2: Nhấn vào tuỳ chọn (Dấu …) <br />
                Bước 3: Nhấn nút “Sao chép liên kết”
                <br />
                Bước 4: Sau đó Dán vào ô Link FB Profile ở trên
                <br />
                Bước 5: Bấm “Lấy UID” và đợi kết quả
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-2xl bg-white p-5 border space-y-3">
          <h2 className="font-semibold text-center text-2xl mb-10">Câu hỏi thường gặp khi dùng FIND UID</h2>
          <div className="mt-5 space-y-1">
            {QuestionFindUid.map((item, index) => {
              return <Accordion key={index} title={item?.title} desc={item?.desc} />
            })}
          </div>
        </div>
      </div>
    </ToastCustom>
  )
}

export default FindUidFacebook
