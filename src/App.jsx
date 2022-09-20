import { useState } from 'react'
import './App.css'
import Button1 from './components/Button1'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'




function App() {

  //esta funcion calcula un indice random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length) ///indice random
  
  //aqui se extrae el elemento segun el indice random
  const firstQuote = quotes[getIndexRandom(quotes)] 
  const firstColor = color[getIndexRandom(color)]

  
  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  } // tambien sirve colocar en style {{backgroundColor: randomColor}} pero como esta en esta linea es mas limpio
  
  //esta funcion calcula tanto un quote como un color random
  const getRandomAll = () => {
  setRandomQuote(quotes[getIndexRandom(quotes)])
  setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
      randomQuote= {randomQuote}
      randomColor= {randomColor}
      
      />
      <Button1 
      getRandomAll={getRandomAll}
      randomColor= {randomColor}

      />

    </div>
  )
}

export default App
