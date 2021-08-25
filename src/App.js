import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
      </div>
      <footer className=" mt-3">
        <a
          href="https://github.com/danielle-zn/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Danielle Zamora Nieto
      </footer>
    </div>
  );
}

export default App;
