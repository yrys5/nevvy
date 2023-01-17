import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCategory(props) {

  const handleChange = (event) => {
    props.setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 190, color: "success" }}>
        <InputLabel id="demo-simple-select-helper-label">Kategoria</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.category}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="Brak">
            <em>Brak</em>
          </MenuItem>
          <MenuItem value="cyberpunk">Cyberpunk</MenuItem>
          <MenuItem value="lol">League of Legends</MenuItem>
          <MenuItem value="fortnite">Fortnite</MenuItem>
          <MenuItem value="wot">World of Tanks</MenuItem>
          <MenuItem value="wiedzmin3">Wiedźmin 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}