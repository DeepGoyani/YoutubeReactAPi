import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Leftpanel from '../Components/Leftpanel.jsx'
import './Style.css'
import Navbar from '../Components/Searchbar.jsx'
import Main from '../Components/Videbar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main-container">
      <Leftpanel />
      <div className="content-container">
        <Navbar />
        <Main/>
      </div>
    </div>
  </StrictMode>
);



