import {useState} from 'react';
import Card from './Card';
import data from '../card-data';
export default function CardContainer(props){
    let dataList = data;
    const [tappedImg, setTappedImg] = useState([]);

    const tapped = (n) => {
        n = Number(n);
        if(tappedImg.includes(n)) props.gameOver();
        else {
            setTappedImg([...tappedImg, n]);
            props.increaseScore();
            dataList = shuffle(dataList);
        }
    }
    const handleClick = (e) => {
        let temp = e.target.getAttribute('data-key') || null;
        if(temp) tapped(temp);
    }
    return(
        <div className='card-container' onClick={handleClick}>
            {dataList.map(obj => <Card key={obj.id} info={obj}/>)}
        </div>
        );
}

function shuffle(cardData){
    const newData = cardData.sort( () => Math.random() - 0.5 );
    return newData;
}
