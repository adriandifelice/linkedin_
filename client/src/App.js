import './styles/App.css'
import Search from './components/Search'
import Results from './components/Results'



function App() {
  return (
    <div className="App">
      <div className="search">
          <Search />
      </div>
       <div className="results">
         <Results />
       </div>
    </div>
  );
}

export default App;
