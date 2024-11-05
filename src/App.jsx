import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <section className='main flex'>
        <div className='sidebarWrapper w-[15%] '>
          <Sidebar />
        </div>

        <div className='content_Right w-[85%] px-3'>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
          </Routes>
        </div>

      </section>
    </BrowserRouter>
  )
}

export default App
