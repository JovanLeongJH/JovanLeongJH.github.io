import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray =['o', 'v', 'a', 'n', ',']
    const jobArray =['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g', ' ',
                     'S', 't', 'u', 'd', 'e', 'n', 't']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    },[])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span>
                    
                    <br /> 
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={20}
                    />
                </h1>
                <h2>
                    Fullstack Developer
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo>
                
            </Logo>
        
        </div>
    );
}

export default Home