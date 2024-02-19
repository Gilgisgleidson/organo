import './Combo.css'

const Combo = (props) => {
    return (
        <div className='combo'>
            <label>{props.label}</label>
            <select onChange={event => props.onTyping(event.target.value)} required={props.required} value={props.value}>
                <option value={''} />
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Combo