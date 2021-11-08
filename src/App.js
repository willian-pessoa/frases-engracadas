import { useState } from "react";
import './App.scss';
import { funnyFrases as funny } from "./funFrases.js";
import COLORS_ARRAY from "./colorsArray.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


function App() {
  let random = Math.floor(Math.random() * funny.length)
  let frase = funny[random].quote;
  let autor = funny[random].author;

  const [quote, setQuote] = useState(frase);
  const [author, setAuthor] = useState(autor);
  const [accentColor, setAccentColor] = useState('#FF6633');

  const newQuote = () => {
    let random = Math.floor(Math.random() * funny.length);
    setQuote(funny[random].quote);
    setAuthor(funny[random].author);
    setAccentColor(COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)]);
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor}}>
        <div clasName="quote-box" id="quote-box" style={{color: accentColor}}>
          <div id="text">
            <p>
              "{quote}"
            </p>
          </div>
          <div id="author">
          <p>
            - {author}
          </p>
          </div>
          <a id="tweet-quote" style={{backgroundColor: accentColor}} href={encodeURI(`https://www.twitter.com/intent/tweet?text=${quote} -${author}`)} target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
          <button id="new-quote" style={{backgroundColor: accentColor}} onClick={() => newQuote()}>Novo</button>
        </div>
      </header>
    </div>
  );
}

export default App;
