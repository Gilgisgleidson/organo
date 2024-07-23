import './TextField.css';

const TextField = (props) => {
    const onType = (event) => {
        props.onTyping(event.target.value);
    };

    const labelParts = props.label.split('*');
    
    return (
        <div className='text-field'>
            <label>
                {labelParts[0]}
                {props.showAsterisk && <span className="asterisk">*</span>}
                {labelParts[1]}
            </label>
            <input
                value={props.value}
                onChange={onType}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default TextField;
