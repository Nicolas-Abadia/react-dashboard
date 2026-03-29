import { useState } from 'react'
import { useEffect } from 'react'

function App(){
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("https://dummyjson.com/quotes/random")
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        setQuote(data.quote);
        setIsLoading(false);
      })
      .catch(err => {
        setError("Failed to load quote.");
        setIsLoading(false);
      });
  },[refreshCount]);
  

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = <p>{quote}</p>;
  }

  return (
    <div>
      {content}
      <button  onClick={() => {setRefreshCount(c => c + 1);} }>
        New Quote
      </button>
    </div>

  );

}

export default App
