import React, {useState} from 'react';
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBarComponent = ({ value, onInputChange }) => {

    const handleChange = ({ target }) => {
        onInputChange(target.value)
    }
    return(
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 50 }}
        >
            <InputBase
                value={value}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Here"
                inputProps={{ 'aria-label': 'search here' }}
                onChange={handleChange}
                onKeyPress={(event) => {
                    if(event.code === 'Enter') {
                        event.preventDefault()
                    }
                }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBarComponent;