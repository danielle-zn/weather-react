import "./App.css";
import Weather from "./Weather";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <SearchForm />
        <br />
        <Weather />
      </div>
      <footer className=" mt-5">
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
