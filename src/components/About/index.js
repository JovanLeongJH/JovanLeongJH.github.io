import { useEffect, useState } from 'react'
import {
  faCss3,
  faPython,
  faHtml5,
  faJsSquare,
  faReact,
  faCuttlefish,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          My name is Jovan Leong and I'm a very ambitious Computer Engineering 
          student studying at UCI. 
          </p>
          <p>
          I'm looking for an opportunity to work with the latest technologies and 
          challenge diverse projects and expand my horizons.
          </p>
          <p align="LEFT">
            I'm naturally curious and constantly working on improving my skills one 
            project at a time, learning new languages and skills along the way.
          </p>
          <p>
            If I were to define myself in a single sentence, that would be an avid
            learner, curious and ambitious, classical music enthusiast, japanese 
            culture fanatic and tech obsessed.
            
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCuttlefish} color="#00599C" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#F7C228" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About