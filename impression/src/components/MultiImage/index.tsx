import React from 'react';
import './index.css';

import Stack from '@mui/material/Stack';
import Image from '../Image';

function MultiImage() {
    return (
        <div className="MultiImageMultiImage">
            <p className="MultiImageText">Identify the original image!</p>
            <Stack direction="row" justifyContent="center"
                alignItems="center" spacing={1}>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </Stack>
        </div>
    );
}

export default MultiImage;