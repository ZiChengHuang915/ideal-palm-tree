import React, { useEffect, useState } from 'react';
import './index.css';

import Stack from '@mui/material/Stack';
import Image from '../Image';

function MultiImage(props: { imageLink: string, prompt: string, apiKey: string }) {
    const [correctImageNum, setCorrectImageNum] = useState(0);
    const [images, setImages] = useState<string[]>([]);
    // create a state called selected image

    useEffect(() => {
        console.log(props.apiKey);
        const url = "https://api.openai.com/v1/images/generations";
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.apiKey}`
            },
            body: JSON.stringify({
                prompt: "A centered portrait of an asian male with tan skin, buzz cut, stubble, and a black beanie against a white background",
                n: 4,
                size: "1024x1024"
            })
        }
        console.log(config);

        const fetchData = async () => {
            try {
                const response = await fetch(url, config);
                const json = await response.json();
                console.log(json);
                console.log(json.data[0]["url"], json.data[1]["url"], json.data[2]["url"], json.data[3]["url"]);
                
                var imageArray:string[] = [json.data[0]["url"], json.data[1]["url"], json.data[2]["url"], json.data[3]["url"]];
                let num = Math.floor(Math.random() * 5);
                imageArray.splice(num, 0, props.imageLink);
                setCorrectImageNum(num);
                setImages(imageArray);
            } catch (error) {
                console.log("error", error);
            }
        };

        // fetchData();
    }, []);

    return (
        <div className="MultiImageMultiImage">
            <p className="MultiImageText">Identify the original image!</p>
            <Stack direction="row" justifyContent="center"
                alignItems="center" spacing={1}>
                <Image imageLink={ images[0] } />
                <Image imageLink={ images[1] } />
                <Image imageLink={ images[2] } />
                <Image imageLink={ images[3] } />
                <Image imageLink={ images[4] } />
            </Stack>
        </div>
    );
}

export default MultiImage;