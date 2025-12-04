
const Hero = ({ heroPic }) => {
  return (
    <div className='w-full h-[180px] lg:h-[200px] overflow-hidden flex justify-center items-center relative'>
      <div className="bg-blue-950/50 absolute z-10 w-full h-[250px] lg:h-[300px] flex justify-center items-center overflow-hidden">
      </div>
      <img src={heroPic} alt="hero" width={'100%'} className='flex justify-between items-center lg:mb-10' />
    </div>
  )
}

export default Hero
