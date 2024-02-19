import './Card.css'

const Card = ({name, img, role, color}) => {
    return (
        <div className='card'>
            <div className='header' style={{backgroundColor: color}}>
                <img src={img} alt={name} />
            </div>
            <div className='body'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>    
        </div>
    )
}

export default Card