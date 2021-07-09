import React from 'react';

const Clima = (props) => {
    console.log(props)
    return (
        <div className="container-fluid mt-2">
          <form  className="form-group m-5" onSubmit={ props.getClima }>
              <input type="text" placeholder="Ciudad" id="ciudad" className="form-control mb-3"></input>
              <input type="text" id="pais" placeholder="Pais" className="form-control mb-3"></input>
              <input type="submit" value="Consultar tiempo" className="btn btn-primary btn-block"></input> 
            </form>
        </div>
    )
}

export default Clima;