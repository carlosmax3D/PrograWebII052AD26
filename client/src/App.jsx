import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio'
import NotExist from './NotExists'
import Clase_7 from './pages/Clase_7'
import { useState } from 'react'
import Clase_8 from './pages/Clase_8'
import Clase_9 from './pages/Clase_9'

function App() {
  const [user, setUser] = useState(null);
  const getUser = () => {return user};
  return (
    <Routes>
      <Route path='/' element={<Inicio fnUsuario={setUser} usuario={user}/>}/>
      <Route path='/clase7' element={<Clase_7 fnUsuario={setUser} usuario={user}/>} />
      <Route path='/clase8' element={<Clase_8 fnUsuario={setUser} usuario={user}/>} />
      <Route path='/clase9' element={<Clase_9 fnUsuario={setUser} usuario={user}/>} />
      <Route path='*' element={<NotExist fnUsuario={setUser} usuario={user}/>}/>
    </Routes>
  )
}

export default App
