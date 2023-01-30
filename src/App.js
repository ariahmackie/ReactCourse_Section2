import "./styles.css";
import Card from "./components/Card";
import alexa_img from "./images/alexa.png";
import cortana_img from "./images/cortana.png";
import siri_img from "./images/siri.png";

export default function App() {
  return (
    <div className="App">
      <Card
        img={alexa_img}
        alt="cortana img"
        name="Alexa"
        handle="@Alexa99"
        info="I'll buy you stuff on Amazon"
      />
      <Card
        img={cortana_img}
        alt="cortana img"
        name="Cortona"
        handle="@cortana12"
        info="Microsoft assistant"
      />
      <Card
        img={siri_img}
        alt="siri image"
        name="Siri"
        handle="@siri44"
        info="Apple Assistant"
      />
      ;
    </div>
  );
}
