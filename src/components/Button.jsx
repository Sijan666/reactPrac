const Button = ({children, className}) => {
  return (
    <div className={`py-3 px-5 duration-300 text-[19px] font-Inter font-extrabold rounded-[42px] cursor-pointer bg-[#FFC247] border-2 border-[#FFC247] hover:bg-transparent hover:border-black ${className}`}>{children}</div>
  )
}

export default Button