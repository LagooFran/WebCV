import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "react-slick";
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
                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/c.png" alt="" />
                          </div>
                          <p className="ml-2">C</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/c+.png" alt="" />
                          </div>
                          <p className="ml-2">C++</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/js.png" alt="" />
                          </div>
                          <p className="ml-2">Javascript</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/c-sharp.png" alt="" />
                          </div>
                          <p className="ml-2">C-Sharp</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/python.png" alt="" />
                          </div>
                          <p className="ml-2">Python</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="\\sliderContainer\\ ml-2">
                    <Slider {...settings}>
                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/sql.png" alt="" />
                          </div>
                          <p className="ml-2">Sql Server</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/mariadb.png" alt="" />
                          </div>
                          <p className="ml-2">Maria DB</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/firebird.png" alt="" />
                          </div>
                          <p className="ml-2">Firebird</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/firebase.png" alt="" />
                          </div>
                          <p className="ml-2">Firebase</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="\\sliderContainer\\ ml-2">
                    <Slider {...settings}>
                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/js.png" alt="" />
                          </div>
                          <p className="ml-2">Javascript</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/react.png" alt="" />
                          </div>
                          <p className="ml-2">React</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/asp.png" alt="" />
                          </div>
                          <p className="ml-2">ASP.net</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/html-5.png" alt="" />
                          </div>
                          <p className="ml-2">HTML 5</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/css-3.png" alt="" />
                          </div>
                          <p className="ml-2">CSS 3</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="\\sliderContainer\\ ml-2">
                    <Slider {...settings}>
                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/uml.png" alt="" />
                          </div>
                          <p className="ml-2">UML</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/agile.png" alt="" />
                          </div>
                          <p className="ml-2">Agile</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/xls.png" alt="" />
                          </div>
                          <p className="ml-2">Excel</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/github.png" alt="" />
                          </div>
                          <p className="ml-2">Github</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/figma.png" alt="" />
                          </div>
                          <p className="ml-2">Figma</p>
                        </div>
                      </div>

                      <div className="h-[80px] max-w-[150px] flex flex-row mt-6">
                        <div className="flex flex-row items-center">
                          <div className="h-[60px] w-[60px] flex">
                            <img src="/icons/adobe-photoshop.png" alt="" />
                          </div>
                          <p className="ml-2">Photoshop</p>
                        </div>
                      </div>
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
            <div className="flex h-[180px] max-w-[95%] bg-white">
                <div className="h-[100px] w-[100%] flex">
                  <img className="w-[100%]" src="/programming.jpg" alt=""></img>
                </div>
                <p className="ml-3 mt-1 text-[20px]">Color changer</p>
              </div>

              <div className="flex  h-[180px] max-w-[95%] bg-white">
                <div className="h-[100px] w-[100%] flex">
                  <img className="w-[100%]" src="/programming.jpg" alt=""></img>
                </div>
                <p className="ml-3 mt-1 text-[20px]">More On Github</p>
              </div>
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
