import React, { useState } from "react";
import bolsaNikeGym from '../static/bolsa nike gym club.jpeg';
import camisaPalmeiras from '../static/camisa-palmeiras.jpeg';
import tenisInfantilPuma from '../static/tenis-infantil-puma.jpeg';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            imagem: "../static/bolsa nike gym club.jpeg",
            descrição: "camisaPalmeiras",
        },
        {
            imagem: { bolsaNikeGym },
            descrição: "bolsa nike gym club",
        },
        {
            imagem: { tenisInfantilPuma },
            descrição: "TENIS RS-X KIDS X PAW PATROL",
        },
    ];

    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="carousel">
            <div className="carousel__slides">
                {slides.map((slide, index) => (
                    <div
                        className={`carousel__slide ${index === currentSlide ? "carousel__slide--active" : ""
                            }`}
                        key={index}
                    >
                        <img src={slide.imagem} alt={slide.descrição} />
                        <p>{slide.descrição}</p>
                    </div>
                ))}
            </div>
            <div className="carousel__controls">
                <button onClick={prevSlide}>Anterior</button>
                <button onClick={nextSlide}>Próximo</button>
            </div>
            <div className="carousel__indicators">
                {slides.map((slide, index) => (
                    <div
                        className={`carousel__indicator ${index === currentSlide ? "carousel__indicator--active" : ""
                            }`}
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
