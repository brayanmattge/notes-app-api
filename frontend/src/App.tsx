import './App.css'
import { Route, Routes } from 'react-router'
import MyNotes from './pages/MyNotes'

function App() {
  return (
    <Routes>
      <Route index element={<MyNotes></MyNotes>}></Route>
    </Routes>
  )
}

export default App
