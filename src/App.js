import './App.css';
import React, { Component } from 'react';
import Clima from './components/clima';
import Formulario from './components/formulario';


class App extends Component{  

  state = {
    temperatura: '',
    humedad: '',
    descripcion: '',
    viento: '', 
    error: null
  }

  getClima = async (e) => {
    e.preventDefault();
    let c = document.getElementById('ciudad').value;
    let p = document.getElementById('pais').value;
    if(c.trim() === "" || c == null || p.trim() === "" || p == null){
      this.setState({
        error: 'Introduce el pais y la ciudad'
      })
    }
    else{
      const url = "https://api.openweathermap.org/data/2.5/weather?q=" + c + "," + p + "&appid=d9a4e181d509207643a39880fb6b3125";
      const respuesta = await fetch(url)
      const datos = await respuesta.json()
      
      console.log(datos)

      this.setState({
        temperatura: datos.main.temp,
        humedad: datos.main.humidity,
        descripcion: datos.weather.description,
        viento: datos.wind.speed,
        error: null
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App del clima</h1>
        </header>
        <Formulario getClima={this.getClima}></Formulario>
        <Clima {...this.state}></Clima>
      </div>
    )
  }
}

export default App;
