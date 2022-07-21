import React, {useEffect, useState} from 'react';
import {
    TableCell,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import './styles.scss';

const DEFAULT_SORT_STATE = {
    name: false,
    email: false,
    gender: false,
    registeredDate: false
}

const DataTableComponent = ({ userData, handleSort, resetSort }) => {
    const [state, setState] = useState(DEFAULT_SORT_STATE)

    useEffect(() => {
        if(resetSort) {
            setState(DEFAULT_SORT_STATE)
        }
    },[resetSort])

    const onChangeSort = (val) => {
        setState(prevState => ({
            ...prevState,
            [val]: !state[val]
        }))

        handleSort(val, !state[val])
    }

    return (
        <div className="table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                <div className="col-field">
                                    <div className="name">
                                        Username
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <div className="col-field">
                                    <div className="name">
                                        Name
                                    </div>
                                    <div className="sort" onClick={() => onChangeSort('name')}>
                                        {state.name ?
                                            <ArrowDropUpIcon fontSize="small"/> :
                                            <ArrowDropDownIcon fontSize="small"/>
                                        }
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <div className="col-field">
                                    <div className="name">
                                        Email
                                    </div>
                                    <div className="sort" onClick={() => onChangeSort('email')}>
                                        {state.email ?
                                            <ArrowDropUpIcon fontSize="small"/> :
                                            <ArrowDropDownIcon fontSize="small"/>
                                        }
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <div className="col-field">
                                    <div className="name">
                                        Gender
                                    </div>
                                    <div className="sort" onClick={() => onChangeSort('gender')}>
                                        {state.gender ?
                                            <ArrowDropUpIcon fontSize="small"/> :
                                            <ArrowDropDownIcon fontSize="small"/>
                                        }
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <div className="col-field">
                                    <div className="name">
                                        Registered Date
                                    </div>
                                    <div className="sort" onClick={() => onChangeSort('registeredDate')}>
                                        {state.registeredDate ?
                                            <ArrowDropUpIcon fontSize="small"/> :
                                            <ArrowDropDownIcon fontSize="small"/>
                                        }
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((res, i) => (
                            <TableRow
                                key={`table-details-${i}`}
                                style={{backgroundColor: i % 2 === 0 ? '#D3D3D3' : 'white'}}
                            >
                                <TableCell >{res.username}</TableCell>
                                <TableCell >{res.name}</TableCell>
                                <TableCell >{res.email}</TableCell>
                                <TableCell >{res.gender}</TableCell>
                                <TableCell >{res.registeredDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTableComponent