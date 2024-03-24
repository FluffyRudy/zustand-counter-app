import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter />
      <h2 style={{ margin: "0", marginTop: "5vmax" }}>Bored ? Try Something</h2>
      <ul>
        <li>
          <a
            target='_blank'
            href='https://memory-card-game-zeta-wine.vercel.app/'>
            Memory Game
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://flappy-bird-cyan.vercel.app/'>
            Flappy Bird
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://fluffyrudy.github.io/Battleship/'>
            Battleship Board Game
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://fluffyrudy.github.io/Jokes/'>
            Enjoy Funny Jokes
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://github.com/FluffyRudy?tab=repositories'>
            Checkout Some beginner projects I made
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.youtube.com/@FluffyBRudy'>
            Check demo of some other projects I made
          </a>
        </li>
      </ul>
    </>
  );
}

export default App;
