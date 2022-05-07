import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (

    <div className="app__social">
        <div>
            <a href='https://twitter.com/ranveersequeira'>
                <BsTwitter />
            </a>
        </div>
        <div>
            <a href='https://github.com/ranveersequeira'>
                <FaGithub />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/ranveersequeira/">
                <FaLinkedinIn />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/ranveersequeira/">
                <BsInstagram />
            </a>

        </div>
    </div>
);

export default SocialMedia;