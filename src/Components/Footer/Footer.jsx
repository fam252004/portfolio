import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const contactLinks = [
    { href: "mailto:fahim200425@gmail.com", text: "fahim200425@gmail.com", Icon: MdOutlineEmail },
    { href: "https://www.linkedin.com/in/mohammed-fahim-32212b2ba", text: "LinkedIn", Icon: FaLinkedin },
    { href: "https://github.com/fam252004", text: "GitHub", Icon: FaGithub },
    { href: "https://leetcode.com/u/Fahim200425/", text: "LeetCode", Icon: SiLeetcode },
    { href: "https://www.geeksforgeeks.org/user/mdfahimsdqx/", text: "GeeksforGeeks", Icon: SiGeeksforgeeks }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="Footer" className="bg-[#171d32] text-white pt-1">
            <div className="flex flex-col md:flex-row justify-around items-center text-center md:text-left p-10 md:p-12 gap-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
                    <p className="text-md md:text-lg text-gray-300 mt-1">Feel free to reach out!</p>
                </div>

                <ul className="text-md space-y-3">
                    {contactLinks.map(({ href, text, Icon }, index) => (
                        <li key={index}>
                            <a 
                                href={href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex gap-3 items-center hover:text-cyan-400 transition-colors duration-300"
                            >
                                <Icon size={24} />
                                <span>{text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="text-center py-4 mt-8 bg-black bg-opacity-30">
                <p className="text-sm text-gray-400">
                    &copy; {currentYear} Mohammed Fahim. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;