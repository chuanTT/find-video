import { useState } from "react"
import HeadingTitle from "~/layout/HeadingTitle"
import { DownloadFile, SubmitCheckError, allowArrFacebook } from "~/common/function"
import LayoutToastSubmit from "~/layout/LayoutToastSubmit"
import config from "~/config"
import StaticImages from "~/assets/images"
import { NavLink } from "react-router-dom"

function VideoFacebookReel() {
  const [link, setLink] = useState("")

  return (
    <LayoutToastSubmit
      link={link}
      baseUrl={config.linkApi.facebook.url}
      RapidAPIHost={config.linkApi.facebook.host}
      objectQuery={{
        url: link
      }}
    >
      {({ isPending, setIsPending, ValidToast, data }) => {
        return (
          <>
            <HeadingTitle
              isLoading={isPending}
              head="Tải video Facebook Reels - Facebook Reels Download"
              desc="Tải video từ Facebook Reels nhanh chóng và dễ dàng với chất lượng HD+"
              note="Video Facebook Reels phải được cài đặt ở chế độ công khai"
              instruct="Hướng dẫn Tải Video Từ Facebook Reels"
              submitButton={(value) => {
                SubmitCheckError({
                  link: value,
                  callBackSucc: () => {
                    setLink(value as string)
                    setIsPending(true)
                  },
                  callBackError: ValidToast,
                  allowArr: allowArrFacebook
                })
              }}
            >
              {data && Array.isArray(data) && data.length > 0 && (
                <div className="mb-9 border mx-auto rounded-lg">
                  {data &&
                    data?.map((item, index) => {
                      return (
                        <div
                          className="flex items-center bg-white rounded-lg p-2 pr-4 space-x-4 shadow-lg w-full"
                          key={index}
                        >
                          <div className="w-[100px] h-[100px] overflow-hidden flex-shrink-0 max-sm:w-[60px] max-sm:h-[60px]">
                            <img className="w-full h-full rounded-lg object-cover" src={item?.thumbnail} alt="" />
                          </div>
                          <div className="w-[calc(100%_-_100px_*_2_+_10px)] max-sm:w-[calc(100%_-_60px_-_100px_-_16px)] overflow-hidden text-ellipsis">
                            <h4 className="text-xl font-medium mb-3 ellipsis-3 max-sm:text-base">{item?.title}</h4>
                          </div>

                          <div className="flex-shrink-0">
                            <button
                              onClick={() => {
                                if (item?.links?.["Download High Quality"]) {
                                  DownloadFile({
                                    url: item?.links?.["Download High Quality"],
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
                  <span className="font-medium">Facebook Reels Download</span> là một công cụ tải video Reels từ
                  Facebook trực tuyến, giúp người dùng tải video Reels với chất lượng tốt nhất, bao gồm Full HD, 1080p,
                  2k, 4k, 8k kèm âm thanh.
                </p>
                <p>
                  Công cụ này cho phép lưu video Reels từ Facebook về thiết bị của bạn với định dạng .mp3, .mp4 một cách
                  nhanh chóng và tiện lợi. Không cần cài đặt bất kỳ phần mềm nào
                </p>
                <p>
                  Bạn chỉ cần dán liên kết Fb Reels vào Ô Nhập liệu và tải video{" "}
                  <span className="font-medium">Facebook Reels</span> một cách dễ dàng.
                </p>
              </div>

              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Hướng dẫn tải video Facebook Reels Trên Máy Tính
                </h2>

                <p style={{ lineHeight: "30px" }}>
                  Tải video từ <span className="font-medium">Facebook Reels</span> về máy tính của bạn là một quy trình
                  nhanh chóng và đơn giản, <br />
                  Dưới đây là các bước thực hiện:
                  <br />
                  1.Truy cập <span className="font-medium">Facebook Reels</span> và mở video mà bạn muốn tải về.
                  <br /> 2.Sao chép đường link của video từ thanh địa chỉ trên trình duyệt của bạn.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.Frame3} alt="facebook" />
                </div>

                <p className="mt-2">
                  3. Dán đường link vào ô tìm kiếm trên <span className="font-medium">Facebook Reels Download</span>,
                  như ô tìm kiếm ở đầu trang này.
                </p>
                <div className="mt-2">
                  <img src={StaticImages.facebook_reel_download} alt="facebook" />
                </div>

                <p className="mt-3" style={{ lineHeight: "30px" }}>
                  4.Hệ thống sẽ tự động bắt đầu tìm kiếm video. Nó sẽ hiển thị kết quả trong vài giây.
                  <br /> 5.Xác định độ phân giải của video mà bạn muốn lưu, sau đó nhấp chuột phải vào nút Tải xuống và
                  chọn tùy chọn “Lưu”, “Lưu dưới dạng”, hoặc “Lưu liên kết dưới dạng”. Tên sẽ khác nhau tùy thuộc vào
                  trình duyệt mà bạn sử dụng.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.frame2} alt="facebook" />
                </div>

                <p className="mt-2">
                  6. Video sẽ bắt đầu tải xuống vào máy tính của bạn và sẽ được lưu vào thư mục tải xuống mặc định hoặc
                  thư mục tải xuống được chọn.
                </p>
              </div>

              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Hướng dẫn Tải video Facebook Reels Trên iOS/Android/Smartphone
                </h2>

                <p>
                  Để tải video Facebook Reels trên điện thoại di động của bạn, chỉ cần dán liên kết của video Reels vào
                  <span className="font-medium"> Facebook Reels Download</span> và sau đó lưu video.
                </p>

                <p style={{ lineHeight: "30px" }}>
                  Đây là hướng dẫn từng bước:
                  <br /> Trên ứng dụng Facebook, mở video mà bạn muốn lưu.
                  <br /> Chạm vào nút Chia sẻ bên dưới video, sau đó chọn Sao chép liên kết.
                </p>

                <div className="mt-2 w-[40%]">
                  <img src={StaticImages.facebook_reel} alt="facebook" />
                </div>

                <p className="mt-3" style={{ lineHeight: "30px" }}>
                  3. Nhấn vào trình duyệt và truy cập website
                  <NavLink to={`/${config.path.facebook_reels_download}`} className="font-semibold text-orange-500">
                    {" "}
                    Tải video Facebook Reels
                  </NavLink>{" "}
                  <br />
                  4.Dán đường link vào ô tìm kiếm ở đầu trang.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.facebook_reel_download} alt="facebook" />
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
                  <img src={StaticImages.frame2} alt="facebook" />
                </div>

                <p className="mt-2">
                  6. Video sẽ bắt đầu tải xuống vào máy tính của bạn và sẽ được lưu vào thư mục tải xuống mặc định hoặc
                  thư mục tải xuống được chọn.
                </p>
              </div>

              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Các câu hỏi thường gặp Về Tải Video Facebook Reels
                </h2>

                <span className="block font-medium text-lg">Facebook Reels là gì?</span>
                <p className="!mb-10">
                  Facebook Reels là tính năng mới của Facebook, cho phép người dụng tạo và tải lên các video ngắn với
                  rất nhiều hiệu ứng đa dạng. Bạn có thể sử dụng{" "}
                  <span className="font-medium">Facebook Reels Download</span> để tải xuống bất kỳ video Reels từ
                  Facebook về thiết bị.
                </p>

                <span className="block font-medium text-lg">Tôi có phải trả phí khi tải video Fb Reels không?</span>
                <p className="!mb-10">
                  Tuyệt đối không, bạn có thể tải video Reels yêu thích từ Facebook miễn phí, không giới hạn bất kỳ tính
                  năng nào.
                </p>

                <span className="block font-medium text-lg">
                  Làm cách nào để tải video Reel từ Facebook từ máy tính?
                </span>
                <p className="!mb-10">
                  Bước 1: Sao chép và dán liên kết Reel vào hộp nhập liệu và nhấn nút{" "}
                  <span className="font-medium">Quét video</span>.
                  <br /> Bước 2: Chờ vài giây để hệ thống tìm kiếm và load video, nhấn nút{" "}
                  <span className="font-medium">Tải xuống</span> và chờ vài giây để tải tệp về thiết bị của bạn. <br />
                  <span className="italic">
                    (Facebook Reels Download hoạt động tốt trên Chrome, Firefox hoặc bất kỳ trình duyệt nào.)
                  </span>
                </p>

                <span className="block font-medium text-lg">
                  Làm thế nào để tải video Facebook Reels trên điện thoại?
                </span>
                <p className="!mb-10">
                  Sao chép liên kết video Reel → Truy cập trang web{" "}
                  <span className="font-medium">Facebook Reels Download</span> → Dán liên kết Reel vừa sao chép vào hộp
                  nhập liệu → Tải xuống.
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

export default VideoFacebookReel
