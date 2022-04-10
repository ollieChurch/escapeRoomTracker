export default {
    state: {
        full: [
            {
                venue: 'Mystery Rooms UK',
                city: 'Camberley',
                country: 'UK',
                gamesPlayed: [{ name: 'The Suspect' }]
            },
            {
                venue: 'Cryptic Escapes',
                city: 'Norwich',
                country: 'UK',
                gamesPlayed: [
                    { name: 'The Treasure Of Greenbeard', fail: true },
                    { name: 'The Haunted', fail: true, tags: ['horror'] },
                    { name: 'Mafia Robbery' }
                ]
            },
            {
                venue: 'Paradox Parlours',
                city: 'Guildford',
                country: 'UK',
                gamesPlayed: [
                    {
                        name: 'The Case Of The Missing Gun',
                        topTen: 4,
                        description:
                            'My third escape room, great set and story driven. Puzzle structure played to my strengths and loved the secret surprises. Mad and energetic excitement and fun throughout with excellent hosting.'
                    },
                    {
                        name: 'Venus',
                        topTen: 9,
                        tags: ['testing', 'unique'],
                        description:
                            'Even as the first team to test this room the potential behind it was huge. Puzzles which go deeper and require more careful thought than most. But the standout is Venus herself, a fully interactive and hilarious A.I. I could have spent the whole time just chatting to her.'
                    },
                    { name: 'The Recording Studio', tags: ['testing'] }
                ]
            },
            {
                venue: 'Paradox Parlours',
                city: 'Dorking',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Missing In Action', tags: ['testing'] },
                    {
                        name: 'Drosselmeyers Workshop',
                        tags: ['testing', 'mini-game']
                    },
                    { name: 'Toil And Trouble', tags: ['testing', 'mini-game'] }
                ]
            },
            {
                venue: 'Deadlocked',
                city: 'Reading',
                country: 'UK',
                gamesPlayed: [
                    { name: 'The Pheonix Research' },
                    { name: 'The Testing Chamber' }
                ]
            },
            {
                venue: 'Escape Reading',
                city: 'Reading',
                country: 'UK',
                gamesPlayed: [
                    { name: 'The Library' },
                    { name: 'The Bank Robbery' },
                    { name: 'Vampire', tags: ['horror'] },
                    { name: 'Kidnapped' },
                    { name: 'Blown Away' },
                    {
                        name: 'The Bank Robbery (new)',
                        topTen: 10,
                        tags: ['testing'],
                        description:
                            'Bursting out of the back of a van into a convincingly modern day bank, cracking a giant classic looking vault door as well as ripping an ATM open by chaining it to the van. This room was a lot of fun in so many places.'
                    }
                ]
            },
            {
                venue: 'Knockout',
                city: 'Reading',
                country: 'UK',
                gamesPlayed: [
                    { name: '9 to 5 Assasin' },
                    { name: 'Prison Break' },
                    { name: 'Mad Scientist' }
                ]
            },
            {
                venue: 'Time Trap',
                city: 'Reading',
                country: 'UK',
                gamesPlayed: [
                    {
                        name: 'Rebellion',
                        topTen: 8,
                        description:
                            'Creating a castle inside some fairly standard modern day rooms is no easy task. I loved all of the physical analogue mechanics that made this room work and the non-linear puzzles which ended up linking together in an extremely satisfying ending.'
                    },
                    { name: 'Imaginarium' },
                    { name: 'The Divide', tags: ['pop-up'] },
                    { name: 'Station X', tags: ['versus'] },
                    { name: 'Pudding Lane', tags: ['immersive'] }
                ]
            },
            {
                venue: 'Containment',
                city: 'Guildford',
                country: 'UK',
                gamesPlayed: [{ name: 'The Vault' }, { name: 'The Bomb' }]
            },
            {
                venue: 'Exciting Escapes',
                city: 'Basingstoke',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Murder At The Movies' },
                    { name: 'Dark Deeds And Groceries' }
                ]
            },
            {
                venue: 'Tulleys',
                city: 'Crawley',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Mutiny', tags: ['immersive'] },
                    { name: 'Outfitters', tags: ['immersive'] },
                    { name: 'Dodge', tags: ['immersive'] },
                    {
                        name: 'Nethercott Manor',
                        fail: true,
                        tags: ['immersive', 'horror']
                    },
                    { name: 'Spellcraft', tags: ['immersive', 'unique'] }
                ]
            },
            {
                venue: 'Escape Rooms',
                city: 'London',
                country: 'UK',
                gamesPlayed: [{ name: "Pharaoh's Chamber", fail: true }]
            },
            {
                venue: 'Clue Quest',
                city: 'London',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Operation Blacksheep' },
                    { name: 'Revenge Of The Sheep' }
                ]
            },
            {
                venue: 'Pier Pressure',
                city: 'Brighton',
                country: 'UK',
                gamesPlayed: [{ name: 'Modrophenia' }, { name: 'Raver Quest' }]
            },
            {
                venue: 'Bewilderbox',
                city: 'Brighton',
                country: 'UK',
                gamesPlayed: [
                    { name: 'The Bewilderbox Initiative' },
                    { name: 'Judgement D.A.V.E', tags: ['immersive'] }
                ]
            },
            {
                venue: 'Handmade Mysteries',
                city: 'Brighton',
                country: 'UK',
                gamesPlayed: [{ name: "Lady Chastity's Reserve" }]
            },
            {
                venue: 'ExCLUEsive Games',
                city: 'Newbury',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Lost Island Escape' },
                    { name: 'Wild Wild West', tags: ['immersive'] }
                ]
            },
            {
                venue: 'The Escape Game',
                city: 'Orlando, FL',
                country: 'USA',
                gamesPlayed: [
                    {
                        name: 'Special Ops: Mysterious Market',
                        topTen: 3,
                        tags: ['immersive'],
                        description:
                            'This was a beautifully decorated room with high tech puzzles, immersive atmosphere, and several twist endings. We had a couple of tech malfunctions but still hugely impressive and co-operative puzzling. This really demonstrated what a big budget has the potential to create.'
                    },
                    { name: 'Prison Break', tags: ['immersive'] }
                ]
            },
            {
                venue: 'Aroom',
                city: 'Budapest',
                country: 'Hungary',
                gamesPlayed: [
                    { name: 'The Metro', tags: ['immersive'] },
                    { name: 'The Heist' }
                ]
            },
            {
                venue: 'Mars Mission',
                city: 'Budapest',
                country: 'Hungary',
                gamesPlayed: [{ name: 'Mars Mission' }]
            },
            {
                venue: 'Mystique Room',
                city: 'Budapest',
                country: 'Hungary',
                gamesPlayed: [
                    {
                        name: 'Pirate Bay',
                        topTen: 5,
                        tags: ['immersive'],
                        description:
                            'This has to be the most impressive set I have ever walked into. Looking up at a full size pirate ship while stood on the dock, climbing up onto the deck, down into the ship, up on top of the ship. An experience not rivalled by any other room.'
                    },
                    { name: 'The Tower Of Wollongong', tags: ['versus'] },
                    { name: 'Time Machine' },
                    { name: 'The Iron Throne' },
                    { name: "The Pharaoh's Burial Chamber" },
                    { name: "Shogun's Shadow" },
                    { name: 'The Cathedral' }
                ]
            },
            {
                venue: 'Neverland',
                city: 'Budapest',
                country: 'Hungary',
                gamesPlayed: [{ name: 'Prison Break' }]
            },
            {
                venue: 'Goszdu Mission',
                city: 'Budapest',
                country: 'Hungary',
                gamesPlayed: [
                    { name: 'The White Room' },
                    { name: 'Prison Mission' },
                    { name: 'Mafia Mission' }
                ]
            },
            {
                venue: 'E-Exit',
                city: 'Budapest',
                country: 'Hungary',
                gamesPlayed: [
                    {
                        name: 'Secret Subway',
                        topTen: 1,
                        tags: ['immersive', 'unique'],
                        description:
                            'This room was FULL of exciting surprises and a great flow, everything made sense and there was a palpable excitement from everyone on the team. Brilliant concept of having to take our power generator with us between rooms as well.'
                    },
                    { name: '1984' },
                    { name: 'Heaven and Hell' },
                    { name: 'Santa Muerte', tags: ['immersive', 'unique'] }
                ]
            },
            {
                venue: 'Locked Room',
                city: 'Budapest',
                country: 'Hungary',
                gamesPlayed: [
                    { name: 'Serial Killer' },
                    { name: 'Research Base' }
                ]
            },
            {
                venue: 'Clue Cracker',
                city: 'Tunbridge Wells',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Jail Break' },
                    {
                        name: 'Diamond Dogs',
                        topTen: 6,
                        tags: ['immersive'],
                        description:
                            "Fun and frantic! This game had a bit of everything and the overriding feeling to it all was fun. It had a great story which didn't take itself too seriously and the puzzles were just the right to keep me thinking without disrupting the flow. Finished the game with a big smile. Job done. [Also my 100th game!]"
                    },
                    { name: 'Temple Quest', tags: ['immersive'] }
                ]
            },
            {
                venue: 'Clued Up',
                city: 'Norwich',
                country: 'UK',
                gamesPlayed: [{ name: 'Nuclear Countdown' }]
            },
            {
                venue: 'Escapement',
                city: 'Margate',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Pirates Of Polaris', tags: ['immersive'] },
                    { name: 'The Pit', tags: ['immersive'] },
                    { name: 'Egyptian Exodus' }
                ]
            },
            {
                venue: 'Panic Rooms',
                city: 'Gravesend',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Dino Land' },
                    { name: 'Loop', tags: ['unique'] }
                ]
            },
            {
                venue: 'Mind Maze',
                city: 'Prague',
                country: 'Czech Republic',
                gamesPlayed: [
                    {
                        name: 'Galactic Pioneers',
                        topTen: 2,
                        tags: ['immersive'],
                        description:
                            'This was a whole lot of fun. Puzzles required some thinking and working out but nothing extensively difficult and we managed to smash it without worrying too much about time. The whole experience was extremely story led and immersive in design and finished with a Space Team-esque puzzle that was fun and frantic. Good, characterful clue system as well.'
                    }
                ]
            },
            {
                venue: 'The Chamber',
                city: 'Prague',
                country: 'Czech Republic',
                gamesPlayed: [{ name: 'Wonderland' }]
            },
            {
                venue: 'A.I. Escapes',
                city: 'London',
                country: 'UK',
                gamesPlayed: [{ name: 'M.A.D.' }, { name: 'Project Delta' }]
            },
            {
                venue: "Houdini's",
                city: 'Southampton',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Titanic' },
                    { name: 'Escape From Alcatraz' },
                    { name: 'Extinct' }
                ]
            },
            {
                venue: 'Escape From The Room',
                city: 'Epsom',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Return Of Old Maid Milly', tags: ['horror'] },
                    { name: 'Chambers Of Champions', tags: ['versus'] },
                    {
                        name: 'Enigma Express: The Lady Vanishes',
                        tags: ['seated']
                    },
                    {
                        name: 'Enigma Express: Strangers On A Train',
                        tags: ['seated']
                    },
                    {
                        name: 'Enigma Express: A Curious Contraption',
                        tags: ['seated']
                    },
                    { name: 'The Hex' }
                ]
            },
            {
                venue: 'Hounds',
                city: 'Crawley',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Questionable Ethics', tags: ['immersive'] }
                ]
            },
            {
                venue: 'Suffolk Escape Room',
                city: 'Saxmundham',
                country: 'UK',
                gamesPlayed: [{ name: 'Air Raid' }]
            },
            {
                venue: 'Escape Hunt',
                city: 'Norwich',
                country: 'UK',
                gamesPlayed: [{ name: 'Aladdin' }]
            },
            {
                venue: 'Want To Escape...',
                city: 'Rushden',
                country: 'UK',
                gamesPlayed: [
                    { name: "Teacher's Revenge" },
                    { name: 'The Guardian Of The Gallery' },
                    { name: 'Shimmy Shimmy Cocoa Pop' },
                    { name: 'Conspiracist' }
                ]
            },
            {
                venue: 'Make Your Escape...',
                city: 'Derby',
                country: 'UK',
                gamesPlayed: [{ name: 'Dystopia' }, { name: 'Utopia' }]
            },
            {
                venue: 'Darkmaster',
                city: 'Crowborough',
                country: 'UK',
                gamesPlayed: [
                    {
                        name: 'Into The Reliquary',
                        topTen: 7,
                        tags: ['immersive', 'unique'],
                        description:
                            "Highly immersive set design which required entering a tomb, exploring the depths by rope ladder and even navigating a river cave by inflatable boat! But what truly earns this room a place on the top 10 is it's totally unique 'moving sands' effect which made me question reality for more than a second."
                    },
                    { name: 'One Wing Airlines', tags: ['immersive', 'unique'] }
                ]
            },
            {
                venue: 'Gatwick Escape Rooms',
                city: 'Crawley',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Crazy Cat Lady' },
                    { name: 'An Hour To Kill' }
                ]
            },
            {
                venue: 'Tricky Escape',
                city: 'Walton-On-The-Naze',
                country: 'UK',
                gamesPlayed: [
                    { name: 'Unhappily Ever After' },
                    { name: 'The Grand Portobello Hotel Heist' }
                ]
            },
            {
                venue: 'Tricky Escape',
                city: 'Clacton-On-Sea',
                country: 'UK',
                gamesPlayed: [{ name: 'A Race Against Time' }]
            }
        ],

        filtered: []
    },

    mounted() {
        this.$store.dispatch('filterList')
    },

    getters: {
        getFullList: function (state) {
            return state.full.sort((a, b) => (a.venue > b.venue ? 1 : -1))
        },

        getFilteredList: function (state) {
            const venues = state.filtered.sort((a, b) =>
                a.venue > b.venue ? 1 : -1
            )
            return venues
        },

        getTopTen: function (state) {
            const result = []
            state.full.forEach(venue => {
                venue.gamesPlayed.forEach(game => {
                    game.topTen &&
                        result.push({
                            venue,
                            game
                        })
                })
            })

            return result.sort((a, b) =>
                a.game.topTen > b.game.topTen ? 1 : -1
            )
        },

        getTotalNumber: function (state) {
            let counter = 0
            state.full.forEach(venue => {
                venue.gamesPlayed.forEach(() => {
                    counter++
                })
            })

            return counter
        },

        getTags: function (state) {
            let result = []
            state.full.forEach(venue => {
                venue.gamesPlayed.forEach(game => {
                    if (game.tags) {
                        game.tags.forEach(tag => {
                            !result.includes(tag) && result.push(tag)
                        })
                    }
                })
            })

            return result
        }
    },

    mutations: {
        setFiltered: function (state, update) {
            state.filtered = update
        }
    },

    actions: {
        filterList: function ({ commit, getters }, { tag, text }) {
            const fullList = getters.getFullList

            if (!text && !tag) {
                return commit('setFiltered', fullList)
            }

            let result = []

            if (tag) {
                result = fullList.filter(venue => {
                    let bool = false
                    venue.gamesPlayed.forEach(game => {
                        if (tag === 'topTen') {
                            if (game.topTen) {
                                return (bool = true)
                            }
                        } else {
                            if (game.tags && game.tags.includes(tag)) {
                                return (bool = true)
                            }
                        }
                    })
                    return bool
                })
            } else {
                result = fullList
            }

            if (text) {
                result = result.filter(item => {
                    const input = text.toLowerCase()
                    const { venue, city, country, gamesPlayed } = item
                    let roomMatch = false
                    gamesPlayed.forEach(game => {
                        roomMatch = game.name.toLowerCase().includes(input)
                    })

                    return (
                        venue.toLowerCase().includes(input) ||
                        city.toLowerCase().includes(input) ||
                        country.toLowerCase().includes(input) ||
                        roomMatch
                    )
                })
            }

            commit('setFiltered', result)
        },

        checkTag: function () {}
    }
}
