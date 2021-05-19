import "./App.css";
import SideBar from "./component/sidebar";
import MainContainer from "./component/mainContainer";
function App() {
  return (
    <div>
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainContainer">
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
