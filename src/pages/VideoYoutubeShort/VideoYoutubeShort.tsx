import HeadingTitle from "~/layout/HeadingTitle"
import { useState, Fragment } from "react"
import { DownloadFile, SubmitCheckError, allowArrYoutube, subtringDomain } from "~/common/function"
import LayoutToastSubmit from "~/layout/LayoutToastSubmit"
import config from "~/config"
import { NavLink } from "react-router-dom"
import StaticImages from "~/assets/images"

function VideoYoutubeShort() {
  const [link, setLink] = useState("")
  const [active, setActive] = useState(true)

  return (
    <LayoutToastSubmit
      link={link}
      baseUrl={config.linkApi.youtube.url}
      RapidAPIHost={config.linkApi.youtube.host}
      objectQuery={{
        url: link
        // videoId: link,
        // subtitles: false,
        // related: false
      }}
    >
      {({ isPending, setIsPending, ValidToast, data }) => {
        return (
          <>
            <HeadingTitle
              isLoading={isPending}
              head="Tải video Youtube Shorts - Youtube Shorts Download"
              desc="Tải video từ Youtube Shorts nhanh chóng và dễ dàng với chất lượng HD+"
              instruct="Hướng dẫn Tải Video Từ Youtube Shorts"
              submitButton={(value) => {
                const str = value?.toString()
                SubmitCheckError({
                  link: str,
                  callBackSucc: () => {
                    // const valueStr = subtringDomain(config.linkApi.youtube.domain, str)
                    // if (valueStr) {
                    //   setLink(valueStr)
                    //   setIsPending(true)
                    // }
                    setLink(str)
                    setIsPending(true)
                  },
                  callBackError: ValidToast,
                  allowArr: allowArrYoutube
                })
              }}
            >
              {data && Array.isArray(data) && data.length > 0 && (
                <div className="mb-9 mx-auto rounded-lg">
                  {data &&
                    data?.map((item, index) => {
                      const srcThumb =
                        (item?.thumbnails &&
                          Array.isArray(item?.thumbnails) &&
                          item?.thumbnails[item?.thumbnails?.length - 1]?.url) ||
                        item?.thumbnail
                      const videos = active ? item?.videos?.items : item?.audios?.items

                      return (
                        <Fragment key={index}>
                          <div className="flex items-center bg-white border rounded-lg p-2 pr-4 space-x-4 shadow-lg">
                            <div className="w-[100px] h-[100px] overflow-hidden flex-shrink-0 max-sm:w-[60px] max-sm:h-[60px]">
                              <img
                                className="w-full h-full rounded-lg"
                                src={srcThumb || StaticImages.logo}
                                alt={item?.channel?.name}
                              />
                            </div>
                            <div className="w-[calc(100%_-_100px)] max-sm:w-[calc(100%_-_60px)] overflow-hidden text-ellipsis">
                              <h4 className="text-xl font-medium mb-3 ellipsis-3 max-sm:text-base">{item?.title}</h4>
                              <span className="text-sm ellipsis-1">{item?.channel?.name}</span>
                            </div>
                          </div>

                          <div className="mt-12">
                            <div className="grid grid-cols-2 [&>*]:text-center [&>*]:cursor-pointer [&>*]:border [&>*]:px-2 [&>*]:py-4 [&>*]:font-medium">
                              <span
                                className={`!border-r-0  ${active ? "bg-green-600 text-white" : ""}`}
                                onClick={() => {
                                  setActive(true)
                                }}
                                aria-hidden="true"
                              >
                                Video
                              </span>
                              <span
                                className={`${!active ? "bg-green-600 text-white" : ""}`}
                                onClick={() => {
                                  setActive(false)
                                }}
                                aria-hidden="true"
                              >
                                Audio
                              </span>
                            </div>

                            <div>
                              {videos &&
                                videos?.map((itemChild, index) => {
                                  const maxLength = (videos && videos.length) || 1
                                  return (
                                    <div
                                      key={index}
                                      className={`flex [&>*]:flex-1 ${
                                        index === 0 ? "[&>*]:border-t-0" : ""
                                      } [&>*]:text-center [&>*]:border ${
                                        !(maxLength - 1 === index) ? "[&>*]:border-b-0" : ""
                                      }`}
                                    >
                                      <span className="flex justify-center items-center py-2 !border-r-0">{`${
                                        itemChild?.quality || ""
                                      } (${itemChild?.extension})`}</span>
                                      <span className="flex justify-center items-center py-2 !border-r-0">
                                        {itemChild?.sizeText}
                                      </span>
                                      <div className="flex justify-center items-center py-2">
                                        <button
                                          onClick={() => {
                                            if (itemChild?.url) {
                                              // DownloadFile({
                                              //   url: `${config.linkApi.youtube.urlDownload}?vid=${item?.vid}&k=${itemChild?.url}`,
                                              //   fileName: `${Date.now().toString()}-${itemChild?.quality}`,
                                              //   callBack: (data) => {
                                              //     return data?.url ?? ""
                                              //   },
                                              //   extension: itemChild?.extension
                                              // })

                                              DownloadFile({
                                                url: itemChild?.url,
                                                fileName: `${Date.now().toString()}-${itemChild?.quality}`,
                                                extension: itemChild?.extension
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
                          </div>
                        </Fragment>
                      )
                    })}
                </div>
              )}
            </HeadingTitle>

            <div className="max-md:w-[calc(100%_-_10px_*_2)] max-lg:w-[80%] lg:w-[60%] max-md:mx-[10px] mx-auto mb-36 mt-11 space-y-9">
              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <p>
                  <span className="font-medium"> Youtube Shorts Download </span> là một công cụ tải video Youtube Short
                  từ Youtube trực tuyến, giúp người dùng tải video Short với chất lượng tốt nhất, bao gồm Full HD,
                  1080p, 2k, 4k, 8k kèm âm thanh.
                </p>
                <p>
                  Công cụ này cho phép lưu video Short từ Youtube về thiết bị của bạn với định dạng .mp3, .mp4 một cách
                  nhanh chóng và tiện lợi. Không cần cài đặt bất kỳ phần mềm nào
                </p>
                <p>
                  Bạn chỉ cần dán liên kết Short vào Ô Nhập liệu và tải video
                  <span className="font-medium"> Youtube Short</span> một cách dễ dàng.
                </p>
              </div>
              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Hướng dẫn tải video Youtube Shorts Trên Máy Tính
                </h2>

                <p style={{ lineHeight: "30px" }}>
                  Tải video từ YouTube về máy tính của bạn là một quy trình nhanh chóng và đơn giản, <br />
                  Dưới đây là các bước thực hiện:
                  <br />
                  1.Truy cập <span className="font-medium">Youtube Short</span> và mở video mà bạn muốn tải về.
                  <br /> 2.Sao chép đường link của video từ thanh địa chỉ trên trình duyệt của bạn.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.frame_youtube} alt="facebook" />
                </div>

                <p className="mt-2">
                  3. Dán đường link vào ô tìm kiếm trên <span className="font-medium">Youtube Shorts Download</span>,
                  như ô tìm kiếm ở đầu trang này.
                </p>
                <div className="mt-2">
                  <img src={StaticImages.youtube_reel_download} alt="facebook" />
                </div>

                <p className="mt-3" style={{ lineHeight: "30px" }}>
                  4.Hệ thống sẽ tự động bắt đầu tìm kiếm video. Nó sẽ hiển thị kết quả trong vài giây.
                  <br /> 5.Xác định độ phân giải của video mà bạn muốn lưu, sau đó nhấp chuột phải vào nút Tải xuống và
                  chọn tùy chọn “Lưu”, “Lưu dưới dạng”, hoặc “Lưu liên kết dưới dạng”. Tên sẽ khác nhau tùy thuộc vào
                  trình duyệt mà bạn sử dụng.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.frame_download} alt="facebook" />
                </div>

                <p className="mt-2">
                  6. Video sẽ bắt đầu tải xuống vào máy tính của bạn và sẽ được lưu vào thư mục tải xuống mặc định hoặc
                  thư mục tải xuống được chọn.
                </p>
              </div>

              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Hướng dẫn Tải video Youtube Short Trên iOS/Android/Smartphone
                </h2>

                <p>
                  Để tải video <span className="font-medium">Youtube Shorts</span> trên điện thoại di động của bạn, chỉ
                  cần dán liên kết của video Reels vào
                  <span className="font-medium"> Youtube Shorts Download</span> và sau đó lưu video.
                </p>

                <p style={{ lineHeight: "30px" }}>
                  Đây là hướng dẫn từng bước:
                  <br /> Trên ứng dụng Youtube, mở video mà bạn muốn lưu.
                  <br /> Chạm vào nút Chia sẻ bên dưới video, sau đó chọn Sao chép liên kết.
                </p>

                <div className="mt-2 w-[40%]">
                  <img src={StaticImages.youtube_reel} alt="facebook" />
                </div>

                <p className="mt-3" style={{ lineHeight: "30px" }}>
                  3. Nhấn vào trình duyệt và truy cập website
                  <NavLink to={`/${config.path.youtube_shorts_download}`} className="font-semibold text-orange-500">
                    {" "}
                    Tải video Youtube Short
                  </NavLink>{" "}
                  <br />
                  4.Dán đường link vào ô tìm kiếm ở đầu trang.
                </p>

                <div className="mt-2">
                  <img src={StaticImages.youtube_reel_download} alt="facebook" />
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
                  <img src={StaticImages.frame_download} alt="facebook" />
                </div>

                <p className="mt-2">
                  6. Video sẽ bắt đầu tải xuống vào máy tính của bạn và sẽ được lưu vào thư mục tải xuống mặc định hoặc
                  thư mục tải xuống được chọn.
                </p>
              </div>

              <div className="shadow-2xl bg-white p-5 border space-y-3">
                <h2 className="text-center font-semibold text-2xl mb-6">
                  Các câu hỏi thường gặp Về Tải Video Youtube Short
                </h2>

                <span className="block font-medium text-lg">Youtube Short là gì?</span>
                <p className="!mb-10">
                  Youtube Short là tính năng video ngắn của Youtube, cho phép người dụng tạo và tải lên các video ngắn
                  với rất nhiều hiệu ứng đa dạng. Bạn có thể sử dụng
                  <span className="font-medium"> Youtube Shorts Download</span> để tải xuống bất kỳ video Short từ
                  Youtube về thiết bị.
                </p>

                <span className="block font-medium text-lg">
                  Tôi có phải trả phí khi tải video Youtube Short không?
                </span>
                <p className="!mb-10">
                  Tuyệt đối không, bạn có thể tải video Youtube Short yêu thích từ Youtube miễn phí, không giới hạn bất
                  kỳ tính năng nào.
                </p>

                <span className="block font-medium text-lg">
                  Làm cách nào để tải video Short từ Youtube từ máy tính?
                </span>
                <p className="!mb-10">
                  Bước 1: Sao chép và dán liên kết Short vào hộp nhập liệu và nhấn nút{" "}
                  <span className="font-medium">Quét video</span>.
                  <br /> Bước 2: Chờ vài giây để hệ thống tìm kiếm và load video, Chọn định dạng{" "}
                  <span className="font-medium">MP4</span> hoặc <span className="font-medium">MP3</span> và nhấn nút{" "}
                  <span className="font-medium">Tải xuống</span> và chờ vài giây để tải tệp về thiết bị của bạn. <br />
                  <span className="italic">
                    (Youtube Shorts Download hoạt động tốt trên Chrome, Firefox hoặc bất kỳ trình duyệt nào.)
                  </span>
                </p>

                <span className="block font-medium text-lg">
                  Làm thế nào để tải video Youtube Shorts Download trên điện thoại?
                </span>
                <p className="!mb-10">
                  Sao chép liên kết video Short → Truy cập trang web{" "}
                  <span className="font-medium">Tải video Youtube Shorts</span> → Dán liên kết Short vừa sao chép vào
                  hộp nhập liệu → Tải xuống.
                </p>

                <span className="block font-medium text-lg">Youtube Short được lưu ở đâu khi tải về?</span>
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

export default VideoYoutubeShort
