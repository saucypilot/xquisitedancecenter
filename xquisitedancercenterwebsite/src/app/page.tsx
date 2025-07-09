import "./page.css";

export default function Home() {
  return (
    <div className="homePage">
      <div className="firstImage">
        <img src="/homepagePic1.png" alt="Homepage first image"/>
        <div className="firstImageText">
          <h1>Welcome to Xquisite Dance Center</h1>
          <p>Where Dance Meets Passion</p>
        </div>
        <div className="middleSection">
          <div className="missionStatement">
            <h2 className="missionStatementHeading">Our mission</h2>
            <p className="missionStatementParagraph">Our mission is to make dance accessible to everyone by offering free, welcoming classes that inspire confidence, creativity, and community—removing financial barriers so anyone can experience the joy of movement.</p>
          </div>
          <img src="/salsaCouple.png" alt="Salsa Dance" className="salsaImage"/>
        </div>
      </div>
    </div>
  );
}