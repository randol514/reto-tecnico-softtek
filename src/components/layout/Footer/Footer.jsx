import logotipo from '../../../assets/images/common/Logo-footer.svg'

import {Link} from 'react-router-dom'

const Footer = () =>{
  const currentYear = new Date().getFullYear();
  return(
    <footer className="site-footer">
      <div className="site-footer__container wrapper-container">
        <div className="site-footer__content">
          <Link to="/" className="site-footer__logotipo">
            <img src={logotipo} alt="RIMAC Seguros y Reaseguros" className="header__logotipo-img"/>
          </Link>
          <div className="site-footer__copyright">
            © {currentYear} RIMAC Seguros y Reaseguros.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer