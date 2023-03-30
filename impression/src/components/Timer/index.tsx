import React from 'react';
import './index.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; duration: number }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ height: '150px', width: '150px' }}
      />
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
        <Typography variant="h3" component="div" color="text.primary">{`${
          props.duration - (props.duration * props.value) / 100
        }s`}</Typography>
      </Box>
    </Box>
  );
}

function Timer(props: { duration: number; redirectLink: any }) {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    const goToLink = () => navigate(props.redirectLink);
    if (progress == 100) {
      goToLink();
    }

    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 100 : prevProgress + 100 / props.duration
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgressWithLabel value={progress} duration={props.duration} />
    </Box>
  );
}

export default Timer;
