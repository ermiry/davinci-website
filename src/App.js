function App() {
  return (
    <div className="App">
      {/* <!-- Hero section --> */}
      <section id="hero">
        <div class="container">
          <div class="left">
            {/* <p class="subheading">I'm AMY</p> */}
            <h2 class="heading">
              <div class="wrapper"><span>Leonardo</span></div>
              <div class="wrapper"><span>Da Vinci</span></div>
            </h2>
            <p class="desc">
            Leonardo is among the greatest painters in the history of art and is often credited as the founder of the High Renaissance. Despite having many lost works and less than 25 attributed major works—including numerous unfinished works—he created some of the most influential paintings in Western art.
            </p>
            
          </div>
          <div class="right">
            <img className="img-fluid" src={ process.env.PUBLIC_URL + "/images/main.jpg" } />
          </div>
        </div>
      </section>

      {/* <!-- stats Section --> */}
      <section id="stats">
        <div class="container">
          <h2 class="section-heading" data-outline="Stats">Stats</h2>
          <div class="all-items">
            <div class="item">
              <h2 class="number">240+</h2>
              <h3 class="stats-sub-heading">Detailed drawings</h3>
              <p>
              Leonardo's anatomical drawings include many studies of the human skeleton and its parts, and of muscles and sinews.
              </p>
            </div>
            <div class="item">
              <h2 class="number">5000+</h2>
              <h3 class="stats-sub-heading">Pages</h3>
              <p>Leonardo studied and designed many machines and devices producing the first form of the modern technical drawing, including a perfected "exploded view" technique</p>
            </div>
            <div class="item">
              <h2 class="number">20+</h2>
              <h3 class="stats-sub-heading">Paintings</h3>
              <p>
                Surviving paintings that can be definitely attributed to him, and several of them are unfinished.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About --> */}
      <section id="about">
        <div class="container">
          <h2 class="section-heading" data-outline="about">About</h2>
          <div class="wrapper">
            <div class="left">
              <div class="card">
                <p class="card-desc">
                In the normal course of events many men and women are born with remarkable talents; but occasionally, in a way that transcends nature, a single person is marvellously endowed by Heaven with beauty, grace and talent in such abundance that he leaves other men far behind.
                </p>
              </div>
            </div>
            <div class="right">
              <h2 class="slogan">Leonardo Da Vinci</h2>
              <p class="right-text">
              Leonardo da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor and architect. While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and paleontology. Leonardo's genius epitomized the Renaissance humanist ideal, and his collective works compose a contribution to later generations of artists matched only by that of his younger contemporary, Michelangelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- projects --> */}
      <section id="projects">
        <div class="container">
          <h2 class="section-heading" data-outline="Projects">Projects</h2>
          <div class="all-items">
            <div class="item">
              <div class="left">
                <div class="img">
                  <img className="img-fluid" src={ process.env.PUBLIC_URL + "/images/mona.jpg" } />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">Paintings</h2>
                <h3 class="project-sub-title">Mona Lisa or La Gioconda</h3>
                <p class="project-desc">
                Among the works created by Leonardo in the 16th century is the small portrait known as the Mona Lisa or La Gioconda, the laughing one. In the present era, it is arguably the most famous painting in the world. Its fame rests, in particular, on the elusive smile on the woman's face, its mysterious quality perhaps due to the subtly shadowed corners of the mouth and eyes such that the exact nature of the smile cannot be determined.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="img">
                  <img className="img-fluid" src={ process.env.PUBLIC_URL + "/images/helicopter.jpeg" } />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">Engineering and inventions</h2>
                <h3 class="project-sub-title">An aerial screw suggestive of a helicopter, from the Codex Atlanticus.</h3>
                <p class="project-desc">
                Leonardo was fascinated by the phenomenon of flight for much of his life, producing many studies, including Codex on the Flight of Birds (c. 1505), as well as plans for several flying machines, such as a flapping ornithopter and a machine with a helical rotor.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="img">
                  <img className="img-fluid" src={ process.env.PUBLIC_URL + "/images/brain.jpg" } />
                </div>
              </div>
              <div class="right">
                <h2 class="project-title">Anatomy and physiology</h2>
                <h3 class="project-sub-title">Leonardo's physiological sketch of the human brain and skull</h3>
                <p class="project-desc">
                Leonardo's dissections and documentation of muscles, nerves, and vessels helped to describe the physiology and mechanics of movement. He attempted to identify the source of 'emotions' and their expression. He made the observations that humours were not located in cerebral spaces or ventricles. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="copyright">
        <div class="container">
          <p> &copy; Copyright 2021 Ermiry. All right Reserved</p>
        </div>
      </section>
    </div>
  );
}

export default App;
