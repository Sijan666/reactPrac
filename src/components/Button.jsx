const Button = ({btnText, className}) => {
  return (
    <div className={`py-3 px-5 duration-300 rounded-[42px] cursor-pointer bg-transparent border-2 hover:bg-[#FFC247] hover:border-[#FFC247] ${className}`}>{btnText}</div>
  )
}

export default Button