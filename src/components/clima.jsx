import React from 'react';

const Clima = (props) => {
    return (
        <div className="container">
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperatura ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.temperatura &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {Math.round((parseFloat(props.temperatura) - 273), 2)} ℃, {props.descripcion}</p>
                    }
                    {
                        props.humedad &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humedad}</p>
                    }
                    {
                        props.viento &&
                        <p><i className="fas fa-wind"></i> Viento: {props.viento}</p>
                    }
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
            }
        </div>
    )
}

export default Clima;