import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperineceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => {
  
    const slideRef=useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };

  const slideRight=()=>{
    slideRef.current.slickNext();
  }
  const slideLeft=()=>{
    slideRef.current.slickPrev();
  }


  return (
   <section className='experience-container'>
    <h5>Work Experience</h5>
    <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
            <span class="materials-symbols-outlined"> ᐅ</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
            <span class="materials-symbols-outlined">ᐊ</span>
        </div>
        <Slider ref={slideRef} {...settings}>
        {WORK_EXPERIENCE.map((item)=>(
            <ExperineceCard key={item.title} details={item} />
        ))}
        </Slider>
    </div>
   </section>
  )
}

export default WorkExperience
