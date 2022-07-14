 import { BsLinkedin } from 'react-icons/bs';
 import { GoMarkGithub } from 'react-icons/go';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      { <a href="https://www.linkedin.com/in/ariel-rivas-ferri-06b331217/" target="_blank" rel="noreferrer"><BsLinkedin /></a> }
      { <a href="https://github.com/ArielRivas" target="_blank" rel="noreferrer"><GoMarkGithub /></a> }
    </div>
  )
}

export default HeaderSocials