import { useState } from "react"
import Index from "./routes"
import { userContext } from "./hooks/context";
import axios from 'axios';

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false)
  const [user, setUser] = useState({})


    //cors policy setup
    // axios.defaults.baseURL = 'https://auth-project-server.vercel.app';
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.withCredentials = true;

  return (
    <>
      <userContext.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }} >
        <Index />
      </userContext.Provider >
    </>
  )
}

export default App
