This is my Mannequin project for the course "Basics of computer graphics 2023" for Computer Sciences 
at the Faculty of Mathematics and Informatics at Sofia University „St. Kliment Ohridski”.

The project contains the following folders:

-> fonts - a folder containing the fonts needed for the html side:
    -> cyrillic_pixel-7.ttf - Downloaded from https://www.1001fonts.com/pixel+bitmap+cyrillic-fonts.html
        * it looks alienlike and fits the theme.

-> images - a folder containing the images needed for the html side:
    -> skyBackground.webp - downloaded from a free website and currently hosted on discord

-> scripts - a folder containing JavaScript scripts for different needs:
    -> mannequin.js:
        - a little modified version of the original mannequin.js (https://boytchev.github.io/mannequin.js/)
        - changed the some ground properties
    -> objectBuilder.js:
        - used for creating different objects:
            - class Chair extends THREE.Group           -> used for the UFO's chair
            - class Beam extends THREE.Mesh             -> used for the UFO's beam
            - class Screen extends THREE.Mesh           -> used for the in UFO screen
            - class ChristmasHat extends THREE.Group    -> used by the peopleBuilder.js to build chrismas people (myMale() myFemale())
            - class AlienAtributes extends THREE.Group  -> used by the peopleBuilder.js to build Aliens
            - class Tree extends THREE.Group            -> used for the Trees in the scene
            - class Flower extends THREE.Group          -> used for the Flowers in the scene
    -> peopleBuilder.js: (it says it all)
            - class Alien extends Mannequin
            - class myMale extends Male
            - class myFemale extends Female
        * all of them contain some kind of specific traits added to the normal human model (color of clothes or accessories)
    -> three.min.js
    -> ufo.js
        - class handling the ufo object in the scene and its animation
-> sounds:
    -> The X-Files.mp3 - a file for background sound
-> mannequin.html the html container - the view of the final project



