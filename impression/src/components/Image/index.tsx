import React from 'react';
import './index.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import picture from "../../resources/research-professor-maura-grossman_1.jpg"

function Image() {
    return (
        <Card sx={{ maxWidth: "25vw" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    image={picture}
                    alt="someone cool"
                />
            </CardActionArea>
        </Card>
    );
}

export default Image;