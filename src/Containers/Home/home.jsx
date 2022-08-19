import {React, useEffect} from 'react';
function Home(){
    useEffect(() => {
      document.title = "Home Page"
    }, [])
  
    return(
      <div className="container">
        <h1>HEYY</h1>
      </div>
    )
  }
export default Home;