<template>
    <p :class="addedClasses" @mouseover.once="startDecrypt()">
        {{ getText }}
    </p>
</template>

<script>
    export default {
        props: {
            inputText: String,
            addedClasses: String
        },

        mounted() {
            this.encryptText(this.inputText)
        },

        data: function () {
            return {
                decryptedText: '',
                encryptedText: '',
                currentlyDecrypting: false,
                shuffle: false
            }
        },

        computed: {
            getText: function () {
                return this.decryptedText + this.encryptedText
            }
        },

        methods: {
            encryptText: function () {
                const textArr = this.inputText.split('')
                textArr.forEach(letter => {
                    if (letter === ' ') {
                        this.encryptedText += ' '
                    } else {
                        this.encryptedText += String.fromCharCode(
                            (Math.random() * 94 + 33) | 0
                        )
                    }
                })
            },

            startDecrypt: function () {
                if (this.currentlyDecrypting) {
                    return
                }

                this.currentlyDecrypting = true
                this.decryptedText = ''
                this.shuffle = true
                this.decryptText()
            },

            decryptText: function () {
                const originalText = this.inputText.split('').reverse()
                let i = 0

                const shuffleInterval = setInterval(() => {
                    // Generate random strings.
                    let j = originalText.length
                    let shuffledText = ''
                    while (j--) {
                        if (originalText[j] === ' ') {
                            shuffledText += ' '
                        } else {
                            shuffledText += String.fromCharCode(
                                (Math.random() * 94 + 33) | 0
                            )
                        }
                    }

                    this.encryptedText = shuffledText

                    // On every 10 cycles, remove a character from the original text to the decoded text
                    if (i++ % 10 === 0) {
                        this.decryptedText += originalText.pop()
                    }

                    // Stop when done
                    if (!originalText.length) {
                        clearInterval(shuffleInterval)
                        this.encryptedText = ''
                        this.currentlyDecrypting = false
                        this.shuffle = false
                    }
                }, 25)
            }
        }
    }
</script>

<style scoped>
    p {
        cursor: default;
    }
</style>
