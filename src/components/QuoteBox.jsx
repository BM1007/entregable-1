import React from 'react'

const QuoteBox = ({randomQuote,randomColor}) => {

const colorObj = {
    color: randomColor
} 


  return (
    <article style={colorObj} className='card'> {/*se coloca el style en el contenedor padre y asi se hereda a las Cajas hijas no elementos en linea*/}
        <p className='card__quote'>{randomQuote.quote}</p>
        <h1 className='card__author'>{randomQuote.author}</h1>
    </article>
  )
}

export default QuoteBox