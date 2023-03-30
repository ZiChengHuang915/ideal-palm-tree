import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../Image';
import './index.css';

function ImageCountdown(props: { duration: number; imageLink: string }) {
    const [timeLeft, setTimeLeft] = React.useState(props.duration);

    const navigate = useNavigate();

    React.useEffect(() => {
        const goToDescription = () => navigate('/storytime');
        if (timeLeft === 0) {
            goToDescription();
        }

        const timer = setInterval(() => {
            setTimeLeft(prevtimeLeft => (prevtimeLeft <= 0 ? 0 : prevtimeLeft - 1));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [timeLeft]);

    return (
        <div className="ImageCountdownImageCountdown">
            <Image imageLink={props.imageLink} />
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={100 - (timeLeft * 100) / props.duration} />
            </Box>
        </div>
    );
}

export default ImageCountdown;
