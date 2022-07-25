export default function MessageDiv(props){
    return(
        <div className='message-div'>
            <div className="msg">
                <p>{props.isgameOver ? (props.isGameWon ? 'You Won': 'You Lose'):'To win this game you have to tap all cards. Don\'t tap same card twice.'}</p>
            </div>
            {props.isgameOver && <button onClick={props.reset}>Play Again</button>}
            <div className="score">
                <p>Score: {props.score}</p>
                <p>High Score: {props.highScore}</p>
            </div>
        </div>
 );
}
