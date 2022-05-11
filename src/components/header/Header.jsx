import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Leonardo Betetto</h1>
        <h5 className="text-light">Desenvolvedor front-end</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Role para baixo</a>
      </div>
    </header>
  )
}

export default Header