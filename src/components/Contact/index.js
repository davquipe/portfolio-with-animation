import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bgq497m', 'template_ebv8kd7', refForm.current, 'Il1ZrtMNvGFndN8tK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't',' ','m', 'e']}
                        idx={15}
                    /> 
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='user_name' id="user_name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='user_email' id="user_email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' placeholder='Subject' name='user_subject' id="user_subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>

                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <div className='info-map'>
            David Condori,
            <br />
            Peru,
            <br />
            Martires 4 de Noviiembre, 42311 <br />
            San Anton <br />
            <span>davidcondori99@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker position={[44.96366, 19.61045]}>
                    <Popup>Davis lives here, come over for a cup of coffe :/</Popup>
                </Marker>
            </MapContainer>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Contact