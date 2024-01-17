type cardProps = {
    icon:string,
    text:string
}

function SliderCard({icon, text}: cardProps) {    
    let iconDir:string = '/icons/' + icon + '.png'
    return(
        <div className="h-[80px] max-w-[150px] flex flex-row mt-6 md:h-[120px]">
        <div className="flex flex-row items-center">
          <div className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] flex">
            <img src={iconDir} alt="" />
          </div>
          <p className="ml-2 md:text-[20px] md:ml-5">{text}</p>
        </div>
      </div>
    )
}

export default SliderCard