import { FC } from "react"
import { IoIosArrowUp } from "react-icons/io"
import AccordionWapper from "./AccordionWapper"

export interface AccordionProps {
  title?: string
  desc?: string
  classAccordion?: string
  isOpen?: boolean
}

const Accordion: FC<AccordionProps> = ({ title, desc, classAccordion }) => {
  return (
    <AccordionWapper>
      {({ refButton, refContent, active, toggleAccordion }) => {
        return (
          <div className={`overflow-hidden ${classAccordion ?? ""}`}>
            <div
              ref={refButton}
              className="px-5 py-[15px] !pr-[35px] bg-[#f3f3f3] relative cursor-pointer select-none text-[#212529] transition-al"
              aria-hidden="true"
              onClick={() => {
                typeof toggleAccordion === "function" && toggleAccordion()
              }}
            >
              <span className="text-lg font-semibold text-current" style={{ lineHeight: "25px" }}>
                {title}
              </span>

              <div
                className="absolute top-1/2 -translate-y-1/2 right-1 text-current -translate-x-1/2"
                style={{ fontSize: 20 }}
              >
                <IoIosArrowUp className={`transition-all ${active ? "" : "-rotate-180"}`} />
              </div>
            </div>
            <div ref={refContent} className={`accordion-content`}>
              <p className="bg-white px-5 py-[15px]" dangerouslySetInnerHTML={{ __html: desc || "" }}></p>
            </div>
          </div>
        )
      }}
    </AccordionWapper>
  )
}

export default Accordion
