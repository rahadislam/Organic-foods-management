import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">daraz </a></li>
                            <li><a href="#">evaly</a></li>
                            <li><a href="#">panda.bd</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Oraganic Foods</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Oraganic Food Ltd</h3>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">Oraganic Foods © 2022</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;