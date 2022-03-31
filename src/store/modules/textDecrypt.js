export default {
    state: {
        inputText: '',
        decryptedText: '',
        encryptedText: '',
        currentlyDecrypting: false,
        shuffle: false
    },

    mutations: {
        setInputText: function(state, inputText) {
            state.inputText = inputText
        }
    },

    getters: {
        getDecryptText: function(state) {
            return state.decryptedText + state.encryptedText
        }
    },

    actions: {
        useTextDecrypt: function(context, inputText) {
            context.commit('setInputText', inputText)
            context.dispatch('encryptText')
        },

        encryptText: function(context) {
            const textArr = context.state.inputText.split('')
            textArr.forEach(letter => {
                 if (letter === ' ') {
                    context.state.encryptedText += ' '
                 } else {
                    context.state.encryptedText += String.fromCharCode((Math.random()*94+33) | 0)
                 }
            })
        },

        startDecrypt: function(context) {
            if (context.state.currentlyDecrypting) { return }

            context.state.currentlyDecrypting = true
            context.state.decryptedText = ''
            context.state.shuffle = true
            context.dispatch('decryptText')
        },

        decryptText: function(context) {
            const originalText = context.state.inputText.split('').reverse()
            let i = 0;

            const shuffleInterval = setInterval(function(){
                // Generate random strings. 
                let j = originalText.length
                let shuffledText = ''
                while(j--) {
                    if (originalText[j] === ' ') {
                        shuffledText += ' '
                    } else {
                        shuffledText += String.fromCharCode((Math.random()*94+33) | 0)
                    }
                }
                context.state.encryptedText = shuffledText

                // On every 10 cycles, remove a character from the original text to the decoded text
                if(i++ % 10 === 0) {
                    context.state.decryptedText += originalText.pop()
                }

                // Stop when done
                if(!originalText.length) {
                    clearInterval(shuffleInterval)
                    context.state.encryptedText = ''
                    context.state.currentlyDecrypting = false
                    context.state.shuffle = false
                }
            },25)
        }

    }
}