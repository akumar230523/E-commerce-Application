import '../style/Footer.css';

function Footer() {
    
    return (
        <footer>
            <div className='link'> 
                <a href="https://www.linkedin.com/in/amit-kumar-270523-/" target='_blank'> <i className="fa-brands fa-linkedin-in"></i> LinkedIn </a> 
                <a href="https://github.com/akumar230523?tab=repositories" target='_blank'> <i className="fa-brands fa-square-github "></i> GitHub </a>
            </div>
            <p> &copy; Copyright 2025 ShoppyGlobe <br /> ( All Rights Reserved ) </p>
        </footer>
    );
}

export default Footer;