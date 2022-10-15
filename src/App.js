import React,{useState, useEffect} from 'react';
import './App.css';

function App() {

  const [loppuPiste, setLoppuPiste] = useState('')

  const [container, setContainer] = useState([])

  const [finalPoint, setFinalPoint] = useState('')

  useEffect(() => {
    fetchMe()
  },[finalPoint])


  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5feac1080bmsh96bb8ff7862c82ep15ac43jsn02c04ba99d37',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  const fetchMe = () => {
  
  fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${loppuPiste}`, options)
    .then(response => {
      return response.json()
    })
    //.then(response => console.log(response))
    .then(data => {
      setContainer(data.d)
    })
    .catch(err => console.error(err));
  }  
  const onChangeHandler = (e) => {
    setLoppuPiste(e.target.value)
  } 

  const haeHandler = e => {
    e.preventDefault()
    setFinalPoint(loppuPiste)
  }

  return (
    <div className="App">

        <form onSubmit={haeHandler}>
              <input type="text" placeholder='Hae elokuvaa' value={loppuPiste} onChange={onChangeHandler} />
              <button type='hae'>hae</button>


        </form>
    <div className='element'>
        {container.map((item,index) => {
          return (
            <div key={index} className='element-div'>
            <img src={item.i.imageUrl} alt="" />  

            <p>{item.l}</p>
            <p>{item.s}</p>
            </div>
          )
        })}
    </div>
    </div>
  );
}

export default App;
