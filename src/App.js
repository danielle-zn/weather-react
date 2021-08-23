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
    </div>
  );
}

export default App;
