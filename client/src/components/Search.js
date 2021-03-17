import React, {useState} from 'react';
import Results from '../components/Results'
import '../styles/App.css'




const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState();
  const [nResults, setNResults] = useState(1);

async function handleCheck () {
  console.log('userInput', userInput)
  try {
        await fetch(`http://localhost:3005/`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userInput
          })
        } )
        .then(res => res.status === 200?
            res.json()
            .then(data => setResults(data))
            :alert('invalid url'));
       
      } catch (error) {
       alert('Invalid url')
      }
  }

 
  return ( 
    <div className="App">
        <div className="search">
        <h1>Search Linkedin Info</h1>
        <div>
          <input className="urlInput" placeholder="Enter linkedin url" onChange={(e)=>setUserInput(e.target.value)}></input>
          <div className="buttons">
            <input className="userEvent number" value={nResults} type="number" id="quantity" name="quantity" min="1" max="5" onChange={(e) => setNResults(e.target.value)}></input>
            <button className="userEvent button" onClick={() => handleCheck()}>Click to Search</button>
          </div>
        </div>
    </div>
    <div className="results">
        <Results results={results} number={nResults} />
    </div>
  </div>
   );
}
 
export default Search;



    
