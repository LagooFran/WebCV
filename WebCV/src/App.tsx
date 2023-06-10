import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
              <div className="\\img\\ rounded-[200px] h-[80px] w-[80px] bg-myface"></div>
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
                            <img src="/icons/js.png" alt="" />
                          </div>
                          <p className="ml-2">Javascript</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
