import React, { useState, useEffect } from "react"
import './App.css';
import HttpClient from "./HttpClient"
import NasaImage from "./NasaImage"

const App = () => {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    HttpClient.getNasaData().then(nasaAPIData => {
      setNasaData(nasaAPIData.data)
    })
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <h1>NASA PHOTO OF THE DAY</h1>
      </div>
      <div className="container">
        <div className="gallery">
          {nasaData?.map((nasaImage) => (
            <NasaImage nasaImage={nasaImage} key={nasaImage.date} />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default App