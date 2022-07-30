import React, { useContext } from 'react'
import { HotelContext } from "../../../context"
function Login() {
    const { name, password, handleClick, handleChangeLogin } = useContext(HotelContext);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleClick}>
                <input type="text"
                    placeholder='Enter Your name'
                    value={name}
                    name="name"
                    id="name"
                    onChange={(e) => handleChangeLogin(e)}
                />

                <input
                    type="password"
                    placeholder='Enter Your Password'
                    name="password"
                    id="password"
                    value={password}
                    autoComplete="on"
                    onChange={(e) => handleChangeLogin(e)}
                />
                <button
                    type='submit'
                >Login</button>

            </form>
        </div>
    )
}

export default Login
