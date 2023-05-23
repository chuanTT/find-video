import { FC, useState, useEffect } from "react"
import { IconLoading } from "~/components/Icon"
import { ConfigHeadingTile } from "~/types"

const HeadingTile: FC<ConfigHeadingTile> = ({
  head,
  desc,
  instruct,
  note,
  submitButton,
  onChangeInput,
  children,
  isLoading,
  placeholder,
  textButton,
  value,
  isUpdate
}) => {
  const [textInput, setTextInput] = useState("")

  useEffect(() => {
    if (value) {
      setTextInput(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate])

  return (
    <div className="p-[10px] flex justify-center mt-7">
      <div className="max-w-[1140px] w-full">
        <h2 className="font-bold text-3xl text-center">{head}</h2>
        <span className="block mt-3 text-base text-[#898989] text-center mb-10">{desc}</span>

        <div className="flex justify-center items-center sm:h-[40px] space-x-2 max-md:w-full max-sm:flex-col md:w-[60%] mx-auto">
          <input
            value={textInput}
            className="border outline-none py-[7px] px-[14px] sm:flex-1 max-sm:w-full h-full"
            placeholder={placeholder ?? "Nhập link video muốn tải..."}
            type="text"
            onChange={(e) => {
              const txt = e.target.value
              setTextInput(txt)
              typeof onChangeInput === "function" && onChangeInput(txt)
            }}
          />

          <button
            className={`bg-[#18BC7E] py-3 rounded h-full text-white px-3 max-sm:mt-2  flex justify-center items-center ${
              isLoading ? "opacity-50 cursor-default" : "cursor-pointer"
            }`}
            disabled={isLoading}
            onClick={(e) => {
              if (!textInput && !textInput?.trim()) {
                e.preventDefault()
                return
              }
              if (!isLoading) {
                typeof submitButton === "function" && submitButton(textInput)
              }
            }}
          >
            {isLoading && (
              <div className="[&>*]:animate-spin mr-[6px]">
                <IconLoading />
              </div>
            )}
            {textButton ?? "Quét video"}
          </button>
        </div>
        {note && (
          <span className="block mt-2 font-medium sm:h-[40px] max-md:w-full max-sm:flex-col md:w-[60%] mx-auto">
            <span className="text-red-500">Lưu ý: </span>
            {note}
          </span>
        )}
        {/* 
        <div className="flex justify-center mt-5 mb-16">
          <iframe
            title="reCAPTCHA"
            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeDkl0hAAAAAJQqacOFCbcRBJZhO-SOM44eveTG&amp;co=aHR0cHM6Ly9hdHBzb2Z0d2FyZS52bjo0NDM.&amp;hl=en&amp;v=1h-hbVSJRMOQsmO_2qL9cO0z&amp;size=normal&amp;cb=owrwdmtvaqsm"
            width="304"
            height="78"
            role="presentation"
            name="a-29pavy5neitm"
            // frameborder="0"
            scrolling="no"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
          ></iframe>
        </div> */}

        {children}

        {instruct && (
          <div className="p-3 bg-[#169B4430] rounded text-center mt-5">
            <span className="text-base font-medium text-[#169B44]">{instruct}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeadingTile
