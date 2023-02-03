import { ClickableImage } from "../components/ClickableImage/ClickableImage";
import { socials } from "../constants/socials";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <img
        alt="Andrew Gunderman's Header"
        className="headerImage"
        src="https://pbs.twimg.com/profile_images/1603544995205636096/cL0Mq9Sw_400x400.jpg"
      />
      <h1>Andrew Gunderman</h1>
      <p>Entrepreneur. Software developer.</p>
      <div>
        {socials &&
          socials.map(({ href, alt, src }) => (
            <ClickableImage href={href} alt={alt} src={src} />
          ))}
      </div>
    </div>
  );
}

export default App;
