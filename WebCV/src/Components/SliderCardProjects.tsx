type cardProps = {
    image:string,
    text:string,
    link:string
}

function SliderCardProjects({image, text, link}: cardProps) {    
    let imgDir:string = '/images/' + image + '.jpg'
    return(
        <a href={link} className="flex h-[180px] max-w-[100%] bg-white flex-col md:h-[250px] md:w-[600px]">
         <div className="h-[100px] w-[100%] md:h-[150px] flex">
            <img className="w-[100%]" src={imgDir} alt=""></img>
         </div>
         <p className="ml-3 mt-1 text-[20px] md:mt-3 md:text-[30px]">{text}</p>
        </a>
    )
}

export default SliderCardProjects