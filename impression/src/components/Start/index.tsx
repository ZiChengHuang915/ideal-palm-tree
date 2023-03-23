import React from 'react';
import './index.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Start() {
    return (
        <div className="Start">
            <Link className="Link" to="/initial" >
                <Button variant="text">Start</Button>
            </Link>
        </div>
    );
}

export default Start;