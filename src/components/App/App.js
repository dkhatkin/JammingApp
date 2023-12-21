import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import Track from "../Track/Track";
import SearchResults from '../SearchResults/SearchResults';
function App() {
  return (
    <div className="App">
      <main className="main">
        <SearchForm/>
        <SearchResults/>
      </main>
    </div>
  );
}

export default App;
