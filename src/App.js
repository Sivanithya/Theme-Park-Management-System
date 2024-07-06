import React from 'react';
import logo from './fb.png';
import cycle from './rc.png';
import './App.css';
import Car from './car';
function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Convent Foundation</title>
        <link rel="stylesheet" href="./App.css" />
        <link rel="stylesheet" href="./res.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <div className="fixed-top">
          <header>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#home">
                          DisneyLand ThemePark               
                </a> 
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#home">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Menu.js">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        Payment
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#Association">
                        Association
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          <div className="cont-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">  
                  <p>
                    Contact No : <a href="tel: +91 9361345894">9361345894</a>
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="social">
                    <a href="#">
                      <img src={logo} alt="facebook" class="pm"/>
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2__NOQ1ZLsjPL_IqgD9fP5jNSbIIbHugRg&usqp=CAU" alt="instagram" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanFxQQbxmCbCuzFHrlXGS0nogyFrPVpdrkWCenFYBXGZwPoUdsEnEDb35OJiVu3gQB5Y&usqp=CAU" alt="youtube" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrefHFmS_OINItmSqPWM0V5J846e_rFuxNGPt42UZ1G3P3QVhzIhPAmGYEqxImqlhs_ag&usqp=CAU" alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png?f=webp&w=256" alt="gmail" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-sec" id="home">
            <div className="home-content">
              <div className="row">
                <div className="col-lg-6 align-item-center">
                  <div className="home-info">
                    <h2>
                             Welcome To <span> DisneyLand ThemePark </span>
                    </h2>
                    <p>
                      Hope you lover our ThemePark Suroundings and games.
                    </p>
                    <div className="buttons">
                      <a href="#contact" className="btn1">
                        To know more.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-first order-lg-last">
                  <div className="img-sec">
                    <img
                      src="https://www.breakaway.ie/wp-content/uploads/2020/07/disneyland-park-logo.png"                      
                      alt="image"/>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="don-sec" id="donation">
          <div className="container">
            <div className="heading">
              <h2>Service Info</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.sI_YpJfVmjR9bNSuoWJEIAHaFj&pid=Api&P=0&h=180"
                    alt="img"
                  />
                  <h3>WaterSlide</h3>
                  <a href="#contact" className="btn1">
                    Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                   src="https://tse2.mm.bing.net/th?id=OIP.PDnFVUtRxh_bpEZ6zOS5uwHaEK&pid=Api&P=0&h=180"
                   alt="img"
                  /><br />
                  <h3>SeaWave</h3><br />
                  <a href="#contact" className="btn1">
                    Know More
                  </a><br />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                  src="https://tse2.mm.bing.net/th?id=OIP.I20xnKNGruOb9TYPaZSmgAHaE5&pid=Api&P=0&h=180"
                    alt="img"
                  /><br />
                  <h3>bungee jumping</h3><br></br>
                  <a href="#contact" className="btn1">
                    Know More
                  </a><br/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://www.intamin.com/wp-content/uploads/2019/09/2018-09-06-12-23-41-D850_JAY_0376-0382-Large-1170x658.jpg" alt="img" />
                  <h3>RollerCoaster</h3><br></br>
                  <a href="#contact" className="btn1">
                      Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.se0u8yKSPDJCpZBmcbt6MwHaEK&pid=Api&P=0&h=180" alt="img" />
                  <h3>Dry Games</h3><br></br>
                  <a href="#contact" className="btn1">
                    Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://tse2.mm.bing.net/th?id=OIP.cMv4bKi5bbl-mtsAoU7hPwHaE6&pid=Api&P=0&h=180" alt="img" />
                  <h3>Water Games</h3><br></br>
                
                  <a href="#contact" className="btn1">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
       < div className="container"><Car/>
       </div>
        <section className="mission" id="mission-id">
          <div className="container">
            <div className="heading">
              <h2>About US</h2>
              <p>
              <span>Our Theme park is a thrilling and immersive entertainment destination that captivates visitors with a carefully curated blend of rides, attractions, and experiences all centered around a specific theme or concept. These whimsical wonderlands offer a diverse array of adventures, from heart-pounding roller coasters and enchanting fairy tale worlds to water slides and live entertainment shows. Theme parks are designed to transport guests to fantastical realms, sparking joy, excitement, and a sense of wonder in people of all ages. Whether it's the magical castles of a fairy tale kingdom, the adrenaline rush of a daring coaster, or the laughter of a family enjoying a day together, theme parks create unforgettable memories and provide a brief escape from the everyday world.
              </span></p>
            </div>
            <div className="gallery-sec">
              <div className="container">
                <div className="image-container">
                  <div className="image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.2s1aQIOX57RjM7U0sFkhZwHaE9&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.9OZkwWGbVVB4EhKxats1CwHaE8&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.9CbPgA9OVKmxMtCZKJtO0wHaD0&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.cXrFgG59Fzg7K6UM1rsK5QHaC9&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.xHXPWgZnbYqsoyoXRM2rNwHaE5&pid=Api&P=0&h=180" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.z0SDsuVJ3m4RulxPLYk8wQHaE2&pid=Api&P=0&h=180" alt="img" />
                  </div>
                </div>
              </div>
              <div className="pop-image">
                <span>&times;</span>
                <img src="img/gallery/1.jpg" alt="gallery-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-sec" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 about-img">
          
              </div>
              <div className="col-lg-8 order-first order-lg-last">
                <div className="heading">
                  <h2>Transactions</h2>
                </div>
                <p>
                  Online Payment </p>
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/04/06/968288-top-upi-apps.jpg"></img>     <p>
                 Cash
                </p>
                <img src="https://www.clipartmax.com/png/middle/286-2866651_on-the-spot-cash-logo-digitizing-emblem.png"></img>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="heading">
              <h2>Helpline </h2>
              <p>
                Fill the below Details required, our guide will takecare of it..!! <span></span>{' '}
                or <span>Issue</span> it from your place.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-5">
                <form className="contact-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile No."
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="TotalMembers"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <select
                                name="donation"
                                id="donation"
                                className="form-control">
                                <option value="">
                                  Payement Type
                                </option>
                                <option value="app">Gpay/Phonepe/Paytm</option>
                                <option value="card">Debit/credit cards</option>
                                <option value="Inbank">InternetBanking</option>
                                <option value="offline">Spot Payments</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address Info"
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="text"
                              id=""
                              cols="90"
                              rows="1"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <a href="#" className="btn1 mt-5">
                            Submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <section className="Association-id" id="Association">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="col-one">
                  <h4>DisneyLand ThemePark </h4>
                  <p>
                    Address : disneylandthemepark,Erode-CoimbatoreHighway,Nasiyanur,Erode.
                    {' '}
                  </p>
                  <p>
                    Contact No :{' '}
                    <a href="Ph: +91 9361345894">9361345894</a>
                  </p>
                  <p>Email : <a href="mailto:foundation@code.com">disneylandthemepark@gmail.com</a></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-two">
                  <h4>Link</h4>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#donation">Service Info</a>
                    </li>
                    <li>
                      <a href="#mission-id">About US</a>
                    </li>
                    <li>
                      <a href="#about">Trasaction</a>
                    </li>
                    <li>
                      <a href="#contact">Helpline</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-one">
                  <h4>Social Media</h4>
                  <div className="social">
                    <a href="#">
                      <img src="https://img.freepik.com/premium-vector/vinnitsyaukrainejanuary-24-2021facebook-vector-image-flat-icon-with-letter-f-blue-color-button-with-letter-isolated-white-background_736051-65.jpg" alt="facebook" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2__NOQ1ZLsjPL_IqgD9fP5jNSbIIbHugRg&usqp=CAU" alt="inatagram" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanFxQQbxmCbCuzFHrlXGS0nogyFrPVpdrkWCenFYBXGZwPoUdsEnEDb35OJiVu3gQB5Y&usqp=CAU" alt="youtube" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrefHFmS_OINItmSqPWM0V5J846e_rFuxNGPt42UZ1G3P3QVhzIhPAmGYEqxImqlhs_ag&usqp=CAU" alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png?f=webp&w=256" alt="gmail" />
                    </a>
                  </div>
                  <p>Copyright &copy; 2023 | All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
          </section>
        </footer>

        <script src="js/script.js"></script>
      </body>
    </html>
  );
}

export default App;


