import React, { useState } from 'react';
import './App.css'; 
 
function App (){ 
 	const [name, setName] = useState('');
  	const [reg, setReg] = useState('');
  	const [email, setEmail] = useState('');
  	const [phone, setPhone] = useState('');
  	const [address, setAddress] = useState('');
  	const [error, setError] = useState(''); 
 	const [success, setSuccess] = useState(''); 
 	 
 	const bvs = (dt) => { 
 	 	if(name === "" || reg ==="" || email ==="" || phone === "" || address === ""){ 
 	 	 	setError(true); 
 	 	} 
 	 	else { 
 	 	 	setSuccess(true); 
 	 	 	setError(false); 
 	 	} 
 	} 
 	 
 	const successsmessage=()=>{ 
 	 	return( 
 	 	 	<div  
 	 	 	className="success" 
 	 	 	style={{ 
 	 	 	 	display: success ? '' :'none', 
 	 	 	}} > 
 	 	 	 <h2 id="bh"> Successfully Registeded</h2> 
 	 	 	 </div> 
 	 	); 
 	  }; 
 	   
 	  const errormessage=()=>{ 
 	   	return( 
 	   	 	<div 
 	   	 	className="error"  	   	 	
			style={{ 
 	   	 	 	display:error ? '' :'none', 
 	   	 	}} > 
 	   	 	 <h3 id="cr">Correctly enter all fields</h3> 
 	 	 	 </div> 
 	   	); 
 	  }; 
 
 	 
 		const checkName = (e) => {  	 	
			setName(e.target.value) 
	 	} 
 		const checkReg = (e) => {  	 	
			setReg(e.target.value) 
	 	} 
	 	const checkEmail = (e) => { 
	 	 	setEmail(e.target.value) 
	 	} 
	 	const checkPhone = (e) => { 
	 	 	setPhone(e.target.value) 
	 	} 
	 	const checkAddress = (e) => { 
	 	 	setAddress(e.target.value) 
	 	} 
 	 
	 	return ( 
	 	 	<div> 
	 	 	<center> 
	 	 	<h1>Registration Form</h1> 
	 	 	<div className="messages"> 
	 	 	{errormessage()} 
	 	 	{successsmessage()} 
	 	 	</div> 
  		<table border="5" text-align="center" cellspacing="2" cellpadding="5" > 
 	 	 
	 	 	<tr> 
	 	 	<td><label>Name :</label></td> 
 	 	  <td><input type="text" onChange={checkName} value={name} placeholder="Enter your Name" /></td> 
	 	 	</tr> 
 	 	 
	 	 	<tr> 
	 	 	<td><label>Register No :</label></td> 
 	   	<td><input type="text" onChange={checkReg} value={reg} placeholder="Enter your Regsiter No"/></td> 
	 	 	</tr> 
 	 	 	 	 
	 	 	<tr> 
	 	 	<td><label>Email :</label></td> 
 	 	  <td><input type="text" onChange={checkEmail} value={email} placeholder="Enter your Email"/></td> 
	 	 	</tr> 
 	 	 	 	 	 	 
	 	 	<tr> 
	 	 	<td><label>Phone No :</label></td> 
 	 	  <td><input type="number" onChange={checkPhone} value={phone} placeholder="Enter your Phone No"/></td> 
	 	 	</tr> 
 	 	 	 	 	 	 	 	 
	 	 	<tr> 
	 	 	<td><label>Address :</label></td> 
 	 	  <td><input type="text" onChange={checkAddress} value={address} placeholder="Enter your Address" /></td> 
	 	 	</tr> 
 	 	 
	 	<tr> 
 	 	<td colspan="2" align="center" > 
 	 	<button onClick={bvs}>Submit</button> 
 	 	</td> 
 	 	</tr> 
 	 	 
 	 	</table> 
 	 	</center> 
 	 	</div> 
 	 	) 
 	 
} 
 
  export default App; 
