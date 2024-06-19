import React from 'react';

 function Select({ name, id, options, onChange }){

    return (
       
        <select  name={name} id={id} onChange={onChange}> 
         <option value="" disabled selected>Select your role</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        
      );
};

export default Select;