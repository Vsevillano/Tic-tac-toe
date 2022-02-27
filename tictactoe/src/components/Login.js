import React from 'react'

export const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 m-auto card p-5 mt-5">
                    <h4>Iniciar sesión</h4>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />                           
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                        </div>
                        
                        <div className="form-check mt-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Recordar contraseña</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Iniciar sesión</button>
                        
                        <p class="text-center mt-3">¿No tiene cuenta? <a href="/registrar">Crear una</a></p>
                    </form>

                </div>

            </div>
        </div>
    )
}
