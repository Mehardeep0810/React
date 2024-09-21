import React from 'react'

const Learn = () => {
  const randomNum = Math.floor(Math.random() * 10 + 1)
  const luckynum = 7;
  return (
    <div>
      <h1>This is a heading tag: {Math.floor(Math.random() * 6 + 1)}</h1>
      <h2>My random number between 1 to 10: {randomNum}</h2>
      {randomNum === luckynum ? 
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm12NWIwNWFydjdweHpyNWg5amxkcmJqcDBtOWN1OXh2anJqY2J4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2lQCBjuFMLCOvXno4l/giphy.gif"/>
        :<p>Not a lucky number 😊</p>
      }
    </div>
  )
}

export default Learn