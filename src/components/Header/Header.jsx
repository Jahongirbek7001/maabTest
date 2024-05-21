import telegram from "../../photo/telegram.png";
import facebook from "../../photo/facebook.png";
import instagram from "../../photo/instagram.png";
import linkedin from "../../photo/linkedin.png";
import logoSite from "../../photo/logo-site.png"
import phone from "../../photo/icons8-phone-50.png"
import "./Header.css";

function Header() {
    return (
        <>
            <header>
                <div className="headerTop">
                    <div  className="headerTopContent">
                        <ul>
                            <li>
                                <a href=".">
                                    <img src={telegram} alt="telegram" className="logoSocial" />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <img src={instagram} alt="instagram" className="logoSocial" />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <img src={linkedin} alt="linkedin" className="logoSocial" />
                                </a>
                            </li>
                            <li>
                                <a href=".">
                                    <img src={facebook} alt="facebook" className="logoSocial" />
                                </a>
                            </li>
                        </ul>
                        <div className="verticalSlesh">|</div>
                        <div>
                            <form action="">
                                <select>
                                    <option value="">Uzbek</option>
                                    <option value="">English</option>
                                    <option value="">Russian</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="headerBottom">
                    <div className="logoSite">
                        <img src={logoSite} alt="logoSite" />
                    </div>
                    <div className="aloqa">
                        <section><span>+998 97 783 90 45</span></section>
                        <section className="aloqaBtn">
                            <span>Aloqada bo'ling</span>
                            <img src={phone} alt="phone" />
                        </section>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;