import './Carousel.css'

function Carousel() {
      return (
  
        <section className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            <li id="carousel__slide1" tabIndex={0} className="carousel__slide">
              <div className="carousel__snapper">
              <img src="https://img.freepik.com/photos-premium/sucettes-colorees-bonbons-ronds-differentes-couleurs-vue-dessus_183587-225.jpg?w=2000" />
                <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
                <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
              </div>
            </li>
            <li id="carousel__slide2" tabIndex={0} className="carousel__slide">
              <div className="carousel__snapper" />
              <img src="https://img-31.ccm2.net/poCc6NpUDYUeX4AdcS2jv-qddVQ=/1240x/smart/6a33e7177ae14f7284bc34d8eeb0a66f/ccmcms-hugo/10601770.jpg" />
              <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
              <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
            </li>
            <li id="carousel__slide3" tabIndex={0} className="carousel__slide">
              <div className="carousel__snapper" />
              <img src="https://www.bonbonz.be/2583-large_default/bonbons-haribo-dragibus.jpg" />
              <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
              <a href="#carousel__slide4" className="carousel__next">Go to next slide</a>
            </li>
            <li id="carousel__slide4" tabIndex={0} className="carousel__slide">
              <div className="carousel__snapper" />
              <img src="https://i0.wp.com/bonbonchezsoi.com/wp-content/uploads/bonbon-chez-soi_plateau-de-noel-bonbons.jpg?fit=828%2C751&ssl=1" />
              <a href="#carousel__slide3" className="carousel__prev">Go to previous slide</a>
              <a href="#carousel__slide1" className="carousel__next">Go to first slide</a>
            </li>
          </ol>
          <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
              <li className="carousel__navigation-item">
                <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a>
              </li>
            </ol>
          </aside>
        </section>
      );
    }
 export default Carousel