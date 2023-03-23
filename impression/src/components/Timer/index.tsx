import React from 'react';
import './index.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} style={{ height: '150px', width: '150px'}}/>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    component="div"
                    color="text.primary"
                >{`${(100 - Math.round(props.value))/10}s`}</Typography>
            </Box>
        </Box>
    );
}

function Timer() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgressWithLabel value={progress} />
        </Box>
    );
}

export default Timer;