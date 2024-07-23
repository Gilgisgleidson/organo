import './Combo.css';

const Combo = (props) => {
    const labelParts = props.label.split('*');
    
    return (
        <div className='combo'>
            <label>
                {labelParts[0]}
                <span className="asterisk">*</span>
                {labelParts[1]}
            </label>
            <select onChange={event => props.onTyping(event.target.value)} required={props.required} value={props.value}>
                <option value={''} />
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default Combo;