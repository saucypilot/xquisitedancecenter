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

export default function Home() {
  return (
    <main className="homePage">
      <section className="heroSection" aria-label="Xquisite Dance Center">
        <video
          className="heroVideo"
          src="/Video-291.mp4"
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
            Free, welcoming dance classes for salsa, bachata, country, line
            dance, and hiphop. Classes resume Fall 2026.
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
            confidence, and connect with people through movement. The club keeps
            classes free so anyone can step in, try something new, and grow with
            the community.
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
            <h3>Free</h3>
            <p>No membership barrier, no experience requirement.</p>
          </div>
          <div className="classPanel">
            <span className="panelKicker">Focus</span>
            <h3>Social Dance</h3>
            <p>Salsa, bachata, country, line dance, hiphop, and community.</p>
          </div>
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
