import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import Track from "../Track/Track";
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
function App() {
  const songs = [
    { artist: 'AC/DC', title: 'Thunderstruck', album: "The Razors Edge" },
    { artist: 'Rammstein', title: 'Sonne', album: "Mutter" },
    { artist: 'Green Day', title: '21 Guns', album: "21st Century Breakdown" },
  ]
  return (
    <div className="App">
      <main className="main">
        <SearchForm/>
        <div className="ResultsPlaylist">
        <SearchResults songs={songs}/>
        <Playlist songs={songs}/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
