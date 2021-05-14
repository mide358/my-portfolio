import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
   <div className="footer">

<div className="foot">
<a href="https://github.com/mide358" className="github foot"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
<a href="https://www.linkedin.com/in/iyimide-adegunloye/" className="linkedin foot"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>

<a href="https://www.instagram.com/cuteiyimi" className="instagram foot"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
<a href="mailto:iyimide.adegunloye@gmail.com" className="email foot"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
<a href="https://twitter.com/cuteiyimi" className="twitter foot"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
</div>

<div className="foot copyright"  >
 <p>Iyimide Adegunloye <FontAwesomeIcon icon={faCopyright} size="1x"/> 2021</p>
 </div>



    </div>
  );
}

export default Footer;