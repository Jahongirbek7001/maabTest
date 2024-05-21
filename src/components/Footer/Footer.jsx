import "./Footer.css"
import footerLogo from "../../photo/footer-logo.png"
import footerLinkedin from '../../photo/footerLinkedin.png'
import footerInstagram from '../../photo/footerInstagram.png'
import footerTelegram from '../../photo/footerTelegram.png'
import footerYoutube from '../../photo/footerYoutube.png'
import footerFacebook from '../../photo/footerFacebook.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="footerDiv">
                    <div className="first">
                        <section className="logoSite">
                            <img src={footerLogo} alt="logoSite" />
                        </section>
                        <section>
                            <span>+998 97 783 90 45</span>
                        </section>
                        <section>
                            <ul>
                                <li className="logoSocial">
                                    <img src={footerLinkedin} alt="" />
                                </li>
                                <li className="logoSocial">
                                    <img src={footerInstagram} alt="" />
                                </li>
                                <li className="logoSocial">
                                    <img src={footerTelegram} alt="" />
                                </li>
                                <li className="logoSocial">
                                    <img src={footerYoutube} alt="" />
                                </li>
                                <li className="logoSocial">
                                    <img src={footerFacebook} alt="" />
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="second">
                        <ul>
                            <li>KURSLARIMIZ</li>
                            <li>Data analytics</li>
                            <li>Data engineer</li>
                            <li>Could data engineering</li>
                        </ul>
                    </div>
                    <div className="third">
                        <ul>
                            <li>MENYULAR</li>
                            <li>Grantlar</li>
                            <li>Sertifikatlarimiz</li>
                            <li>Ustozlar</li>
                        </ul>
                    </div>
                    <div className="fourth">
                        <ul>
                            <li>Biz bilan bog'laning</li>
                            <li>Toshkent, Mirabad district, Oybek, 18/1 Atrium </li>
                            <li>info@maab.uz</li>
                            <li>+998 97 783 90 45</li>
                        </ul>
                    </div>
                </div>
                <section className="footerSection">
                    <div>
                        <p>© 2024 MAAB INNOVATION</p>
                    </div>
                    <div>
                        <p>Barcha huquqlar himoyalangan</p>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;