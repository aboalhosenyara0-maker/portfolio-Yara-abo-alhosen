import './Footer.css'
import instagram from '../../assets/instgram.png'
import facebook from '../../assets/facebook.png'

import telegram from '../../assets/telegram.png'

const Footer = () => {
    return (
        <footer className='footer'>
                    <p className='date'>@ 2024. All Rights Reserved</p>
                    <p>Develpoment by Yara</p>
                    <div className="applecation">
                        <div>
                            <a href="https://www.facebook.com/share/1THkNo65Jr/">
                                <img src={facebook} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/yaraaboalhosen?igsh=MXFnbHg1aXRoNXFjZg==">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                        <div >
                            <a href="https://t.me/Yara_aboalhosen">
                                <img src={telegram} alt="" />
                            </a>
                        </div>
                    </div>
                </footer>
    )
}

export default Footer
