


function Card({ heading,text,image}) {
  return (
    <div className=' '>
      <div className=' lg:w-73 w-full h-full  lg:h-95 rounded-2xl pt-7  px-4 flex  flex-col  justify-between' style={{
        backgroundImage: "linear-gradient(149deg, #192247 0%, #210e17 99.08%)"
      }}>


        <div >
          <h2 className='text-3xl text-white font-bold pb-4'>{heading}</h2>
          <p className='text-zinc-300  font-semibold text-xl leading-6 tracking-wide '>{text}</p>
        </div>
        
       {image &&( <div className='flex justify-end '>
          <img src={image} alt="" width='80' />
        </div>
        )}
      </div>
    </div>
  )
}

export default Card
