import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Venha me conhecer</h5>
      <h2>Sobre mim</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experiência</h5>
            <small>Estagiário Junior</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projetos</h5>
            <small>3 Completos</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quos molestiae cupiditate, accusamus, perferendis ad eos natus deserunt itaque quasi esse quaerat nostrum asperiores officia voluptate repudiandae? Nostrum, nobis molestiae.
        </p>

        <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

      </div>
    </div>
    </section>
  )
}

export default About