import { useState } from 'react'
import Button from '../Button'
import Combo from '../Combo'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [img, setImg] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onSubmitting({
            name,
            role,
            img,
            team
        })
        setName('')
        setRole('')
        setImg('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>    
                <h2>Preencha os dados para criar o card do colaborador</h2>            
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value = {name}
                    onTyping={value => setName(value)}
                />
                <TextField 
                    required={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    value = {role}
                    onTyping={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value = {img}
                    onTyping={value => setImg(value)}
                />
                <Combo
                    required={true}
                    label="Time"
                    itens={props.teams}
                    value={team}
                    onTyping={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form