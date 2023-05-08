import Slider from "react-slick";
import { Link } from "react-router-dom";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import icons
import {TfiAngleRight, TfiAngleLeft} from 'react-icons/tfi';

const Banner = ({data, height}) => {
    const settings = {
        customPaging: function(i) {
            return (
              <div className={"banner-dot"}>
              </div>
            );
          },
        dots: true,
        infinite: true,
        //   fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplaySpeed: 2000,
      };


  return (
    <div className="container banner" style={{height: height}}>
         <Slider {...settings} className="banner-main">
            {

                data.length !== 0 ?
                data.map(slide=>(
                    <Link to={'/'} key={slide.id} className="banner-slide" >
                            <div className="bg-banner">
                                <img src={slide.preview} alt="" />
                            </div>
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                    </Link>
                ))
                :
                <h1>no data</h1>
            }

        </Slider>
    </div>
  );
}

export default Banner;


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="banner-arrow banner-arrow-right"
        onClick={onClick}
      >
        <TfiAngleRight/>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div
        className="banner-arrow banner-arrow-left"
        onClick={onClick}
      >
        <TfiAngleLeft/>
      </div>
    );
  }
