import "./page.css";

export default function Home() {
  return (
    <div className="homePage">
      <div className="firstImage">
        <img src="/Timeline1-ezgif.com-cut.gif" alt="Homepage first image" />
        <div className="firstImageText">
          <h1>Welcome to Xquisite Dance Center</h1>
          <p>Where Dance Meets Passion</p>
        </div>
      </div>

      <div className="middleSection">
        <div className="missionStatement">
          <h2 className="missionStatementHeading">Our mission</h2>
          <p className="missionStatementParagraph">
            Our mission is to make dance accessible to everyone by offering
            free, welcoming classes that inspire confidence, creativity, and
            community—removing financial barriers so anyone can experience the
            joy of movement.
          </p>
        </div>
        <img
          src="/Video-23.gif"
          alt="Salsa Dance"
          className="salsaImage"
        />
      </div>

      <div className="classScheduleSection">
        <h2>Class Schedule</h2>
        <div className="classBox">
          <p>
            <strong>Day:</strong> Every Thursday
          </p>
          <p>
            <strong>Time:</strong> 7:30 PM
          </p>
          <p>
            <strong>Location:</strong> UC Building, University of Texas at
            Arlington
          </p>
        </div>
      </div>
    </div>
  );
}
