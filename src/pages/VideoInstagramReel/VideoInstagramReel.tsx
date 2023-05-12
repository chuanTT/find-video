import HeadingTitle from "~/layout/HeadingTitle"
import { useState } from "react"
import LayoutToastSubmit from "~/layout/LayoutToastSubmit"
import config from "~/config"
import { mediaConfigInstagram } from "~/types"
import { DownloadFile, SubmitCheckError, allowArrInstagram } from "~/common/function"
import StaticImages from "~/assets/images"
import { NavLink } from "react-router-dom"

function VideoInstagramReel() {
  const [link, setLink] = useState("")

  return (
    <LayoutToastSubmit
      link={link}
      baseUrl={config.linkApi.instagram.url}
      RapidAPIHost={config.linkApi.instagram.host}
      objectQuery={{
        url_username: link
      }}
    >
      {({ isPending, setIsPending, ValidToast, data }) => {
        return (
          <>
            <HeadingTitle
              isLoading={isPending}
              head="Tải video Instagram Reels - Instagram Reels Download"
              desc="Tải video từ Instagram Reels nhanh chóng và dễ dàng với chất lượng HD+"
              note="Video Instagram Reels phải được cài đặt ở chế độ công khai"
              instruct="Hướng dẫn Tải Video Từ Instagram Reels"
              submitButton={(value) => {
                SubmitCheckError({
                  link: value,
                  callBackSucc: () => {
                    setLink(value as string)
                    setIsPending(true)
                  },
                  callBackError: ValidToast,
                  allowArr: allowArrInstagram
                })
              }}
            >
              {data && Array.isArray(data) && data.length > 0 && (
                <div className="mb-9 border mx-auto rounded-lg">
                  {data &&
                    data?.map((item, index) => {
                      const media: mediaConfigInstagram = (item?.media &&
                        Array.isArray(item?.media) &&
                        item?.media[item?.media?.length - 1]) || { url: "", thumbnail: "" }
                      return (
                        <div className="flex items-center bg-white rounded-lg p-2 pr-4 space-x-4 shadow-lg" key={index}>
                          <div className="w-[100px] h-[100px] overflow-hidden flex-shrink-0">
                            <img className="w-full h-full rounded-lg" src={media?.thumbnail} alt="" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-medium mb-3 ellipsis-3">{item?.owner?.full_name}</h4>
                            <span className="text-sm">{item?.owner?.username}</span>
                          </div>

                          <div>
                            <button
                              onClick={() => {
                                if (media?.url) {
                                  DownloadFile({
                                    url: media?.url,
                                    fileName: Date.now().toString()
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

            <div className="max-md:w-[calc(100%_-_10px_*_2)] max-lg:w-[80%] lg:w-[60%] max-md:mx-[10px] mx-auto mb-36 mt-11 space-y-9">
              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <p>
                  <span className="font-medium">Instagram Reels Download</span> là một công cụ tải video Reels từ
                  Instagram trực tuyến, giúp người dùng tải video Reels với chất lượng tốt nhất, bao gồm Full HD, 1080p,
                  2k, 4k, 8k kèm âm thanh.
                </p>
                <p>
                  Công cụ này cho phép lưu video Reels từ Instagram về thiết bị của bạn với định dạng .mp3, .mp4 một
                  cách nhanh chóng và tiện lợi. Không cần cài đặt bất kỳ phần mềm nào
                </p>
                <p>
                  Bạn chỉ cần dán liên kết Instagram Reels vào Ô Nhập liệu và tải video{" "}
                  <span className="font-medium">Instagram Reels</span> một cách dễ dàng.
                </p>
              </div>
              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Hướng dẫn tải video Instagram Reels Trên Máy Tính
                </h2>

                <p style={{ lineHeight: "30px" }}>
                  Tải video từ Instagram Reels về máy tính của bạn là một quy trình nhanh chóng và đơn giản, <br />
                  Dưới đây là các bước thực hiện:
                  <br />
                  1.Truy cập <span className="font-medium">Instagram Reels</span> và mở video mà bạn muốn tải về.
                  <br /> 2.Sao chép đường link của video từ thanh địa chỉ trên trình duyệt của bạn.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.instagram_link} alt="instagram" />
                </div>

                <p className="mt-2">
                  3. Dán đường link vào ô tìm kiếm trên <span className="font-medium">Instagram Reels Download</span>,
                  như ô tìm kiếm ở đầu trang này.
                </p>
                <div className="mt-2">
                  <img src={StaticImages.instagram_reel_download} alt="instagram" />
                </div>

                <p className="mt-3" style={{ lineHeight: "30px" }}>
                  4.Hệ thống sẽ tự động bắt đầu tìm kiếm video. Nó sẽ hiển thị kết quả trong vài giây.
                  <br /> 5.Xác định độ phân giải của video mà bạn muốn lưu, sau đó nhấp chuột phải vào nút Tải xuống và
                  chọn tùy chọn “Lưu”, “Lưu dưới dạng”, hoặc “Lưu liên kết dưới dạng”. Tên sẽ khác nhau tùy thuộc vào
                  trình duyệt mà bạn sử dụng.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.instagram_loading} alt="instagram" />
                </div>

                <p className="mt-2">
                  6. Video sẽ bắt đầu tải xuống vào máy tính của bạn và sẽ được lưu vào thư mục tải xuống mặc định hoặc
                  thư mục tải xuống được chọn.
                </p>
              </div>

              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Hướng dẫn Tải video Instagram Reel Trên iOS/Android/Smartphone
                </h2>

                <p>
                  Để tải video <span className="font-medium">Instagram Reels</span> trên điện thoại di động của bạn, chỉ
                  cần dán liên kết của video Reels vào
                  <span className="font-medium"> Instagram Reel Download</span> và sau đó lưu video.
                </p>

                <p style={{ lineHeight: "30px" }}>
                  Đây là hướng dẫn từng bước:
                  <br /> Trên ứng dụng Instagram, mở video mà bạn muốn lưu.
                  <br /> Chạm vào nút Chia sẻ bên dưới video, sau đó chọn Sao chép liên kết.
                </p>

                <div className="mt-2 w-[40%]">
                  <img src={StaticImages.instagram_reel} alt="instagram" />
                </div>

                <p className="mt-3" style={{ lineHeight: "30px" }}>
                  3. Nhấn vào trình duyệt và truy cập website
                  <NavLink to={`/${config.path.youtube_shorts_download}`} className="font-semibold text-orange-500">
                    {" "}
                    Tải video Instagram Reels
                  </NavLink>{" "}
                  <br />
                  4.Dán đường link vào ô tìm kiếm ở đầu trang.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.instagram_reel_download} alt="instagram" />
                </div>

                <p style={{ lineHeight: "40px" }}>
                  Trang web sẽ bắt đầu tìm kiếm video. Trong vài giây, nó sẽ hiển thị các độ phân giải và định dạng đầu
                  ra của video.
                  <br /> Xác định độ phân giải của video mà bạn muốn lưu, sau đó chạm và giữ nút Tải xuống bên cạnh nó
                  và chọn tùy chọn lưu. <br /> Trên iPhone, tùy chọn này thường được gọi là “Tải xuống tập tin liên
                  kết”.
                  <br /> Trên Android, tên tùy chọn khác nhau nhưng thông thường được gọi là “Tải xuống tệp”, “Tải
                  xuống” hoặc “Lưu”.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.instagram_loading} alt="instagram" />
                </div>

                <p className="mt-2">
                  6. Video sẽ bắt đầu tải xuống vào máy tính của bạn và sẽ được lưu vào thư mục tải xuống mặc định hoặc
                  thư mục tải xuống được chọn.
                </p>
              </div>

              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Các câu hỏi thường gặp Về Tải Video Instagram Reels
                </h2>

                <span className="block font-medium text-lg">Instagram Reels là gì?</span>
                <p className="!mb-10">
                  <span className="font-medium"> Instagram Reels</span> là tính năng mới của Instagram, Tính năng
                  Instagram Reels cho phép người dùng quay video với thời gian ngắn tối đa là 30 giây trên điện thoại
                </p>

                <span className="block font-medium text-lg">
                  Tôi có phải trả phí khi Tải Video Instagram Reels không?
                </span>
                <p className="!mb-10">
                  Tuyệt đối không, bạn có thể tải video Reels yêu thích từ Phần mềm MKT hoàn toàn miễn phí, không giới
                  hạn bất kỳ tính năng nào.
                </p>

                <span className="block font-medium text-lg">
                  Làm cách nào để tải video Reel từ Instagram từ máy tính?
                </span>
                <p className="!mb-10">
                  Bước 1: Sao chép và dán liên kết Reel vào hộp nhập liệu và nhấn nút{" "}
                  <span className="font-medium">Quét video</span>.
                  <br /> Bước 2: Chờ vài giây để hệ thống tìm kiếm và load video và nhấn nút{" "}
                  <span className="font-medium">Tải xuống</span> và chờ vài giây để tải tệp về thiết bị của bạn. <br />
                  <span className="italic">
                    (Video Instagram Reels hoạt động tốt trên Chrome, Firefox hoặc bất kỳ trình duyệt nào.)
                  </span>
                </p>

                <span className="block font-medium text-lg">
                  Làm thế nào để tải video Instagram Reels trên điện thoại?
                </span>
                <p className="!mb-10">
                  Sao chép liên kết video Reel → Truy cập trang web{" "}
                  <span className="font-medium">Tải Reel Instagram </span> → Dán liên kết Reel vừa sao chép vào hộp nhập
                  liệu → Tải xuống.
                </p>

                <span className="block font-medium text-lg">Video Reels được lưu ở đâu khi tải về?</span>
                <p className="!mb-10">
                  Vui lòng kiểm tra thư mục “Tải xuống” trong điện thoại hoặc mục “lịch sử tải về” trên trình duyệt của
                  bạn.
                </p>
              </div>
            </div>
          </>
        )
      }}
    </LayoutToastSubmit>
  )
}

export default VideoInstagramReel
