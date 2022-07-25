
export default function Card(props){

    return(
        <div key={props.info.id} className='card'>
            <div className='cover' data-key={props.info.id}></div>
            <img src={props.info.img} alt={props.info.title}/>
            <h1>{props.info.title}</h1>
        </div>
    );
}
