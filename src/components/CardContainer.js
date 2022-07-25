import Card from './Card';
import data from '../card-data';
export default function CardContainer(){
    return(
        <div className='card-container'>
            {data.map(obj => <Card key={obj.id} info={obj} />)}
        </div>
        );
}
