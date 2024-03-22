import React, { useState,useEffect } from 'react';
import {TextField } from '@mui/material';


const EditableTableCell = ({ value, onChange,type}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
   
    useEffect(()=>{
      setTempValue(value);
    },[value]);

    const handleDoubleClick = () => {
      setIsEditing(true);
    };
  
    const handleChange = (e) => {
      const newValue = e.target.value;
      // Check if the new value is a valid number before updating state
      if(type==='number'){
      if (!isNaN(newValue)) {
        setTempValue(newValue);
      }
    }
      else {
        setTempValue(newValue);
      }
  
    };
  
    const handleBlur = () => {
      setIsEditing(false);
    //   onChange(parseFloat(tempValue));
      if(type==='number')onChange(parseFloat(tempValue));
      else onChange(tempValue);
      
    };
  
    return isEditing ? (
      <TextField
        value={tempValue}
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus
        fullWidth
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleBlur();
          }
        }}
      />
    ) : (
      <div style={{height:"27px"}} onDoubleClick={handleDoubleClick}>{value}</div>
    );
  };

  export default EditableTableCell;