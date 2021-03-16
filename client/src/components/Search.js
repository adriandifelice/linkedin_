import React, {useState} from 'react';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const url = "www.linkedin.com/in/"
  const fullUrl = url + userInput;
  return ( 
    <>
    <div>
       <h1>Search Linkedin Info</h1>
    </div>
   

    <p>{url}<input placeholder="enter user name" onKeyUp={(e)=>setUserInput(e.target.value)}></input></p>
    <button onClick={()=>console.log('fullURL',fullUrl)}>click</button>
    </>
   );
}
 
export default Search;