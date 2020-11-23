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
  className: 'img-responsive'
};
const BannerSection = () => {
  return (
    <div className="container-fluid">
      <Slider {...settings}>
        <div className="slider-area ">
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center w-100"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="container">
                <ScrollAnimation animateIn="fadeInLeft">
                  <div className="row">
                    <div className="col-xl-6 col-lg-9 col-md-10">
                      <div className="hero__caption">
                        <h1>Safe Community</h1>
                        <span>Sport Bet Agent</span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
                <div className="row">
                  <div className="col-xl-8">
                    <form action="#" className="search-box">
                      <div className="input-form">
                        <input
                          type="text"
                          placeholder="Job Tittle or keyword"
                        />
                      </div>
                      <div className="select-form">
                        <div className="select-itms">
                          <select name="select" id="select1">
                            <option value="">Location BD</option>
                            <option value="">Location PK</option>
                            <option value="">Location US</option>
                            <option value="">Location UK</option>
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
        <div className="slider-area ">
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center"
              style={{ backgroundImage: `url(${img_3})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <h1>Trustworthy Agency</h1>
                      <span>Meet thousands of HR trustworthy agency</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <form action="#" className="search-box">
                      <div className="input-form">
                        <input
                          type="text"
                          placeholder="Job Tittle or keyword"
                        />
                      </div>
                      <div className="select-form">
                        <div className="select-itms">
                          <select name="select" id="select1">
                            <option value="">Location BD</option>
                            <option value="">Location PK</option>
                            <option value="">Location US</option>
                            <option value="">Location UK</option>
                          </select>
                        </div>
                      </div>
                      <div className="search-form">
                        <a href="#">Find job</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-area ">
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center"
              style={{ backgroundImage: `url(${img_2})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-9 col-md-10">
                    <div className="hero__caption float-right">
                      <h1>We Train Them</h1>
                      <span>You hire them</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <form action="#" className="search-box">
                      <div className="input-form">
                        <input
                          type="text"
                          placeholder="Job Tittle or keyword"
                        />
                      </div>
                      <div className="select-form">
                        <div className="select-itms">
                          <select name="select" id="select1">
                            <option value="">Location BD</option>
                            <option value="">Location PK</option>
                            <option value="">Location US</option>
                            <option value="">Location UK</option>
                          </select>
                        </div>
                      </div>
                      <div className="search-form">
                        <a href="#">Find job</a>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannerSection);
