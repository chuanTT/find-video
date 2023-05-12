import { HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { BsFillBuildingFill } from "react-icons/bs"
import { FaUsers, FaTelegram, FaYoutube, FaTiktok, FaInternetExplorer } from "react-icons/fa"

import { ConfigListMXHType, configFooterType } from "~/types"
import config from "~/config"
import { Fragment } from "react"
import { AccordionProps } from "~/components/Accordion"
import StaticImages from "~/assets/images"
import { getBaseUrl } from "~/common/function"

const ListMXH: ConfigListMXHType[] = [
  {
    Icon: FaUsers,
    link: "https://www.facebook.com/groups/807240710504127/",
    color: "#69727d"
  },

  {
    Icon: FaTelegram,
    link: "https://t.me/+9EuCubBZNCJhYmE1",
    color: "#2ca5e0"
  },

  {
    Icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCzT9f4tX-o4oQpVbHTdm_sA",
    color: "#cd201f"
  },

  {
    Icon: FaTiktok,
    link: "http://www.tiktok.com/@mokate.mkt",
    color: "#69727d"
  }
]

const LinkTypeFooter: configFooterType[] = [
  {
    head: "CÔNG TY CP GIẢI PHÁP MKT",
    children: [
      {
        Icon: BsFillBuildingFill,
        name: "Tầng 4 Toà Nhà Stellar Garden, 35 Lê Văn Thiêm, Thanh Xuân, HN",
        link: "https://www.google.com/maps/place/Stellar+Garden/@21.000621,105.8013367,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ad10940ff6fb:0x2390fdb10dee9dc6!8m2!3d21.000616!4d105.8035254"
      },

      {
        Icon: HiPhone,
        name: "tel:+84966363373",
        link: "mailto:phanmemmkt.vn@gmail.com"
      },

      {
        Icon: MdEmail,
        name: "phanmemmkt.vn@gmail.com",
        link: "mailto:phanmemmkt.vn@gmail.com"
      },

      {
        Icon: FaInternetExplorer,
        name: "Website: phanmemmkt.vn",
        link: "https://phanmemmkt.vn"
      }
    ],
    lastReactElement: () => {
      return (
        <div className="p-[10px]">
          <a
            href="https://www.dmca.com/Protection/Status.aspx?ID=1da25586-dc9b-4b5f-887b-f47186ca5dd9&refurl=https://phanmemmkt.vn/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={StaticImages.DMCA} alt="DMCA.com Protection Status phanmemmkt.vn" />
          </a>
        </div>
      )
    }
  },

  {
    head: "ĐIỀU KHOẢN CHÍNH SÁCH",
    children: [
      {
        isArrow: true,
        name: "Điều Khoản Sử Dụng",
        link: "https://phanmemmkt.vn/dieu-khoan-su-dung/"
      },

      {
        isArrow: true,
        name: "Chính Sách Bảo Mật",
        link: "https://phanmemmkt.vn/chinh-sach-bao-mat/"
      },

      {
        isArrow: true,
        name: "Chính Sách Bảo Hành",
        link: "https://phanmemmkt.vn/chinh-sach-bao-hanh/"
      },

      {
        isArrow: true,
        name: "Chính Sách Cài Đặt Phần Mềm",
        link: "https://phanmemmkt.vn/chinh-sach-cai-dat-phan-mem/"
      },

      {
        isArrow: true,
        name: "Hướng Dẫn Thanh Toán",
        link: "https://phanmemmkt.vn/huong-dan-thanh-toan-phan-mem-mkt"
      },

      {
        isArrow: true,
        name: "Câu Hỏi Thường Gặp",
        link: "https://phanmemmkt.vn/huong-dan-thanh-toan-phan-mem-mkt"
      }
    ]
  },

  {
    head: "Bạn nên đọc",
    children: [
      {
        isArrow: true,
        name: "Giới Thiệu",
        link: "https://phanmemmkt.vn/gioi-thieu/"
      },

      {
        isArrow: true,
        name: "Hoạt động đào tạo",
        link: "https://phanmemmkt.vn/dao-tao"
      },

      {
        isArrow: true,
        name: "Tin Tức & Sự Kiện",
        link: "https://phanmemmkt.vn/chuyen-muc/tin-bao-chi"
      },

      {
        isArrow: true,
        name: "Tuyển Dụng",
        link: "https://phanmemmkt.vn/tuyen-dung"
      },

      {
        isArrow: true,
        name: "Liên Hệ",
        link: "https://phanmemmkt.vn/lien-he/"
      }
    ],
    lastReactElement: () => {
      return (
        <div className="mt-[17px]">
          <h3 className="font-semibold text-sm text-white">Kết nối với chúng tôi</h3>

          <div className="flex gap-3 mt-2">
            {ListMXH?.map((item, index) => {
              const Icon = item?.Icon ?? Fragment

              return (
                <div
                  key={index}
                  className="rounded-full overflow-hidden"
                  style={{ backgroundColor: item?.color ?? "#69727d" }}
                >
                  <a
                    className="w-8 h-8 flex justify-center items-center rounded-full text-white"
                    style={{ fontSize: 16, lineHeight: "16px" }}
                    href={item?.link || config.path.home}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  },

  {
    head: "Thanh toán",
    children: [
      {
        isDots: true,
        name: "STK: 4294396868"
      },

      {
        isDots: true,
        name: "TechcomBank"
      },

      {
        isDots: true,
        name: "Phan Thị Hải Yến"
      }
    ],
    lastReactElement: () => {
      return (
        <div className="mt-4 ml-8 mr-5 pl-4 py-5 " style={{ borderLeft: "3px solid #dddddd" }}>
          <a className="text-white" href="https://www.facebook.com/phanmemmkt.vn/" rel="noreferrer" target="_blank">
            Phần Mềm Marketing
          </a>
        </div>
      )
    },
    classParent: "flex sm:[&>*]:w-1/2 gap-2 max-sm:[&>:last-child]:w-1/3 max-sm:[&>*]:w-1/2",
    classDivChild: "flex flex-col justify-center",
    innerReactElement: () => {
      return (
        <div className="rounded-xl overflow-hidden">
          <img className="w-full h-full" src={StaticImages.QRcode} alt="thanh toán" />
        </div>
      )
    }
  }
]

const QuestionTiktok: AccordionProps[] = [
  {
    title: "Web tải video tiktok có miễn phí không",
    desc: "Công cụ của chúng tôi hoàn toàn miễn phí và <strong>luôn như vậy</strong>. Ngoài ra chúng tôi không bật bất kỳ quảng cáo nào, việc sử dụng công cụ sẽ dễ dàng và hữu dụng hơn bao giờ hết."
  },

  {
    title: "Cách lấy link tải video TikTok",
    desc: "Mở ứng dụng TikTok<br/>Chọn video TikTok mà bạn muốn tải xuống<br/>Nhấp vào Chia sẻ tìm và bấm vào Sao chép liên kết<br/>Liên kết tải xuống của bạn đã sẵn sàng"
  },

  {
    title: "Làm cách nào để Tải video TikTok bằng iPhone / iPad?",
    desc: "Trước đây, bạn không thể sử dụng trình duyệt để tải video, âm nhạc về iPhone hoặc iPad do chính sách bảo mật của Apple. Nhưng từ phiên bản IOS 13 trở đi, Safari đã cho phép tải xuống các tệp tin media về máy."
  },

  {
    title: "Video TikTok được lưu ở đâu sau khi tải xuống?",
    desc: "Khi quá trình tải xuống bắt đầu, thiết bị của bạn sẽ hiển thị vị trí cần lưu. Nếu không chúng sẽ được lưu vào vị trí thư mục mặc định tải xuống. Trên máy tính bạn có thể bấm tổ hợp phím Ctr+ J trên trình duyệt. Trên điện thoại mặc định sẽ vào trong kho ảnh/video của bạn. Ngoài ra bạn nên cài thêm ứng dụng quản lý thư mục để dễ dàng truy xuất."
  },

  {
    title: "Những liên kết tải xuống nào được hỗ trợ?",
    desc: "Những liên kết ví dụ sau là hợp lệ:<br/><p class='text-red-500'>https://vt.tiktok.com/xxxx/</p><p class='text-red-500'>https://www.tiktok.com/@xxxx/video/xxxx</p>"
  },
  {
    title: "Có cần dùng tài khoản để tải video Tiktok về máy tính?",
    desc: `Không! Bạn không cần phải có tài khoản TikTok, chỉ cần sao chép liên kết video muốn tải về, truy cập vào ${getBaseUrl()}/${
      config.path.simple_tikdown_web
    } dán đường link liên kết vào ô, chọn Tải Ngay rồi chọn định dạng tải về là xong.`
  }
]

const QuestionFindUid: AccordionProps[] = [
  {
    title: "UID dùng để làm gì?",
    desc: "UID Facebook có nhiều cách khai thác, tuỳ vào mục đích sử dụng của bạn.<br/>Một vài ứng dụng của UID FB trong Marketing:<br/>– Kết bạn Facebook<br/>– Kết bạn Zalo<br/>– Tăng like bài viết"
  },

  {
    title: "Làm thế nào để tìm UID của người dùng Facebook?",
    desc: "Sử dụng công cụ Finduid để tìm ID Facebook"
  },

  {
    title: "Tôi có thể tự tạo UID theo nhu cầu được không?",
    desc: "UID không thể tự tạo theo yêu cầu mà được Facebook sắp xếp ngẫu nhiên theo thời gian tạo.<br/>Facebook tạo lâu năm thì UID ít số, Facebook mới tạo thì UID có ít nhất 10 số."
  },

  {
    title: "UID Facebook có thể đổi được không?",
    desc: "UID không thể thay đổi được, ngay sau khi tạo tài khoản Facebook thì ID đã được gắn cố định vào tài khoản."
  },

  {
    title: "Facebook của tôi bị hack khi để lộ UID có đúng không?",
    desc: "<strong>Chắc chắn là không rồi</strong>, đến thời điểm này vẫn chưa có tài liệu nào nói rằng để “lộ” UID sẽ bị hack Facebook. Vì UID Facebook là công khai."
  },
  {
    title: "Cách tìm UID Facebook của người nổi tiếng",
    desc: "Tương tự một người dùng Facebook bình thường, Facebook của người nổi tiếng cũng được định danh bằng ID.<br/>Cách thực hiện cũng tương tự như lấy UID Facebook của người dùng bình thường."
  }
]

export { LinkTypeFooter, QuestionTiktok, QuestionFindUid }
