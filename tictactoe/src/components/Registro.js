import React from 'react'

export const Registro = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 m-auto card p-5 mt-5">
                    <h4>Registro</h4>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />                           
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Repetita su contraseña</label>
                            <input type="password-compare" className="form-control" id="exampleInputPassword2" placeholder="Repita su contraseña"/>
                        </div>
                        <div className="form-check mt-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">He leído y entiendo la política de privacidad</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Registrar</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
