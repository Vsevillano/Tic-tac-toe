import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const Login = ({ setLoginUser }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
        console.log(user)
    }

    const login = () => {
        // console.table(user);
        // axios.post("http://localhost:5000/login", user)
        //     .then(res => {
        //         alert(res.data.message)
        //         setLoginUser(res.data.user)
        //         navigate("/")
        //     })
    }
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-5 m-auto card p-5 mt-5">
                    <h4>Registro</h4>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"name="email" value={user.email}  onChange={handleChange} />                           
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" name="password" value={user.password}  onChange={handleChange}/>
                        </div>                        
                        <div className="form-check mt-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">He leído y entiendo la política de privacidad</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2" onClick={login}>Iniciar sesión</button>
                    </form>

                </div>

            </div>
        </div>
        </>
    )
}
