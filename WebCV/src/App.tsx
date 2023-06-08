import './App.css'


function App() {


  return (
    <div>
      <div>

        <div className='\\cards container\\ flex flex-col w-full h-[750px] items-center gap-10'>
          <div className='\\title\\ flex-row mt-6 ml-5 self-start'>
            <p className='text-[40px]'>{">"}Franco Lago</p>
            <p className='text-[30px]'>Software Developer;</p>
          </div>
          <div className='\\about me\\ h-[284px] w-[350px] bg-white shadow-xl '>
            <div className='\\header\\ flex flex-row mt-8 ml-7'>
              <div className='\\img\\ rounded-[200px] h-[80px] w-[80px] bg-myface'></div>
              <div className='\\title\\ mt-3 ml-3'>
                <p className='text-[12px]'>{"#Include <presentation>"}</p>
                <p className='text-[30px]'>{">>"}About Me</p>
              </div>
            </div>

          </div>
          <div className='\\knoledges\\ h-[300px] w-[350px] bg-white shadow-xl '>
          </div>
        </div>

      </div>
    </div>


  )
}

export default App
