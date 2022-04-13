import React, {useState, useRef, useEffect} from 'react';
import { Button } from './Button';
import './css/HomeIntro.css';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'


function HomeIntro(props) {

    const [current, setCurrent] = useState(0);

    const length = props.slides.length;

    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () =>{
            setCurrent(current => (current === length -1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)


        return function (){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);

    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    }



  return (
    <>
    <section className='propertySection'>
        <div className='propertyWrapper'>
            {props.slides.map((slide, index) =>{
                return(
                    <div className="propertySlide" key={index}>
                    {index === current && (
                        <div className="propertySlider">
                            <img className="propertyImage" src={slide.image} alt={slide.alt}>
                            </img>

                            <div className="propertyContent">
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button to={slide.path} buttonStyle="btn--introView">
                                    {slide.label}
                                    <IoMdArrowRoundForward className="arrow"></IoMdArrowRoundForward>
                                </Button>
                            </div>
                        </div>
                    )}

                    </div>
         
                )
            })}
            <div className="sliderButtons">
                <IoArrowBack onClick={prevSlide} className="arrowButtons"></IoArrowBack>
                <IoArrowForward onClick={nextSlide} className="arrowButtons"></IoArrowForward>
            </div>
        </div>
    </section>
    </>
  );
}

export default HomeIntro;