import React from 'react'
import './Hero.css'
import dp from '../../Assets/dp1.png'
import rea from '../../Assets/react-logo.png'
import js from '../../Assets/js-logo.png'
import css from '../../Assets/css-logo.png'
import node from '../../Assets/node-logo.png'
import pr from '../../Assets/pr.png'
import ps from '../../Assets/ps.png'
import lr from '../../Assets/lr.png'
const Hero = () => {
  return (
    <section className="hero-container">
        <div className='hero-content'>
            <h2>
            Building Digital Experience That Inspire</h2>
            <p>
                Passionate Grapgic Designer | Transforming ideas into Seamsless and Visually Stunning Solutions
            </p>
        </div>
        <div className='hero-img'>
            <div>
            <div className='tech-icon'>
                <img src={rea} alt='' style={{height:"100px"}}/>
            </div>
            <img src={dp} alt='' />
            </div>

            <div>
                <div className='tech-icon'>
               < img src={ps} alt='' style={{height:"100px"}}/>
                </div>
                <div className='tech-icon'>
               < img src={pr} alt='' style={{height:"100px"}} />
                </div>
                <div className='tech-icon'>
               < img src={lr} alt='' style={{height:"100px"}}/>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Hero
