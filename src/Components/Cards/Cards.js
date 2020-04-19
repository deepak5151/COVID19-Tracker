import React from 'react';
import './Cards.css';
import '../css/bootstrap.min.css';
import CountUp from 'react-countup';

const Cards= ({data:{confirmed,recovered,deaths,lastUpdate},country}) =>{
  const countryinfected = `Total Number of people infected in ${country}`;
  const globalinfected = "Total Number of people who got infected around the world";
  const countryrecovered = `Total Number of people recovered in ${country}`;
  const globalrecovered = "Total Number of people who got recovered around the world";
  const countrydeath = `Total Number of people died in ${country}`;
  const globaldeath = "Total Number of people who died around the world";
	if(!confirmed)
	{
		return (
      <div class="container">
        <div className="loading">
        <h1 >Loading....</h1>
        </div>
      </div>
    );
  }
  
  
	return(
<div className="container">
<div className="card-deck">
  <div className="card">
    <div className="card-block infected">
    <br/><br/>
      <h4 className="card-title">
      Infected People
      </h4>
      <h6 className="card-title">
      <CountUp start={0} end={confirmed.value} duration={1} separator="," />
      </h6>
      <small className="card-title">
      {new Date(lastUpdate).toDateString()}
      </small>
      <br/>
      <small className="text-muted">{country ? countryinfected:globalinfected }</small>
      <br/><br/><br/>
    </div>
  </div>

  <div className="card">
    <div className="card-block recovered">
      <br/><br/>
      <h4 className="card-title">
      Recovered People
      </h4>
      <h6 className="card-title">
      <CountUp start={0} end={recovered.value} duration={1} separator="," />
      </h6>
      <small className="card-title">
      {new Date(lastUpdate).toDateString()}
      </small>
      <br/>
      <small className="text-muted">{country ? countryrecovered:globalrecovered }</small>
      <br/><br/><br/>
    </div>
  </div>

  <div className="card">
    <div className="card-block deaths">
    <br/><br/>
      <h4 className="card-title">
      People who died
      </h4>
      <h6 className="card-title">
      <CountUp start={0} end={deaths.value} duration={1} separator="," />
      </h6>
      <small className="card-title">
      {new Date(lastUpdate).toDateString()}
      </small>
      <br/>
      <small className="text-muted">{country ? countrydeath:globaldeath }</small>
      <br/><br/><br/>
    </div>
  </div>
  </div>
  </div>
)

}

export default Cards;
