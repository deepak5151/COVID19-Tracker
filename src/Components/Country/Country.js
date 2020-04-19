import React, { useState, useEffect } from 'react';
import {fetchcountries} from '../../api';
import '../css/bootstrap.min.css';


const Country= ({countrychange}) =>{

	const [countries , setcountries] = useState([]);

	useEffect(()=>
	{
		const fetchAPI =async () =>{
			setcountries(await fetchcountries());
		}

		fetchAPI();
	},[]);

	return (
		<div align="center" className="my-4">
			<select  onChange={(e)=>countrychange(e.target.value)}>
			<option value="" selected>Global</option>
			{countries.map((country,i)=><option key={i} value={country}>{country}</option>)}
			</select>
		</div>
	)
}

export default Country;