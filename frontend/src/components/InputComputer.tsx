import { useEffect, useRef, useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ITEM_HEIGHT = 56;
const ITEM_PADDING_TOP = 8;
const MenuProps:any = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        overflowY: 'auto',
        scrollbarWidth: 'none',  
        msOverflowStyle: 'none',
        borderRadius: '8px', 
      },
    },
  };

  const customStyles = {
    borderRadius: '12px', // Adjust the border-radius as needed
    backgroundColor: '#f0f0f0',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none', // Menghilangkan border
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none', // Menghilangkan border saat hover
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none', // Menghilangkan border saat fokus
    },
  };

  const menuItemStyles = {
    '&.Mui-selected': {
      backgroundColor: '#e0e0e0', // Color for the selected item
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#d0d0d0', // Color for the selected item on hover
    },
    borderRadius: '8px', 
    margin: '4px 8px'
  };

export default function InputComputer() {
    const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                displayEmpty
                value={age}
                label="Age"
                onChange={handleChange}
                input={<OutlinedInput sx={customStyles} /> }
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder="Choose Room"
              >
<MenuItem value="" disabled > 
      <em>Choose Room</em>
    </MenuItem>
                <MenuItem value={10} sx={menuItemStyles}>Ten</MenuItem>
                <MenuItem value={20} sx={menuItemStyles}>Twenty</MenuItem>
                <MenuItem value={30} sx={menuItemStyles}>Thirty</MenuItem>
                <MenuItem value={10} sx={menuItemStyles}>Ten</MenuItem>
                <MenuItem value={20} sx={menuItemStyles}>Twenty</MenuItem>
                <MenuItem value={30} sx={menuItemStyles}>Thirty</MenuItem>
                <MenuItem value={10} sx={menuItemStyles}>Ten</MenuItem>
                <MenuItem value={20} sx={menuItemStyles}>Twenty</MenuItem>
                <MenuItem value={30} sx={menuItemStyles}>Thirty</MenuItem>
              </Select>
            </FormControl>
  )
}
