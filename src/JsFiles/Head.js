import "../styleFile/Head.css"
import face from "../images/TrollFace.png"


export default function Head() {
  return (
    <header>
      <img src={face} />
      <h3>Meme Generator</h3>
    </header>
  )
}