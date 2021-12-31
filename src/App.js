import React from 'react'
import Tomatoes from './Components/Tomatoes'

const App = () => {

  let imgURL = "https://imgur.com/MOTo1WI.png";
  let img2URL = "https://imgur.com/CyTIsPh.png";
  const array = [imgURL, img2URL, imgURL]

  return (
    <div>
     {array.map(element => <Tomatoes element={element}/>)}
    </div>
  )
}

export default App


