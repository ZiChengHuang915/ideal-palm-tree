import React, { lazy, useState, Suspense } from 'react';
import './index.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function Image(props: { imageLink: any; correctImage?: boolean }) {
  const [cardStyle, setCardStyle] = useState('defaultCardStyle');

  return (
    <Suspense fallback={<div>Hi, This page is Loading...</div>}>
      {props.imageLink && (
        <Card className={cardStyle} sx={{ minWidth: '15vw', maxWidth: '15vw' }}>
          <CardActionArea
            onClick={() => {
              setCardStyle(
                props.correctImage
                  ? 'correctCardStyle'
                  : props.correctImage != null
                  ? 'incorrectCardStyle'
                  : 'defaultCardStyle'
              );
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              src={props.imageLink}
              alt="someone cool"
            />
          </CardActionArea>
        </Card>
      )}
    </Suspense>
  );
}

export default Image;
