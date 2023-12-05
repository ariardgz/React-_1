
import React, {useReducer} from "react"
import { Dispatch } from "react"
import { Sub } from '../types'

interface FormState {
    inputValues: Sub

}

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = {
    nick: '',
    avatar: '',
    subMonths: 0,
    description: ''
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type){
        case "change_value":
            const {inputName, inputValue} = action.payload 
            return {
                ...state,
                [inputName]: inputValue
            }
        case "clear":
        return INITIAL_STATE

        default:
            return state

    }
}

const Form = ({onNewSub}: FormProps) => {
    //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)
    const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement> ) => {
        evt.preventDefault()
        onNewSub(inputValues)
        dispatch({type: "clear"})
    }

    const hadleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target 
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
        // setInputValues({
           // ...inputValues,
            //[e.target.name]: e.target.value
        //})
    }

    const handleClear = () =>{
        dispatch({type: "clear",})
        // setInputValues(INITIAL_STATE)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={hadleChange} value = {inputValues.nick} type='text' name= 'nick' placeholder="nick"></input>
                <input onChange={hadleChange} value = {inputValues.avatar} type='text' name= 'avatar' placeholder="avatar"></input>
                <input onChange={hadleChange} value = {inputValues.subMonths} type='text' name= 'subMonths' placeholder="subMonths"></input>
                <textarea onChange={hadleChange} value = {inputValues.description} name= 'description' placeholder="description"></textarea>

                <button onClick = {handleClear} type='button'>Clear the form</button>
                <button type='submit'>Save me sub!</button>

            </form>
        </div>
    )
}

export default Form