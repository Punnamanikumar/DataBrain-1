import "./App.css";
import Form from "./Form";
import Background from "./img.jpg";

function App() {
  return (
    <div className="App">
      <div className="bimg">
        <img src={Background} alt="" />
      </div>
      <Form />
    </div>
  );
}

export default App;
