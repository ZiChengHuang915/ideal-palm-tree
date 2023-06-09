import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Describe from './components/Describe';
import ImageCountdown from './components/ImageCountdown';
import MultiImage from './components/MultiImage';
import Start from './components/Start';
import Timer from './components/Timer';
import images from './registry.json';

function App() {
    // TODO:
    // - rng select a valid image (in App) and pass it into "/initial"
    // - pass in same image to "/select"
    // - create an OnChange handler for the description page + propagate data back up to App
    // - generate the images
    // - assumption: generating the images takes less than 10s (do actual generation in either MultiImage or in App)
    // MultiImage: Since the selection and result page directly follow each other they
    // do not need to communicate with App to determine any state changes
    // - add a click handler to each of the cards
    // - onClick should check if the card id matches the image (passed from App)
    //   if so it is correct, otherwise guess until correct
    // - Add highlight styling for correctness to the results
    // - create a button after results displayed to circle back to the start page
    const [description, setDescription] = useState('');
    const [initialImageLink, setInitialImageLink] = useState(null);
    const [selectImageLink, setSelectImageLink] = useState(null);

    const sendDescription = (txt: string) => {
        setDescription(txt);
        console.log(description);
    };

    useEffect(() => {
        var imageNum = Math.floor(Math.random() * parseInt(images['numEntries'])).toString();
        setInitialImageLink(images[imageNum as keyof object][0]);
        setSelectImageLink(images[imageNum as keyof object][1]);
        console.log(imageNum);
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route
                        path="/initial"
                        element={<ImageCountdown duration={5} imageLink={initialImageLink as unknown as string} />}
                    />
                    <Route path="/storytime" element={<Timer duration={5} redirectLink={'/describe'} />} />
                    <Route path="/describe" element={<Describe sendDescription={sendDescription} />} />
                    <Route path="/generating" element={<Timer duration={10} redirectLink={'/select'} />} />
                    <Route
                        path="/select"
                        element={
                            <MultiImage
                                imageLink={selectImageLink as unknown as string}
                                prompt={description}
                                apiKey={process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
