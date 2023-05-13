import { useEffect } from "react"
import { IoIosWarning } from "react-icons/io"
import { NavLink } from "react-router-dom"
import config from "~/config"

const NotFound = () => {
  useEffect(() => {
    const body = document.body

    if (body) {
      if (!body.classList.contains("bg-F4F5FA")) {
        body.classList.add("bg-F4F5FA")
      }
    }

    return () => {
      if (body) {
        if (body.classList.contains("bg-F4F5FA")) {
          body.classList.remove("bg-F4F5FA")
        }
      }
    }
  }, [])

  return (
    <div className="h-screen bg-F4F5FA">
      <div className="min-h-screen overflow-x-hidden relative 900:p-5 flex items-center justify-center">
        <div className="p-5 relative z-[1] flex flex-col items-center text-center">
          <div>
            <h1 className="1200:text-cus1 900:text-cus2 600:text-cus3 max-600:text-cus4 font-semibold text-center text-3a3541de">
              404
            </h1>
            <h5 className="font-medium text-center text-3a3541de mb-1 flex justify-center items-center text-cus5">
              Page Not Found{" "}
              <p className="ml-1 flex items-start justify-center">
                <IoIosWarning />
              </p>
            </h5>
            <p className="text-cus6 font-normal text-[#3a3541ad] text-center">
              We couldn′t find the page you are looking for.
            </p>
          </div>
          <img
            className="1200:mt-[52px] max-1200:mt-10 max-1200:h-[450px] max-900:h-[400px] mb-10  h-[487px] flex-shrink-0 max-w-none"
            height="487"
            src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/404.png"
            alt=""
          />

          <NavLink
            className="px-[22px] py-[7.5px] rounded flex justify-center items-center bg-wf060f7c text-white font-medium"
            to={config.path.home}
          >
            Back to home
          </NavLink>
        </div>

        <div className="absolute left-0 bottom-20 p-5 flex justify-center items-center z-[1] max-900:hidden">
          <img
            src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/tree.png"
            alt="tree"
          />
        </div>

        <div className="absolute z-0 bottom-0 left-0 w-full max-900:hidden">
          <img
            src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/misc-mask-light.png"
            alt="mask"
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
