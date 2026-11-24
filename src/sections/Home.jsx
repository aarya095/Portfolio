
import "./Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-background">
        <img
          src="/images/mountains1.png"
          alt="Aarya sitting on a rocky mountain during a trip"
          className="home-landscape"
        />

        <div className="home-overlay"></div>

        <div className="home-content">

          <h1>
            Hey, I'm Aarya.
            <br />
            <span>Glad you found your way here.</span>
          </h1>

          <p className="home-description">
            I'm an engineering student who enjoys exploring technology,
            figuring things out, and making things along the way.
          </p>

          <a href="#projects" className="text-link">
            Take a look around <span>→</span>
          </a>
        </div>

        <div className="home-caption">
          <span>Somewhere in the mountains</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
