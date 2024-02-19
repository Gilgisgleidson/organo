import Card from '../Card'
import './Team.css'

const Team = (props) => {
    const background = {backgroundColor: props.secondaryColor}
    const border = {borderColor: props.primaryColor}

    return (
        (props.cards.length > 0) ? <section className='team' style={background}>
            <h3 style={border}>{props.name}</h3>
            <div className='cards'>
                {props.cards.map(card => 
                    <Card
                        key = {card.name && card.team}
                        name = {card.name}
                        role = {card.role}
                        img = {card.img}
                        color = {props.primaryColor}
                    />)
                }                
            </div>
        </section>
        : ''
    )
}

export default Team