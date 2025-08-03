//Styles
import './styles/styles.sass';

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

import {BrowserRouter as Router} from 'react-router-dom'
import RoutesConfig from './routes/RoutesConfig'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <RoutesConfig />
        <Footer />
      </Router>
    </>
  )
}

export default App
