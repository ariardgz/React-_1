
import { useState } from "react"

const Form = () => {
    const [inputValues, setInputValues] = useState({
        nick: '',
        avatar: '',
        subMonths: 0,
        description: ''
    })
    const handleSubmit = () => {}

    const hadleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={hadleChange} value = {inputValues.nick} type='text' name= 'nick' placeholder="nick"></input>
                <input onChange={hadleChange} value = {inputValues.avatar} type='text' name= 'avatar' placeholder="avatar"></input>
                <input onChange={hadleChange} value = {inputValues.subMonths} type='text' name= 'subMonths' placeholder="subMonths"></input>
                <textarea onChange={hadleChange} value = {inputValues.description} name= 'description' placeholder="description"></textarea>

                <button>Save me sub!</button>
            </form>
        </div>
    )
}

export default Form