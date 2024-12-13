import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const [letterCount, setLetterCount] = useState(0)
  const Count = (value) => {
    const wcount = value.trim().split(/\s+/).filter(Boolean)
    const lcount = value.replace(/\s+/g, "");
    setWordCount(wcount.length)
    setLetterCount(lcount.length)
  }

  useEffect(()=> {
    Count(value)
  },[value])

  
  return (
    <div className="bg-slate-600 w-full h-screen p-1">
      <div className="w-1/2 bg-white h-1/2 mx-auto p-5 rounded-xl mt-20">
        <textarea
          className="textarea textarea-bordered w-full text-xl"
          placeholder="Enter your text here..."
          cols="30"
          rows="5"
          value={value}
          onChange={(e)=> setValue(e.target.value)}
        ></textarea>
        <div className="mt-5 text-xl">
          <p>Count of Words : {wordCount}</p>
          <p>Count of Letters :  {letterCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
