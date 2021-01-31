import React, { useState, useEffect } from 'react';
import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState(['usa', 'bd', 'uk']);

  useEffect(() => {
    //UseEffect:: Runs a piece of code based on a given condition
    //The code inside will run once when the componenet loads and not again
  }, []);

  //https://disease.sh/v3/covid-19/countries
  return (
    <div className='app'>
      <div className='app__header'>
        <h1>Covid-19 Tracker</h1>
        <FormControl className='app_dropdown'>
          <Select varient='outlined' value='abc'>
            {countries.map((country) => (
              <MenuItem value='{country}'>{country}</MenuItem>
            ))}

            {/* <MenuItem value='worldwide'>worldwide </MenuItem>
            <MenuItem value='worldwide'>1 </MenuItem>
            <MenuItem value='worldwide'>2 </MenuItem>
            <MenuItem value='worldwide'>3 </MenuItem> */}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
