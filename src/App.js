import {useState} from 'react';
import MessageDiv from './components/MessageDiv';
import CardContainer from './components/CardContainer';
import './styles.css';

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [isgameOver, setIsGameOver] = useState(false);
    const [isGameWon, setIsGameWon] = useState(false);

    const increaseScore = () => {
        if((score + 1) > highScore) setHighScore(hs => hs + 1);
        if((score + 1) === 12) setIsGameWon(true);
        setScore(sc => sc + 1);
    }
    const gameOver = () => {
        setIsGameOver(true);
    }
    // const gameWon = () => {
    //     setIsGameWon(true);
    //     increaseScore();
    // }
  return (
    <div>
    <MessageDiv score={score} highScore = {highScore} isgameOver={isgameOver} isGameWon={isGameWon}/>
    <CardContainer increaseScore={increaseScore} gameOver={gameOver} />
    </div>
    // <Card name={data[0]}/>
  );
}

export default App;
