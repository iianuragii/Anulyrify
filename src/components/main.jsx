import React from 'react'
import './styles.css'

const main = () => {
  return (
    <>
        <div className='container'>
            <nav className="sidebar">    
                <div className='sidebar-box'>
                    <div className="sidebar-text">
                        <span>Home</span>
                    </div>                        
                    <div  className="sidebar-text">
                        <span>Search</span>
                    </div>
                    <br></br>
                    <div  className="sidebar-text">
                        <span>Favourites</span>
                    </div>                        
                    <div className="sidebar-text">
                        <span>Playlists</span>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default main