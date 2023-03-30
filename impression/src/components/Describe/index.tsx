import React, { useState } from 'react';
import './index.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

function Describe(props: { sendDescription: (txt: any) => void }) {
    const handleTextChange = (e: any) => {
        props.sendDescription(e.target.value);
    };

    return (
        <div className="DescribeDescribe">
            <Stack spacing={1}>
                <p>Oh! What did we just see? Can you describe the individual in the image?</p>
                <TextField
                    className="DescribeTextField"
                    id="outlined-basic"
                    helperText="Example: asian male with tan skin, buzz cut, stubble, and a black beanie"
                    onChange={handleTextChange}
                    variant="outlined"
                    multiline
                    rows={8}
                />
                <Link className="DescribeLink" to="/generating">
                    <Button variant="text">Next</Button>
                </Link>
            </Stack>
        </div>
    );
}

export default Describe;
