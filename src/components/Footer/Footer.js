import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p className={"footerText"}>&copy; {new Date().getFullYear()}
                <span style={{fontWeight: "bold"}}> Dependency-free carousel</span> by&nbsp;</p>
            <a href={"https://github.com/gaonita"}> Gaon Yang</a>
        </footer>
    );
};

export default Footer;