import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const API_URL = 'https://api.github.com/users'
export const API = async (term) => {
 const res =  await axios.get(`${API_URL}/${term}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  })
  .then(({data}) => {
    console.log(data)
    return data
  })
  .catch(err => handleError(err))
  return res
}

export default function SearchBar({onSubmit, resetCards}) {
const [term, setTerm] = useState('')
const [error, setError] = useState('')

const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({ mode: "onChange" })

const handleRegistration = (e) => {
    console.log('form submitted')
    onSubmit(term)
    setTerm('')
}

const handleError = (errors) => {
  console.error(errors)
  setError({ error: "an invalid attempt."})
  setTimeout(() => setError({ error: "" }), 5000)
}

const registerOptions = {
    term: {required: "term cannot be blank"}
}

const handleFormSubmit = (e) => {
       e.preventDefault()
       onSubmit(term)
       setTerm('')
    }

const handleChange = (e) => {
    setTerm(e.target.value)
}

const handleReset = (e) => {
     resetCards()
  }

    return (
        <form onSubmit={handleFormSubmit}>
        {/* // <form onSubmit={handleSubmit(handleRegistration, handleError)}> */}
        <input 
        value={term} 
        onChange={handleChange}
        type="text" 
        name="term" 
        id="term" 
        // {...register("term", registerOptions.term)}
        />
        <button type="submit"> Search</button>
        <button type="button" onClick={resetCards}> Clear</button>
        {/* <small style={{ color: 'red'}}> {errors?.term && errors.term.message }</small> */}
        <small style={{ color: 'red'}}> {error? error : ''}</small>
        </form>
        )
}

