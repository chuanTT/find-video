import { FC, useEffect } from "react"
import { ToastContainer } from "react-toastify"
import Footer from "./Footer"
import Header from "./Header"
import { defaultProps } from "~/types"
import "react-toastify/dist/ReactToastify.css"
import { useLocation, useNavigate } from "react-router-dom"
import config from "~/config"
import { InitPadding } from "~/common/function"

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
