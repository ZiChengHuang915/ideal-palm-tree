import React, { useEffect, useState } from 'react';
import './index.css';

import Stack from '@mui/material/Stack';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function MultiImage(props: {
    imageLink: string;
    prompt: string;
    apiKey: string;
}) {
    const [correctImageNum, setCorrectImageNum] = useState(0);
    const [images, setImages] = useState<string[]>([]);
    // create a state called selected image

    useEffect(() => {
        console.log(props.apiKey);
        const url = 'https://api.openai.com/v1/images/generations';
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.apiKey}`,
            },
            body: JSON.stringify({
                prompt: `${props.prompt}`,
                n: 4,
                size: '1024x1024',
            }),
        };
        console.log(config);

        const fetchData = async () => {
            try {
                console.log('calling api');
                const response = await fetch(url, config);
                const json = await response.json();
                console.log(json);
                console.log(
                    json.data[0]['url'],
                    json.data[1]['url'],
                    json.data[2]['url'],
                    json.data[3]['url']
                );

                var imageArray: string[] = [
                    json.data[0]['url'],
                    json.data[1]['url'],
                    json.data[2]['url'],
                    json.data[3]['url'],
                ];
                let num = Math.floor(Math.random() * 5);
                imageArray.splice(num, 0, props.imageLink);
                setCorrectImageNum(num);
                setImages(imageArray);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();

        // this is for testing
        // var imageArray: string[] = ["https://i.ibb.co/QMTrFPH/Abstraction-Lines-Stripes-Wallpaper-1024x1024-768x768.jpg",
        //     "https://i.ibb.co/QMTrFPH/Abstraction-Lines-Stripes-Wallpaper-1024x1024-768x768.jpg",
        //     "https://i.ibb.co/QMTrFPH/Abstraction-Lines-Stripes-Wallpaper-1024x1024-768x768.jpg",
        //     "https://i.ibb.co/QMTrFPH/Abstraction-Lines-Stripes-Wallpaper-1024x1024-768x768.jpg"];
        // let num = Math.floor(Math.random() * 5);
        // imageArray.splice(num, 0, props.imageLink);
        // setCorrectImageNum(num);
        // setImages(imageArray);
    }, []);

    return (
        <div className="MultiImageMultiImage">
            <p className="MultiImageText">
                Identify the original image (Images will load in a few seconds)!
            </p>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Image
                    imageLink={images[0]}
                    correctImage={correctImageNum == 0}
                />
                <Image
                    imageLink={images[1]}
                    correctImage={correctImageNum == 1}
                />
                <Image
                    imageLink={images[2]}
                    correctImage={correctImageNum == 2}
                />
                <Image
                    imageLink={images[3]}
                    correctImage={correctImageNum == 3}
                />
                <Image
                    imageLink={images[4]}
                    correctImage={correctImageNum == 4}
                />
            </Stack>
            <div className="MultiImageButton">
                <Link className="MultiImageLink" to="/">
                    <Button variant="text">Restart</Button>
                </Link>
            </div>
        </div>
    );
}

export default MultiImage;
