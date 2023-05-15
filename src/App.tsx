import { useState } from "react"
import { HiCheckCircle } from "react-icons/hi"

import HeadingTitle from "~/layout/HeadingTitle"
import { DownloadFile, SubmitCheckError } from "./common/function"
import config from "./config"
import LayoutToastSubmit from "./layout/LayoutToastSubmit"
import Accordion from "./components/Accordion"
import { QuestionTiktok } from "./data"

function App() {
  const [link, setLink] = useState("")

  return (
    <LayoutToastSubmit
      link={link}
      baseUrl={config.linkApi.tiktok.url}
      RapidAPIHost={config.linkApi.tiktok.host}
      objectQuery={{
        url: link
        // hd: 0
      }}
    >
      {({ isPending, setIsPending, data, ValidToast }) => {
        return (
          <>
            <HeadingTitle
              isLoading={isPending}
              head="Tải video Tiktok không logo"
              desc="(Không dính logo, không giảm chất lượng, không crop size)"
              submitButton={(value) => {
                SubmitCheckError({
                  link: value,
                  callBackSucc: () => {
                    setLink(value as string)
                    setIsPending(true)
                  },
                  callBackError: ValidToast
                })
              }}
            >
              {data && Array.isArray(data) && data.length > 0 && (
                <div className="mb-9 border mx-auto rounded-lg">
                  {data &&
                    data?.map((item, index) => {
                      return (
                        <div className="flex items-center bg-white rounded-lg p-2 pr-4 space-x-4 shadow-lg" key={index}>
                          <div className="w-[100px] h-[100px] overflow-hidden flex-shrink-0 max-sm:w-[60px] max-sm:h-[60px]">
                            <img className="w-full h-full rounded-lg" src={item?.video?.cover?.url} alt="" />
                          </div>
                          <div className="w-[calc(100%_-_100px_*_2_+_10px)] max-sm:w-[calc(100%_-_60px_-_100px_-_16px)] overflow-hidden text-ellipsis">
                            <h4 className="text-xl font-medium mb-3 ellipsis-3 max-sm:text-base">{item?.desc}</h4>
                            <span className="text-sm ellipsis-1">{item?.author?.nickname}</span>
                          </div>

                          <div className="flex-shrink-0">
                            <button
                              onClick={() => {
                                const url = item?.video?.play_addr?.url
                                if (url) {
                                  DownloadFile({
                                    url: url,
                                    fileName: item?.aweme_id
                                  })
                                }
                              }}
                              className="btn bg-green-500 py-2 px-6 cursor-pointer rounded-md text-sm font-medium text-white"
                            >
                              Tải về
                            </button>
                          </div>
                        </div>
                      )
                    })}
                </div>
              )}
            </HeadingTitle>

            <div className="shadow-2xl border bg-white p-5 max-md:w-[calc(100%_-_10px_*_2)] max-lg:w-[80%] lg:w-[60%] max-md:mx-[10px] mx-auto mb-36">
              <h2 className="text-2xl font-semibold text-[#093DAA]">
                Cách tải video Tiktok không Logo trên điện thoại (no watermark)
              </h2>
              <div className="mt-6 px-5 space-y-4">
                <p className="text-base">
                  <span className="font-medium">Bước 1</span>: Mở app Tiktok {">"} chọn video Tiktok bạn cần tải xuống
                  định dạng không có logo. Nhấn nút sao chép link (sao chép liên kết)
                </p>

                <p className="text-base">
                  <span className="font-medium">Bước 2</span>: Mở trình duyệt bất kỳ trên điện thoại. Truy cập vào trang
                  tải tiktok và dán link video Tiktok vừa sao chép. Nhấn nút quét video
                </p>

                <p className="text-base">
                  <span className="font-medium">Bước 3</span>: Chọn video cần tải và bấm nút tải video. Kết quả video
                  hiện ra, bấm lưu về điện thoại của bạn.
                </p>
              </div>

              <div
                className="w-full mt-10 rounded-xl grid grid-cols-3"
                style={{
                  backgroundColor: "transparent",
                  backgroundImage: "linear-gradient(180deg, #1449AD 0%, #0D539F 100%)"
                }}
              >
                <div className="p-[8px]">
                  <h4 className="text-center font-medium text-white break-words">Bước 1: Sao chép liên kết video</h4>
                  <div className="mt-2">
                    <img
                      src="https://atpsoftware.vn/wp-content/uploads/2022/10/step-1-simple-tikdown-614x1024.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="p-[8px]">
                  <h4 className="text-center font-medium text-white break-words">Bước 2: Dán link và quét video</h4>
                  <div className="mt-2">
                    <img
                      src="https://atpsoftware.vn/wp-content/uploads/2022/10/step-1-simple-tikdown-614x1024.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="p-[8px]">
                  <h4 className="text-center font-medium text-white break-words">Bước 3: Lưu về điện thoại</h4>
                  <div className="mt-2">
                    <img
                      src="https://atpsoftware.vn/wp-content/uploads/2022/10/step-1-simple-tikdown-614x1024.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#093DAA] mt-9">
                Hướng dẫn tải video Tiktok không logo trên máy tính
              </h2>

              <div className="mt-6 space-y-4">
                <p className="text-base">
                  <span className="font-medium">Bước 1</span>: Mở app Tiktok {">"} chọn video Tiktok bạn cần tải xuống
                  định dạng không có logo. Nhấn nút sao chép link (sao chép liên kết)
                </p>

                <p className="text-base">
                  <span className="font-medium">Bước 2</span>: Mở trình duyệt bất kỳ trên điện thoại. Truy cập vào trang
                  tải tiktok và dán link video Tiktok vừa sao chép. Nhấn nút quét video
                </p>

                <p className="text-base">
                  <span className="font-medium">Bước 3</span>: Chọn video cần tải và bấm nút tải video. Kết quả video
                  hiện ra, bấm lưu về điện thoại của bạn.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#093DAA] mt-9">
                Cách tạo liên kết tải Tiktok không logo trên Iphone
              </h2>
              <span className="block mt-2">
                Với thao tác nhanh tạo liên kết trên màn hình (shortcuts), bạn không cần phải nhớ url trong lần sử dụng
                tiếp theo nữa.
              </span>

              <div
                className="w-full mt-10 rounded-xl grid grid-cols-3"
                style={{
                  backgroundColor: "transparent",
                  backgroundImage: "linear-gradient(180deg, #1449AD 0%, #0D539F 100%)"
                }}
              >
                <div className="p-[8px]">
                  <h4 className="text-center font-medium text-white break-words">Bước 1: Sao chép liên kết video</h4>
                  <div className="mt-2">
                    <img
                      src="https://atpsoftware.vn/wp-content/uploads/2022/10/step-1-simple-tikdown-614x1024.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="p-[8px]">
                  <h4 className="text-center font-medium text-white break-words">Bước 1: Sao chép liên kết video</h4>
                  <div className="mt-2">
                    <img
                      src="https://atpsoftware.vn/wp-content/uploads/2022/10/step-1-simple-tikdown-614x1024.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="p-[8px]">
                  <h4 className="text-center font-medium text-white break-words">Bước 1: Sao chép liên kết video</h4>
                  <div className="mt-2">
                    <img
                      src="https://atpsoftware.vn/wp-content/uploads/2022/10/step-1-simple-tikdown-614x1024.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#093DAA] mt-9">
                Vì sao nên sử dụng công cụ này để tải video Tiktok
              </h2>

              <div className="mt-6 [&>*]:pl-4 space-y-4">
                <div className="relative">
                  <p className="text-base">
                    <span className="font-medium">Tải video TikTok không logo</span>: Mọi video khi tải xuống đều không
                    dính logo hình mờ, không có User ID ở trên và dưới video, tốc độ tải xuống nhanh, không mất nhiều
                    thời gian chờ đợi. Đây là một trong những tính năng hoàn hảo, giúp người dùng dễ dàng hơn trong
                    chỉnh sửa hậu kỳ và đăng tải video.
                  </p>
                  <div
                    className="text-[#008B05] absolute top-[13px] left-0"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <HiCheckCircle />
                  </div>
                </div>

                <div className="relative">
                  <p className="text-base">
                    <span className="font-medium">Tải miễn phí không giới hạn</span>: không tính bất kỳ chi phí nào cho
                    mọi hoạt động sử dụng của người dùng, không khống chế số lượng video tải về, không quảng cáo làm
                    phiền.
                  </p>
                  <div
                    className="text-[#008B05] absolute top-[13px] left-0"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <HiCheckCircle />
                  </div>
                </div>

                <div className="relative">
                  <p className="text-base">
                    <span className="font-medium">Không cần tên người dùng</span>: Không cần đăng nhập không cần tài
                    khoản, không cần để lại bất kỳ thông tin gì, tất cả những gì bạn cần làm là sao chép liên kết video
                    muốn tải về, mở website của chúng tôi lên, dán liên kết vào và tải về là xong, vô cùng đơn giản.
                  </p>
                  <div
                    className="text-[#008B05] absolute top-[13px] left-0"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <HiCheckCircle />
                  </div>
                </div>

                <div className="relative">
                  <p className="text-base">
                    <span className="font-medium">Tải video định dạng FULL HD</span>: công cụ này cho phép người dùng
                    tải file định dạng MP4 chất lượng cao full HD nhằm đảm bảo đa dạng các hoạt động tùy theo sở thích
                    và nhu cầu.
                  </p>
                  <div
                    className="text-[#008B05] absolute top-[13px] left-0"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <HiCheckCircle />
                  </div>
                </div>

                <div className="relative">
                  <p className="text-base">
                    <span className="font-medium">Tải video TikTok Trung Quốc</span>: Không những Download Video TikTok
                    Việt Nam, công cụ còn hỗ trợ tải Video Douyin (TikTok Trung Quốc). Bấm vào tab Tải video Douyin
                    không logo để sử dụng.
                  </p>
                  <div
                    className="text-[#008B05] absolute top-[13px] left-0"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <HiCheckCircle />
                  </div>
                </div>
              </div>

              <hr className="my-10 border-1 border-gray-600" />

              <h2 className="text-2xl font-semibold text-[#093DAA] mt-9">
                Câu hỏi thường gặp khi lưu video Tiktok không có logo
              </h2>

              <div className="mt-5 space-y-1">
                {QuestionTiktok.map((item, index) => {
                  return <Accordion key={index} title={item?.title} desc={item?.desc} />
                })}
              </div>
            </div>
          </>
        )
      }}
    </LayoutToastSubmit>
  )
}

export default App
