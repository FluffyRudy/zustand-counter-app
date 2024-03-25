import "./App.css";
import { motion } from "framer-motion";
import Counter from "./components/Counter";

function App() {
  const opacityAnimation = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={opacityAnimation}
      initial='hidden'
      animate='show'>
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
            Checkout Some basic projects I made
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
    </motion.div>
  );
}

export default App;
