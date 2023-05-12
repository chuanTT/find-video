import { useState, Fragment } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { FaCircle } from "react-icons/fa"

import StaticImages from "~/assets/images"
import { LinkTypeFooter } from "~/data"

const Footer = () => {
  const [strDate] = useState(() => {
    const d = new Date()
    return d.getFullYear()
  })

  return (
    <footer
      className="bg-no-repeat bg-center bg-auto max-sm:bg-cover pt-4"
      style={{ backgroundImage: `url('${StaticImages.bg}')` }}
    >
      <div className="px-5 pt-5 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-row-reverse justify-end items-center">
            <div className="w-[250px] h-[59px] mr-9">
              <img src={StaticImages.logoWhite} alt="Phần mềm mkt" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-y-8 max-sm:grid-cols-1">
            {LinkTypeFooter?.map((item, index) => {
              const Element = item?.lastReactElement || Fragment
              const InnerElement = item?.innerReactElement || Fragment

              return (
                <div key={index}>
                  <h4 className="text-f58120 font-semibold text-base uppercase">{item?.head}</h4>

                  <div className={`${item?.classParent ? item?.classParent : ""}`}>
                    <div className={`mt-[10px] space-y-2 ${item?.classDivChild ?? ""}`}>
                      {item?.children &&
                        Array.isArray(item?.children) &&
                        item?.children?.map((child, indexChild) => {
                          const Icon =
                            child?.Icon ||
                            (child?.isArrow && IoIosArrowForward) ||
                            (child?.isDots && FaCircle) ||
                            Fragment

                          return (
                            <div className="flex" key={indexChild}>
                              <div
                                className="text-f58120 flex justify-center items-center"
                                style={{ fontSize: child?.isDots ? 8 : 14 }}
                              >
                                <Icon />
                              </div>
                              <a
                                href={child?.link}
                                className="text-sm text-white pl-[5px]"
                                rel="noreferrer"
                                target="_blank"
                              >
                                {child?.name}
                              </a>
                            </div>
                          )
                        })}
                    </div>
                    <InnerElement />
                  </div>

                  <Element />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="p-[10px] bg-blue-500 text-center">
        <span className="text-white">© Copyright {strDate} by phần mềm MKT</span>
      </div>
    </footer>
  )
}

export default Footer
