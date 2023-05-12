import { FC, useEffect } from "react"
import { ToastContainer } from "react-toastify"
import Footer from "./Footer"
import Header from "./Header"
import { defaultProps } from "~/types"
import "react-toastify/dist/ReactToastify.css"
import { useLocation, useNavigate } from "react-router-dom"
import config from "~/config"

const DefaultLayout: FC<defaultProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.pathname === config.path.home

  useEffect(() => {
    if (from) {
      navigate(config.path.simple_tikdown_web)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from])

  useEffect(() => {
    const InitPadding = () => {
      const widWindown = window.innerWidth
      const header = document.getElementById("header")
      const wapperContainer: HTMLDivElement | null = document.querySelector(".wapper-container")
      if (header && wapperContainer) {
        if (widWindown < 768) {
          const { height: heightHeader } = header.getBoundingClientRect()
          wapperContainer.style.marginTop = `${heightHeader + 30}px`
        } else {
          wapperContainer.removeAttribute("style")
        }
      }
    }

    InitPadding()

    window.addEventListener("resize", InitPadding)

    return () => {
      window.removeEventListener("resize", InitPadding)
    }
  }, [])

  return (
    <div className="wapper">
      <Header />
      <div className="wapper-container">{children}</div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default DefaultLayout
