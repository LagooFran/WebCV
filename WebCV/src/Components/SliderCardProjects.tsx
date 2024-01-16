type cardProps = {
    image:string,
    text:string
}

function SliderCardProjects({image, text}: cardProps) {    
    let imgDir:string = '/images/' + image + '.jpg'
    return(
        <div className="flex h-[180px] max-w-[95%] bg-white flex-col">
         <div className="h-[100px] w-[100%] flex">
            <img className="w-[100%]" src={imgDir} alt=""></img>
         </div>
         <p className="ml-3 mt-1 text-[20px]">{text}</p>
        </div>
    )
}

export default SliderCardProjects