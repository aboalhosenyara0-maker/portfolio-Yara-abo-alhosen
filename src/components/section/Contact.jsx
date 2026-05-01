import './Contact.css'
import phone from '../../assets/phone.png'
import masseg from '../../assets/masseg.png'
import location from '../../assets/location.png'

const Contact = () => {
    return (
        <section id="Contact">
            <p className='word'>Contact</p>
            <h1>Let’s Discuss Your <span>Project</span></h1>
            <div className="my-information">
                <div className="social">
                    <div className="mobil">
                        <div className="icon">
                            <img src={phone} alt="" />
                        </div>
                        <div className="call-me">
                            <p className='call'>Call me</p>
                            <p>0991379803</p>
                        </div>
                    </div>
                    <div className="mobil">
                        <div className="icon">
                            <img src={masseg} alt="" />
                        </div>
                        <div className="call-me">
                            <p className='call'>Email me</p>
                            <p>aboalhosenyara0@gmail.com</p>
                        </div>
                    </div>
                    <div className="mobil">
                        <div className="icon">
                            <img src={location} alt="" />
                        </div>
                        <div className="call-me">
                            <p className='call'>Address</p>
                            <p>Al-Swaida,syria</p>
                        </div>
                    </div>
                </div>
                <div className="information">
                    <form action="">
                        <div>
                            <input type="text" placeholder='Full name'/>
                            <input type="text" placeholder='Your email'/>
                        </div>
                        <input type="text" placeholder='Phone number' />
                        <textarea name="" id="" placeholder='Message'></textarea>
                        <input type="submit" value="Send Message" className='submit'/>
                    </form>
                </div>
                </div>
                <div className="line"/>
                
        </section>
    )
}

export default Contact
