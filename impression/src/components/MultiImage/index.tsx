import React from 'react';
import './index.css';

import Stack from '@mui/material/Stack';
import Image from '../Image';

function MultiImage(props: {imageLink: string}) {
    return (
        <div className="MultiImageMultiImage">
            <p className="MultiImageText">Identify the original image!</p>
            <Stack direction="row" justifyContent="center"
                alignItems="center" spacing={1}>
                <Image imageLink={props.imageLink}/>
                <Image imageLink={props.imageLink}/>
                <Image imageLink={props.imageLink}/>
                <Image imageLink={props.imageLink}/>
                <Image imageLink={props.imageLink}/>
            </Stack>
        </div>
    );
}

export default MultiImage;