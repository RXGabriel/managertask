import { SideBar } from "../components/SideBar";
import { Tasks } from "../components/Tasks";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <SideBar />
      <Tasks />
    </div>
  );
};

export default Home;
