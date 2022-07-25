import {useState} from 'react';
import Card from './Card';
import data from '../card-data';
export default function CardContainer(props){
    const [tappedImg, setTappedImg] = useState([]);

    const tapped = (n) => {
        n = Number(n);
        if(tappedImg.includes(n)) props.gameOver();
        else {
            setTappedImg([...tappedImg, n]);
            props.increaseScore();
        }
    }
    const handleClick = (e) => {
        let temp = e.target.getAttribute('data-key') || null;
        if(temp) tapped(temp);
    }
    return(
        <div className='card-container' onClick={handleClick}>
            {data.map(obj => <Card key={obj.id} info={obj}/>)}
        </div>
        );
}
//
// function checkForGameOver(list, num){
//     if(list.includes(num)) return true;
//     if(list.length === 11) return true;
//     return false;
// }
