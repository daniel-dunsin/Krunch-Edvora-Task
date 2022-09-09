import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Home, Users, SharedLayout, SingleUserPage} from './components';
const theme= {
  colors: {
    text: '#333',
  }
}
function App() {
  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<SharedLayout />} >
          <Route path='/orders' element={<Users />} />
          <Route path='/user/:id' element={<SingleUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}

export default App;
