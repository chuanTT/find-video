import { useCallback, useRef, useState, FC, MutableRefObject } from "react"
import { decrementHeight, incrementHeight, requestAnimationFrameAccordion } from "~/common/function"

export interface AccordionWapperProps {
  children: (obj: {
    refButton: MutableRefObject<HTMLDivElement | null>
    refContent: MutableRefObject<HTMLDivElement | null>
    active?: boolean
    toggleAccordion?: () => void
  }) => JSX.Element
}

const AccordionWapper: FC<AccordionWapperProps> = ({ children }) => {
  const [active, setActive] = useState(false)
  const accordionContentRef = useRef<HTMLDivElement | null>(null)
  const divActive = useRef<HTMLDivElement | null>(null)

  const expandAccordion = useCallback(() => {
    if (accordionContentRef.current) {
      const element: HTMLDivElement = accordionContentRef.current
      requestAnimationFrameAccordion({
        element,
        callBackDone: () => {
          element.style.height = "auto"
          element.style.overflow = "initial"
        },
        callProgress: (process, element) => {
          incrementHeight(process, element)
        }
      })
    }
  }, [])

  const collapseAccordion = useCallback(() => {
    if (accordionContentRef.current) {
      const element: HTMLDivElement = accordionContentRef.current
      requestAnimationFrameAccordion({
        element,
        callBackDone: () => {
          element.style.height = ""
          element.style.overflow = ""
          element.style.padding = ""
        },
        callProgress: (process, element) => {
          decrementHeight(process, element)
        }
      })
    }
  }, [])

  const updateUi = useCallback(
    (isOpen: boolean) => {
      if (isOpen) {
        expandAccordion()
      } else {
        collapseAccordion()
      }
    },
    [expandAccordion, collapseAccordion]
  )

  const toggleAccordion = useCallback(() => {
    const expanded = !active

    updateUi(expanded)
    setActive(expanded)
  }, [active, updateUi])

  return <>{children({ refButton: divActive, active, toggleAccordion, refContent: accordionContentRef })}</>
}

export default AccordionWapper
