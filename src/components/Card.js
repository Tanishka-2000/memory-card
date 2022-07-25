// import image from '../images/acropolis.jpg'
export default function Card(props){
    return(
        <div key={props.info.id} className='card'>
            <img src={props.info.img} alt={props.info.title}/>
            <h1>{props.info.title}</h1>
        </div>
    );
}
