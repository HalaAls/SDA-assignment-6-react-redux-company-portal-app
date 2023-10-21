import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Companies from './components/Companies'
import Home from './components/Home'
import Error from './components/Error'
import Navigation from './components/Navigation'
import SingleCompany from './components/SingleCompany'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/SingleCompany/:id" element={<SingleCompany />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
