import React, {useState} from 'react';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const url = "www.linkedin.com/in/"
  const fullUrl = url + userInput;

const handleClick = () => {
  console.log('full', fullUrl)
  // make a call to the api function
  // 
}

  return ( 
    <>
    <div>
       <h1>Search Linkedin Info</h1>
    </div>
   

    <p>{url}<input placeholder="enter user name" onKeyUp={(e)=>setUserInput(e.target.value)}></input></p>
    <button onClick={() => handleClick()}>click</button>
    </>
   );
}
 
export default Search;