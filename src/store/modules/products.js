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
                text: 'A short description of the product and how much fun it is. Can you solve the puzzles?!? Find out now.',
                review: { rating: '5', reviewer: 'Review The Room' }
            },
            {
                id: 1,
                name: 'The Kidnapped Professor',
                series: 'Maxwell Mysteries',
                category: 'Play At Home Puzzle Game',
                image: { src: kpNews, alt: "" },
                text: 'A short description of the product and how much fun it is. Can you solve the puzzles?!? Find out now.',
                review: { rating: '5', reviewer: 'Review The Room' }
            },
            {
                id: 2,
                name: 'Demo: The Kidnapped Professor',
                series: 'Maxwell Mysteries',
                category: 'Play At Home Puzzle Game',
                image: { src: typewriter, alt: "" },
                text: 'A short description of the product and how much fun it is. Can you solve the puzzles?!? Find out now.'
            }
        ]
    }
}
