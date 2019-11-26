import Gun from 'gun'
import React, {useState} from 'react'
import produce from 'immer'
import '../public/static/output.css';
import Router from 'next/router'

export const RegisterForm = ({color}) => {
    let gun = Gun()
    let user, email, pass
    const setUser = (value) => {user = value}
    const setEmail = (value) => {email = value}
    const setPass = (value) => {pass = value}
    const handleSubmit = (event) => {
        event.preventDefault()
        gun.get(user).put({username: user, email: email, password: pass})
        console.log(user, pass)
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <InputBox name="Username" set={setUser}  color={color}/>
                <InputBox name="Email"    set={setEmail} color={color}/>
                <InputBox name="Password" set={setPass}  color={color}/>
                <Submit text="Register" color={color}/>
            </p>
        </form>
    )
}

export const LoginForm = ({color}) => {
    let gun = Gun()
    let user, email, pass
    const setUser = (value) => {user = value}
    const setPass = (value) => {pass = value}
    const handleSubmit = (event) => {
        event.preventDefault()
        gun.get(user).on((data, key) => {
            user = data.username
            email = data.email
            pass = data.password
        })
        console.log([user, email, pass])
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <InputBox name="Username" set={setUser} color={color}/>
                <InputBox name="Password" set={setPass} color={color}/>
                <Submit text="Login" color={color}/>
            </p>
        </form>
    )
}

export const StartForm = ({color}) => {
    const handleSubmit = (event) => {
        Router.push('/home')
    }
    const submit = `p-1 w-1/3 text-2xl border-2 border-${color}-800 bg-transparent hover:bg-${color}-700 hover:text-white ml-1/3 my-2 rounded active:bg-${color}-900 focus:outline-none`
    return (
        <form onSubmit={handleSubmit} className={`bg-${color}-400 rounded pb-4 w-full`}> 
            <img src="/static/immobilapp.png" className="w-2/3 ml-1/6 py-8"/>
            <Box name="Place" color={color} placeholder="City or ZIP"/>
            <DoubleBox name="Price" color={color} first="From" second="To"/>
            <Box name="Radius" color={color} placeholder="in Km"/>
            <Box name="Rooms" color={color} placeholder="e.g.1.5"/>
            <button
                className={submit}>
                <a href="/home">
                    Search
                </a>
            </button>
        </form>
    )
}

export const FilsterForm = ({color}) => {
    const handleSubmit = (event) => {
        Router.push('/home')
    }
    const submit = `p-1 w-1/3 text-2xl border-2 border-${color}-800 bg-transparent hover:bg-${color}-700 hover:text-white ml-1/3 my-2 rounded active:bg-${color}-900 focus:outline-none`
    return (
        <form onSubmit={handleSubmit} className={`bg-${color}-400 rounded py-8 w-full`}> 
            <Box name="Place" color={color} placeholder="City or ZIP"/>
            <DoubleBox name="Price" color={color} first="From" second="To"/>
            <Box name="Radius" color={color} placeholder="in Km"/>
            <Box name="Rooms" color={color} placeholder="e.g.1.5"/>
            <button
                className={submit}>
                <a href="/home">
                    Apply
                </a>
            </button>
        </form>
    )
}

const DoubleBox = ({name, color, first, second}) => {
    const css = `bg-${color}-400 h-auto w-full rounded overflow-hidden`
    return (
        <div>
            <p  className={css}>
                <p className={`h-auto text-2xl text-center w-1/2 float-left`}>
                    {name}
                </p>
                <p className="w-1/2 float-right">
                    <input  type="text"
                            className={`bg-${color}-200 text-base placeholder-blue-700 text-center h-10 w-2/6 rounded px-1 border-2 border-${color}-600`}
                            placeholder={first}>
                    </input>
                    <input  type="text"
                            className={`bg-${color}-200 text-base placeholder-blue-700 text-center h-10 w-2/6 rounded px-1 border-2 border-${color}-600`}
                            placeholder={second}>
                    </input>
                </p>
            </p>
        </div>
    )
}

const Box = ({name, color, placeholder}) => {
    const css = `bg-${color}-400 h-auto w-full rounded`

    return (
        <div>

            <p  className={css}>
                
                <p className={`h-auto text-2xl text-center w-1/2 float-left`}>
                    {name}
                </p>
                <p className="w-1/2 float-right">
                    <input  type="text"
                            className={`bg-${color}-200 text-base placeholder-blue-700 text-center h-10 w-2/3 rounded border-2 border-${color}-600`}
                            placeholder={placeholder}>
                    </input>
                </p>
            </p>
        </div>
    )
}

const InputBox = ({name, set, color}) => {
    const css = `px-2 bg-${color}-400 h-auto w-full rounded`

    return (
        <p  className={css}>
            
            <TextDisplay text={name}/>
            <Input set={set} color={color}/>
        </p>
    )
}

const TextDisplay = ({text}) => {
    const css = `h-auto text-2xl`
    return (
        <p className={css}>
            {text}
        </p>
    )
}

const Input = ({set, color}) => {
    const css = `bg-${color}-200 text-xl h-10 w-full rounded px-1 border-2 border-${color}-600`
    const handleChange = ({target}) => {set(target.value)}
    return (
        <p>
            <input  type="text"
                    onChange={handleChange}
                    className={css}>
            </input>
        </p>
    )
}

const Submit = ({text, color}) => {
    const css = `p-1 w-32 text-2xl border-2 border-${color}-800 bg-transparent hover:bg-${color}-700 hover:text-white ml-1/4 my-2 rounded active:bg-${color}-900 focus:outline-none`

    return (
        <button type="submit"
            className={css}>
            {text}
        </button>
    )
}
//onClick={e => e.stopPropagation() }>

//export default {RegisterForm, LoginForm}