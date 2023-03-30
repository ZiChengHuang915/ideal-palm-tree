# ideal-palm-tree

A game to explore the effects of AI police sketches, based off of a previous in the news article: https://www.vice.com/en/article/qjk745/ai-police-sketches

The game consists of the following elements:

- The user would be shown a portrait of a person for some period of time
- The user would then be asked to describe the person using descriptive language
- The description would be sent to an AI program (such as DALL E) to generate a sketch
- The user would finally be asked to pick the original person out of a selection of images

This game would test if memory recognition if affected by AI as opposed to traditional hand sketches, and the difficulty can be modified by changing the amount of time that the user is exposed to the original portrait as well as in the end selection phase.

# Quick Start

Install `npm`, if you don't already have it.

Clone this repository.

Navigate to the `impression` directory.

Run `npm install` to install all the required dependencies.

Run `npm start` to start the development server.

# Adding Images

To add a new person, the guideline is that we will find two images of the same person in a natural setting. It can be of any image format, but the dimensions should be square to ensure that they are displayed properly on the website.

There is a pseudo-database located in `src\registry.json`. It contains all the information needed to load a random image in the selection phase.

To add a new image:

- Navigate to and open `src\registry.json`
- Update the field `numEntries`
- Add a new json object following the existing format:

```
"[numEntries - 1]": {
   "0": "../../resources/[image name]-1.[file extension]",
   "1": "../../resources/[image name]-2.[file extension]"
 }
```

- Put the two images (renamed to the same names as in the registry) in `public\resources`
