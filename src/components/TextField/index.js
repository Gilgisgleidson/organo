import './TextField.css'

const TextField = (props) => {

    const onType = (event) => {
        props.onTyping(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField