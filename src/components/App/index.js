import React from 'react';
import heroBg from './assets/img/hero-bg.jpg'; 

function App() {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="index.html"></a></h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#blog">Blog</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title mb-4">I am Marjean Claude</h1>
              <p className="hero-subtitle"><span className="typed" data-typed-items="developer front-End, Developer Back-End, Multimedia Content Creator"></span></p>
            </div>
          </div>
        </div>
      </div>

      <main id="main">
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img src="assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p><span className="title-s">Name: </span> <span>ANDRIAMAHATRADRAIBE</span></p>
                            <p><span className="title-s">Last Name: </span> <span>Marjean Claude</span></p>
                            <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="more-info">
                        <ul className="list-ico">
                          <li><span className="bi bi-geo-alt"></span> Madagascar</li>
                          <li><span className="bi bi-phone"></span>+261 34 50 488 88</li>
                          <li><span className="bi bi-envelope"></span>marjean.8888@gmail.com</li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li><a href=""><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                          <li><a href=""><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="skill-mf">
                        <p className="title-s">Skill</p>
                        <span><b>Programming languages</b></span><br />
                        <span>PHP</span><br />
                        <span>Javascript</span>
                        <hr />
                        <span><b>Web technologies</b></span><br />
                        <span>HTML</span><br />
                        <span>CSS</span><br />
                        <span>JQuery</span><br />
                        <span>React JS</span><br />
                        <span>D3 JS</span><br />
                        <span>Symfony</span><br />
                        <span>Code Igniter</span>
                        <hr />
                        <span><b>Design methods</b></span><br />
                        <span>2TUP</span><br />
                        <hr />
                        <span><b>Modeling language</b></span><br />
                        <span>UML</span>
                        <hr />
                        <span><b>Modeling language</b></span><br />
                        <span>UML</span>
                        <hr />
                        <span><b>versioning system</b></span><br />
                        <span>Git</span>
                        <hr />
                        <span><b>Database management</b></span><br />
                        <span>MySQL</span>
                        <hr />
                        <span><b>Graphics software</b></span><br />
                        <span>Adobe Photoshop</span><br />
                        <span>Adobe Premiere Pro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-mf pt-5 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Services
                  </h3>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-display"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Front-End Web Development</h2>
                    <p className="s-description text-center">
                      Full Stack Web Developer, specializing in Front-End, proficient in HTML, CSS, JavaScript, React JS, Angular JS, D3JS. Creates captivating interfaces, delivering an exceptional user experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-server"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">BACK-END WEB DEVELOPMENT</h2>
                    <p className="s-description text-center">
                      Experienced Full Stack web developer specializing in Back-End development, with expertise in PHP, CodeIgniter, Symfony, for crafting robust Back-End systems for seamless web applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-camera"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">PHOTOGRAPHER</h2>
                    <p className="s-description text-center">
                      Photographer and Videographer with expertise in video shooting, editing, photo retouching, and the creation of compelling advertising materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Blog
                  </h3>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <a href="blog-single.html"><img src="assets/img/post-1.jpg" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Travel</h6>
                      </div>
                    </div>
                    <h3 className="card-title"><a href="blog-single.html">Coming soon about Travel</a></h3>
                    <p className="card-description">
                      Coming soon
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                        <span className="author">Claude Marjean</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <a href="blog-single.html"><img src="assets/img/post-2.jpg" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Web Design</h6>
                      </div>
                    </div>
                    <h3 className="card-title"><a href="https://marvel-quiz-b896b.web.app/">Innovative React Web App</a></h3>
                    <p className="card-description">
                      Explore my innovative React project by clicking on this link. Dive into an interactive web application designed to deliver an exceptional user experience, showcasing my Front-End development skills.
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                        <span className="author">Claude Marjean</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        {/* ... Le reste du contenu ... */}
      </footer>

      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  );
}

export default App;
