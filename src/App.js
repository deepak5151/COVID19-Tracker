import React from 'react';
import {Cards,Country,Charts} from './Components';
import {fetchdata} from './api';
import './Components/css/bootstrap.min.css';
import image from './covid19.png';

class App extends React.Component{

  state={
    data:{},
    country: "",
  }
  
  async componentDidMount()
    {
    const fetcheddata = await fetchdata();
    this.setState({data:fetcheddata});
    }

  countrychange = async (country) =>
  {
    const fetcheddata = await fetchdata(country);
    this.setState({data:fetcheddata, country:country});
    console.log(fetcheddata);
  }
  
  render(){

    return(
      <div>
      <img src={image} alt="Image Not Found" className="d-block mx-auto mt-4 pt-4"></img>
      <Cards data={this.state.data} country={this.state.country} />
      <Country countrychange={this.countrychange}/>
      <Charts data={this.state.data} country={this.state.country}/>
      <br/><br/><br/>
      </div>
      )
  }
}


export default App;
