import "./App.css";
import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({name}) => {
  return (
    <div>
      <h1 style={{ backgroundColor: "green" }}>{name}</h1>
    </div>
  );
};
const RightHandComponent = ({message}) => {
  return (
    <div>
      <p style={{ backgroundColor: "red" }}>{message}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SplitScreen
        leftWeight={1}
        rightWeight={3}
      >
        <LeftHandComponent name="Nayeem"/>
        <RightHandComponent message="Hello!!"/>
      </SplitScreen>
    </div>
  );
}

export default App;
