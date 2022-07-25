import {useState, useEffect} from 'react';
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
            // dataList = shuffle(dataList);
        }
    }
    const handleClick = (e) => {
        let temp = e.target.getAttribute('data-key') || null;
        if(temp) tapped(temp);
    }
    useEffect(() => {
        dataList = dataList.sort( () => Math.random() - 0.5 );
        if(props.setReset) setTappedImg([]);
    });

    return(
        <div className='card-container' onClick={handleClick}>
            {dataList.map(obj => <Card key={obj.id} info={obj}/>)}
        </div>
        );
}

// function shuffle(cardData){
//
//     return newData;
// }
