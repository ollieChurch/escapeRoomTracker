import kpNews from '../../assets/images/maxwell/kpNews.png'
import diamondLaptop from '../../assets/images/maxwell/diamondLaptop.jpeg'
import typewriter from '../../assets/images/maxwell/typewriter.jpg'

export default {
    state: {
        full: [
            {
                id: 0,
                name: 'The Disappearing Diamond',
                series: 'Maxwell Mysteries',
                category: 'Play At Home Puzzle Game',
                image: { src: diamondLaptop, alt: "" },
                shortDescription: 'The Paradox Diamond has been stolen. Can you catch the thief and return the diamond to its rightful place?',
                longDescription: ["The Paradox Diamond has been stolen from the New York City Museum. Private Investigator Larry Maxwell is on the case but he needs your help. Can you catch the thief red-handed in this 'print and play' game?", 
                
                "Handcrafted with beautiful illustrations and a wide variety of puzzles providing around 2.5 hours of content and includes offline and online puzzle elements. The game is split into 5 parts, and your progress is saved between parts, so you don't have to play it all at once, unless you want to of course! It's designed for adults but that doesn't mean junior detectives can't take on the challenge. The game content is suitable for all ages and the difficulty is recommended for ages 8+ with some adult assistance."],
                review: { rating: 5, reviewer: 'Review The Room' },
                price: 1000,
                requirements: [
                    'computer with internet access',
                    'colour printer',
                    'scissors',
                    'a pencil'
                ],
                link: "https://boxfile.io/shop/paradox-parlours"
            },
            {
                id: 1,
                name: 'The Kidnapped Professor',
                series: 'Maxwell Mysteries',
                category: 'Play At Home Puzzle Game',
                image: { src: kpNews, alt: "" },
                shortDescription: 'Professor Foxworth was working on a top secret project. Now he is missing. Can you find the professor before it\'s too late?',
                longDescription: ["P.I. Larry Maxwell returns in his latest case! Professor Foxworth has been taken from his office in the heart of New York. Follow the clues, secure the research and find the professor before it is too late. Can you save Professor Foxworth in this 'print and play' game?",

                "The Kidnapped Professor is a story led puzzle game, handcrafted with beautiful illustrations and a wide variety of puzzles providing 2+ hours of content. Boasting both online and offline puzzle elements, search locations, enter codes and solve digital puzzles while also cutting, sticking and folding paper ones. The game is split into 5 levels, and your progress is saved between levels, so you can play it all in one sitting or over multiple sessions.",

                "It's designed for adults but that doesn't mean junior detectives can't take on the challenge. The game content is suitable for all ages and the difficulty is recommended for ages 8+ with some adult assistance.."
                ],
                review: { rating: 5, reviewer: 'Review The Room' },
                price: 1000,
                requirements: [
                    'computer with internet access',
                    'colour printer',
                    'scissors',
                    'a pencil'
                ],
                link: "https://boxfile.io/shop/paradox-parlours"
            },
            {
                id: 2,
                name: 'Demo: The Kidnapped Professor',
                series: 'Maxwell Mysteries',
                category: 'Play At Home Puzzle Game',
                image: { src: typewriter, alt: "" },
                shortDescription: 'A FREE short demo level using the Kidnapped Professor online interface. Can you solve this quick fire mystery?',
                longDescription: ["You arrive at the professor's office to discover it trashed and the professor nowhere to be seen. Be the detective in this short free demo level which uses the online interface of The Kidnapped Professor. This demo is fully online so no printer required, though a pencil may be useful."],
                price: 0,
                link: "https://mysteries-demo.co.uk"
            }
        ]
    }
}
