import React from "react"
import { Link } from "gatsby"

//images
import pinterestIcon from "../../../images/pinterestIcon.png"
import facebookIcon from "../../../images/facebookIcon.png"
import twitterIcon from "../../../images/twitterIcon.png"
import instagramIcon from "../../../images/instagramIcon.png"

import footerStyles from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContent}>
                <nav>
                    <ul>
                        <li><Link to="/about/">About Us</Link></li>
                        <li>
                            <Link to="/properties/">Properties</Link>
                        </li>

                        <li>
                            <Link to="/Agents/">Agents</Link>
                        </li>

                        <li>
                            <Link to="/news/">News</Link>
                        </li>

                        <li>
                            <Link to="/blog/">blog</Link>
                        </li>

                        <li>
                            <Link to="/contact/"> Contact Us</Link>
                        </li>
                    </ul>
                </nav>

                <div className={footerStyles.contactInfo}>
                    <h3>Our Contact Info</h3>
                    <address>
                        <span>43 Tintinbatu Street</span>
                        <span>Busumbala Village</span>
                        <span>West Coast Region</span>
                        <span>The Gambia</span>
                    </address>
                    <p>Phone: +220 345-567-566</p>
                    <p>Email: example@virtimmo.sn</p>
                </div>

                <div className={footerStyles.socials}>
                    <h3>Follow Us</h3>
                    <a href="#!">
                        <img src={facebookIcon} alt="facebook icon" /><span>Facebook</span></a>
                    <a href="#!"><img src={instagramIcon} alt="instagram icon" /><span>Instagram</span></a>
                    <a href="#!"><img src={twitterIcon} alt="twitter icon" /><span>Twitter</span></a>
                    <a href="#!"><img src={pinterestIcon} alt="pinterest icon" /><span>Pinterest</span></a>
                </div>
            </div>
            <div className={footerStyles.copyright}>
                <small>
                    &copy; VIRTIMMO 2019.
               </small>
            </div>
        </footer>
    )
}

export default Footer