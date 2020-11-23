import { connect } from 'react-redux'
import bg from '../../Assets/img/gallery/cv_bg.jpg'
const ActionSection = () => {
    return (
      <>
        <div
          className="online-cv cv-bg section-overly pt-90 pb-4"
          style={{ backgroundImage: `url(${bg})`}}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera1">Are you an HR organization?</p>
                  <p className="pera2">
                    Reach out to thousands of Employers, Get your agent a Job!
                  </p>
                  <a href="#" className="border-btn2 border-btn4 text-light">
                   Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionSection)
