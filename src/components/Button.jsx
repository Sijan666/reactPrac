const Button = ({children, className}) => {
  return (
    <div className={`py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent border-2 hover:bg-[#FFC247] hover:border-[#FFC247] ${className}`}>{children}</div>
  )
}

export default Button