import React from 'react';
import logo from '../../components/assets/logo.png';
import {BsFacebook,BsLinkedin,BsTwitter,BsYoutube} from 'react-icons/bs';
import { ExternalLink } from 'react-external-link';
const Footer = () => {
    return (
        <footer data-theme='night' className="footer footer-center p-10  text-light-content">
            <div>
                 <div className="flex-1 px-2 mx-2 flex flex-col justify-center items-center place-items-center">
                    <img src={logo} alt="" className='mx-1' />
                     <h2 className='uppercase font-bold text-xl text-purple-900'>food recipes</h2>
                </div>
                <p className="font-bold">
                   Providing reliable food recipes since 2023
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                   <ExternalLink href='https://www.facebook.com/mubarak.parvej'><BsFacebook></BsFacebook></ExternalLink> 
                   <ExternalLink href='https://www.linkedin.com/in/md-mubarak-hossain-662113201/'><BsLinkedin></BsLinkedin></ExternalLink> 
                   <ExternalLink href='https://twitter.com/Mubarak6632'><BsTwitter></BsTwitter></ExternalLink>  
                   <ExternalLink href='https://www.youtube.com/channel/UCySCEvl9nmFyAIXgUQfD5KQ'><BsYoutube></BsYoutube></ExternalLink>  
                </div>
            </div>
        </footer>
    );
};

export default Footer;