import React from 'react'

const Button1 = ({ getRandomAll,randomColor}) => {

    const backgroundObj = {
        backgroundColor: randomColor
    }


    return (
        <article>
            <button
                className='card__btn'
                style={backgroundObj}
                onClick={getRandomAll}
            >&#62;</button> {/* todos estos cambios de color y diseño se hacen aqui ya que son dinamicos, si fueran estaticos seria en css*/}
        </article>
    )
}

export default Button1