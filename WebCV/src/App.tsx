import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "react-slick";
import SliderCard from "./Components/sliderCard";
import SliderCardProjects from "./Components/sliderCardProjects";
import "./slick.css";
import "./slick-theme.css";

function App() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const settings2 = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  return (
    <div>
      <div>
        <div className="\\cards container\\ flex flex-col w-full h-[750px] items-center gap-10">
          <div className="\\title\\ mt-4 ml-5 self-start">
            <p className="text-[40px]">{">"}Franco Lago</p>
            <p className="text-[30px]">Software Developer;</p>
          </div>
          <div className="\\about me\\ h-[284px] w-[350px] bg-white shadow-xl ">
            <div className="\\header\\ flex flex-row mt-5 ml-7">
              <div className="\\img\\ rounded-[200px] h-[80px] w-[80px]">
                <img className="rounded-[200px]" src="/myface.jpeg" alt="" />
              </div>
              <div className="\\title\\ mt-3 ml-3">
                <p className="text-[12px]">{"#Include <presentation>"}</p>
                <p className="text-[30px]">{">>"}About Me</p>
              </div>
            </div>

            <p className="text-[12px] ml-8 mt-3 max-w-[300px]">
              {">"}Im a young computer science student from argentina looking to
              expand my knoledge and to gain experience by working in
              challenging and amazing projects.
            </p>
            <p className="text-[12px] ml-8 mt-3 max-w-[300px]">
              {">"}Im a very comunicative person and i like working with other
              people, im open minded and i enjoy learning new things.
            </p>
          </div>

          <div className="\\knoledges\\ h-[300px] w-[350px] bg-white shadow-xl">
            <div className="\\title\\ mt-6 ml-5">
              <p className="text-[12px] ml-8">
                {"fopen(“my_knoledges.txt”, “r”);"}
              </p>
              <p className="text-[30px]">{">>"}My knoledges</p>
            </div>
            <div className="\\tabs\\ ml-3 mr-3 mt-3">
              <Tabs>
                <TabList>
                  <Tab>Languages</Tab>
                  <Tab>DB</Tab>
                  <Tab>Web</Tab>
                  <Tab>Extra</Tab>
                </TabList>

                <TabPanel>
                  <div className="\\sliderContainer\\ ml-2">
                    <Slider {...settings}>
                      <SliderCard icon="c" text="C"></SliderCard>
                      <SliderCard icon="c+" text="C++"></SliderCard>
                      <SliderCard icon="js" text="Javascript"></SliderCard>
                      <SliderCard icon="c-sharp" text="C#"></SliderCard>
                      <SliderCard icon="python" text="Python"></SliderCard>
                    </Slider>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="\\sliderContainer\\ ml-2">
                    <Slider {...settings}>
                      <SliderCard icon="sql" text="SQL Server"></SliderCard>
                      <SliderCard icon="mariadb" text="Maria DB"></SliderCard>
                      <SliderCard icon="firebird" text="Firebird"></SliderCard>
                      <SliderCard icon="firebase" text="Firebase"></SliderCard>
                    </Slider>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="\\sliderContainer\\ ml-2">
                    <Slider {...settings}>
                      <SliderCard icon="js" text="Javascript"></SliderCard>
                      <SliderCard icon="react" text="React"></SliderCard>
                      <SliderCard icon="asp" text="ASP.net"></SliderCard>
                      <SliderCard icon="html-5" text="HTML 5"></SliderCard>
                      <SliderCard icon="css-3" text="CSS 3"></SliderCard>
                    </Slider>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="\\sliderContainer\\ ml-2">
                    <Slider {...settings}>
                      <SliderCard icon="uml" text="UML"></SliderCard>
                      <SliderCard icon="agile" text="Agile"></SliderCard>
                      <SliderCard icon="xls" text="Excel"></SliderCard>
                      <SliderCard icon="github" text="GitHub"></SliderCard>
                      <SliderCard icon="figma" text="Figma"></SliderCard>
                      <SliderCard icon="adobe-photoshop" text="Photoshop"></SliderCard>
                    </Slider>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="\\title\\ mt-8 ml-5 mb-10 self-start">
          <p className="text-[40px]">{">"}Projects</p>
        </div>
        <div className="flex w-[100%] h-[200px] justify-center">
          <div className="\\slider-container\\ w-[320px] h-[200px] mb-12 ">
            <Slider {...settings2}>
              <SliderCardProjects image="programming" text="Color changer"></SliderCardProjects>
              <SliderCardProjects image="programming" text="More on github"></SliderCardProjects>
            </Slider>
          </div>
        </div>

        <div className="\\title\\ mt-8 ml-5 mb-10 self-start">
          <p className="text-[40px]">{">"}Contact me</p>
        </div>

        <div className="\\contactContainer\\ flex w-[100%] h-[200px] justify-center">
            <div className="\\knoledges\\ h-[170px] w-[350px] bg-white shadow-xl">
              <div className="h-[50%] w-[100%] flex flex-column gap-10 p-6 justify-center">
                  <a href="https://github.com/LagooFran" className="\\info\\ flex flex-row items-center gap-4">
                    <div className="h-[50px] w-[50px]">
                      <img className="w-[100%]" src="/icons/github.png" alt=""></img>
                    </div>
                    <h2>Github</h2>
                  </a>
                  <a href="https://www.linkedin.com/in/franco-lago-b1a59312b/" className="\\info\\ flex flex-row items-center gap-4">
                    <div className="h-[50px] w-[50px]">
                      <img className="w-[100%]" src="/icons/linkedin.png" alt=""></img>
                    </div>
                    <h2>Linkedin</h2>
                  </a>
              </div>

              <a href="mailto:fran080j9@gmail.com" className="\\info\\ flex flex-row items-center gap-4 p-6 h-[50%] w-[100%] ml-2">
                  <div className="h-[60px] w-[60px]">
                    <img className="w-[100%]" src="/icons/gmail.png" alt=""></img>
                  </div>
                  <h2>fran080j9@gmail.com</h2>
              </a>
            </div>
        </div>


      </div>
    </div>
  );
}

export default App;
