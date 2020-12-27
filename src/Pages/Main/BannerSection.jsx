import { connect } from "react-redux";
import img from "../../Assets/img/hero/1_hero.png";
import img_2 from "../../Assets/img/hero/2_hero.png";
import img_3 from "../../Assets/img/hero/3_hero.png";
import ScrollAnimation from "react-animate-on-scroll";

import Slider from "react-slick";
var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "img-responsive",
};
const BannerSection = (props) => {
  return (
    <div className="container-fluid">
      <Slider {...settings}>
        <div className="slider-area ">
          <div className="slider-active">
            <div
              className="single-slider img-fluid slider-height d-flex align-items-center w-100"
              style={{
                backgroundImage: `url(${img_2})`,
                maxWidth: "100%",
                height: "auto",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-8">
                    <div className="caption">
                      <p>Nigeria's Online Safe Sport bet community</p>
                    </div>
                    <form action="#" className="search-box bg-light">
                      <div className="select-form w-100">
                        <div className="select-itms">
                          <select name="select" id="select1">
                            {props.states.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="search-form">
                        <a href="#">Find Agents</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  states: state.general.States,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannerSection);
