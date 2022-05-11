import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'



const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/leonardo-betetto-50672b10b/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/lmbbetetto" target="_blank"><FaGithub/></a>
        </div>
    )
}

export default HeaderSocials