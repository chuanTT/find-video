import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi"

import config from "~/config"
import { configHeaderLinkType } from "~/types"
import AccordionWapper from "~/components/AccordionWapper"
import StaticImages from "~/assets/images"
import { InitPadding } from "~/common/function"

const configLink: configHeaderLinkType[] = [
  {
    to: config.path.simple_tikdown_web,
    name: "Tải video tiktok không logo",
    logo: StaticImages.LogoTiktok
  },
  {
    to: config.path.facebook_reels_download,
    name: "Tải video Facebook Reels",
    logo: StaticImages.LogoFB
  },
  {
    to: config.path.youtube_shorts_download,
    name: "Tải video Youtube Shorts",
    logo: StaticImages.LogoYT
  },

  {
    to: config.path.instagram_reels_download,
    name: "Tải video Instagram Reels",
    logo: StaticImages.LogoINST
  },
  {
    to: config.path.find_uid_facebook,
    name: "Tìm UID Facebook",
    logo: StaticImages.LogoFB
  }
]

const Header = () => {
  const headerElement = useRef<HTMLDivElement | null>(null)
  const listNavElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrollEvent = () => {
      const sceen = window.innerWidth
      if (sceen >= 768) {
        if (headerElement?.current && listNavElement?.current) {
          const { height: heightHeader } = headerElement.current.getBoundingClientRect()
          const { height: heightNav } = listNavElement.current.getBoundingClientRect()
          const heightLogo = heightHeader - heightNav
          const x = window.scrollY

          if (x >= heightLogo) {
            headerElement.current.style.top = `${heightLogo * -1}px`
          } else {
            headerElement.current.style.top = `${0}px`
          }
        }
      }
    }
    scrollEvent()
    window.addEventListener("scroll", scrollEvent)
    return () => {
      window.removeEventListener("scroll", scrollEvent)
    }
  }, [])

  return (
    <header
      id="header"
      className="max-md:fixed max-md:top-0 max-md:left-0 max-md:right-0 sticky transition-all bg-white z-10 max-md:shadow-lg"
      ref={headerElement}
    >
      <AccordionWapper>
        {({ refButton, refContent, toggleAccordion }) => {
          return (
            <>
              <div className="max-md:flex max-md:items-center max-md:justify-between max-md:px-5">
                <div className="w-52 p-[10px]">
                  <NavLink to={config.path.home}>
                    <img
                      src={StaticImages.logo}
                      alt="logo"
                      onLoad={() => {
                        InitPadding()
                      }}
                    />
                  </NavLink>
                </div>

                <div
                  className="max-md:block hidden"
                  aria-hidden="true"
                  ref={refButton}
                  onClick={() => {
                    typeof toggleAccordion === "function" && toggleAccordion()
                  }}
                >
                  <div className="cursor-pointer text-2xl text-gray-600">
                    <FiMenu />
                  </div>
                </div>
              </div>
              <div className="max-md:block hidden accordion-content border-t-[1px]" ref={refContent}>
                {configLink.map((item: configHeaderLinkType, index: number) => {
                  return (
                    <NavLink
                      className="nav-header h-[51px] block"
                      to={item?.to || config.path.home}
                      key={index}
                      onClick={() => {
                        typeof toggleAccordion === "function" && toggleAccordion()
                      }}
                    >
                      <div className="flex px-4 py-3 space-x-2 cursor-pointer hover:bg-wf060f7c transition duration-200 rounded-md group h-full">
                        <div className="w-6">
                          <img src={item?.logo} alt={item?.name} />
                        </div>
                        <span className="text-base font-medium group-hover:text-white transition duration-200">
                          {item?.name}
                        </span>
                      </div>
                    </NavLink>
                  )
                })}
              </div>
            </>
          )
        }}
      </AccordionWapper>

      <div className="w-full bg-wf7 flex justify-center flex-wrap gap-2 max-md:hidden" ref={listNavElement}>
        {configLink.map((item: configHeaderLinkType, index: number) => {
          return (
            <NavLink className="nav-header" to={item?.to || config.path.home} key={index}>
              <div className="flex p-4 space-x-2 cursor-pointer hover:bg-wf060f7c transition duration-200 rounded-md group h-full">
                <div className="w-6">
                  <img src={item?.logo} alt={item?.name} />
                </div>
                <span className="text-base font-medium group-hover:text-white transition duration-200">
                  {item?.name}
                </span>
              </div>
            </NavLink>
          )
        })}
      </div>
    </header>
  )
}

export default Header
