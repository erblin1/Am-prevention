import "./Courses.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactPlayer from "react-player";
import "react-tabs/style/react-tabs.scss";
import SideNav from "../dashborad/SideNav";
function Courses() {
  return (
    <>
      <SideNav />
      <div className="wrapper">
        <div className="main_content">
          <div className="info">
            <Tabs>
              <TabList>
                <Tab>Course 1</Tab>
                <Tab>Course 2</Tab>
                <Tab>Course 3</Tab>
              </TabList>
              <TabPanel>
                <div className="center">
                  <div>
                    <ReactPlayer
                      controls
                      url="https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution"
                    />
                  </div>
                  <div>
                    <h3>Know About Plagrism</h3>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>course 3 called</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;
