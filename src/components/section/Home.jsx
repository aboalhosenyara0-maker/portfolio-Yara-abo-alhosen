import './Home.css'
import myPhoto from '../../assets/my-photo.png'
import CV from '../../assets/YARA Abo Alhosen.pdf'

const Home = ({des}) => {
    return (
        <section id="home">
            <div className='description'>
                
                <div className="blur"></div>
                <h1><span>HEY!</span>I’m Yara,  <br/> Frontend Developer</h1>
                <p>{des}</p>
                <a href={CV} download>
                Download CV
                </a>
            </div>
            <div className="img">
                <img src={myPhoto} alt="" />
                <div className='img1'/>
                <div className='img2'/>
                <div className='img3'/>
                <div className='img4' />
                <div className='img5' />
                <div className='line'>
                    <div className="dot"/>
                    <div className="dot2"/>
                    <div className="dot3"/>
                    <div className="dot4"/>
                </div>
                <div className="dot">
                </div>
                <div className="dot"/>
                <div className="dot2"/>
            </div>
        </section>
    )
}

export default Home
