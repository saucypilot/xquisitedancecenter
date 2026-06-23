import Image from "next/image";
import "./page.css";

const socialLinks = [
  {
    label: "Order Shirts",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdccnvPo4DboJPnXLIQwvsp5bDFumMbiwf58J5UQ6YON_JFwQ/viewform?pli=1",
    detail: "Xquisite merch form",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@xquisitemegacrew2992",
    detail: "Watch crew videos",
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/YXXanS3awY",
    detail: "Join the community",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/xquisitemegacrew/#",
    detail: "Follow event updates",
  },
];

const danceStyles = ["Salsa", "Bachata", "Country", "Line Dance", "Hiphop"];

const media = [
  {
    title: "Social Dance Energy",
    src: "/Video-291.mp4",
  },
  {
    title: "Partnerwork Moments",
    src: "/Video-247.mp4",
  },
  {
    title: "Crew Highlights",
    src: "/Video-111.mp4",
  },
];

const executiveBoardImages = [
  "/685045701_17913438306373082_1878532762844997167_n.jpg",
  "/689007418_17913438330373082_8607349456767041844_n.jpg",
  "/687776729_17913438282373082_5451678484000451295_n.jpg",
  "/670638011_17913438297373082_5900253630062043767_n.jpg",
  "/683112945_17913438333373082_5837402593054778772_n.jpg",
  "/683709708_17913438354373082_1929913105132097995_n.jpg",
  "/683759886_17913438285373082_7091190647691317541_n.jpg",
  "/685065540_17913438345373082_8624344941972304726_n.jpg",
];

export default function Home() {
  return (
    <main className="homePage">
      <section className="heroSection" aria-label="Xquisite Dance Center">
        <video
          className="heroVideo"
          src="/Video-337.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="heroShade" />

        <div className="heroContent">
          <p className="eyebrow">UTA Social Dance Club</p>
          <h1>Xquisite Dance Center</h1>
          <p className="heroCopy">
            Welcoming dance classes for salsa, bachata, country, line dance,
            and hiphop. Classes resume Fall 2026.
          </p>

          <div className="heroActions" aria-label="Primary links">
            <a className="primaryAction" href="#classes">
              Class Details
            </a>
            <a
              className="secondaryAction"
              href="https://discord.com/invite/YXXanS3awY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>

          <div className="styleRail" aria-label="Dance styles">
            {danceStyles.map((style) => (
              <span key={style}>{style}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="introSection" id="about">
        <div className="introMedia">
          <Image
            src="/logo.png"
            alt="Xquisite logo"
            width={520}
            height={520}
            className="introLogo"
          />
          <Image
            src="/Video-23.gif"
            alt="Xquisite dancers performing salsa"
            width={900}
            height={700}
            className="introGif"
            unoptimized
          />
        </div>
        <div className="introText">
          <p className="sectionLabel">Our Mission</p>
          <h2>Dance should feel accessible, social, and alive.</h2>
          <p>
            Xquisite creates a space where students can learn technique, build
            confidence, and connect with people through movement. The club
            keeps the community active with social classes, events, and room to
            grow.
          </p>
        </div>
      </section>

      <section className="classSection" id="classes">
        <div className="sectionHeader">
          <p className="sectionLabel">Classes</p>
          <h2>Fall 2026 sessions are coming back.</h2>
        </div>

        <div className="classGrid">
          <div className="classPanel featuredPanel">
            <span className="panelKicker">Weekly Social Class</span>
            <h3>Thursday Nights</h3>
            <p>
              Meet at the UC Building at the University of Texas at Arlington.
              Past class time was 8:30 PM. Follow the community links for final
              Fall 2026 announcements.
            </p>
          </div>
          <div className="classPanel">
            <span className="panelKicker">Cost</span>
            <h3>Membership Fee</h3>
            <p>Classes require a membership fee. No experience requirement.</p>
          </div>
          <div className="classPanel">
            <span className="panelKicker">Focus</span>
            <h3>Social Dance</h3>
            <p>Salsa, bachata, country, line dance, hiphop, and community.</p>
          </div>
        </div>
      </section>

      <section className="boardSection" id="board">
        <div className="sectionHeader">
          <p className="sectionLabel">Leadership</p>
          <h2>Meet the executive board.</h2>
        </div>

        <div className="boardGrid">
          {executiveBoardImages.map((src, index) => (
            <article
              className={`boardCard ${index === 0 ? "presidentCard" : ""}`}
              key={src}
            >
              <Image
                src={src}
                alt={`Xquisite executive board member ${index + 1}`}
                width={640}
                height={760}
                className="boardImage"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="mediaSection" id="media">
        <div className="sectionHeader">
          <p className="sectionLabel">Watch</p>
          <h2>Movement from the Xquisite floor.</h2>
        </div>

        <div className="videoGrid">
          {media.map((item) => (
            <article className="videoCard" key={item.src}>
              <video
                src={item.src}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
              />
              <div className="videoCaption">
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="connectSection" id="connect">
        <div className="connectCopy">
          <p className="sectionLabel">Connect</p>
          <h2>Follow updates, order shirts, and join the crew online.</h2>
        </div>

        <div className="linkGrid">
          {socialLinks.map((link) => (
            <a
              className="linkCard"
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link.label}</span>
              <small>{link.detail}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
