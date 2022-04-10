import Vue from 'vue'

Vue.mixin({
    methods: {
        findIcon: function(tag) {            
            let result = ''
            switch(tag) {
                case 'horror':
                    result = 'skull-outline'
                    break
                
                case 'unique':
                    result = 'star-outline'
                    break
                
                case 'testing':
                    result = 'test-tube'
                    break
                
                case 'immersive':
                    result = 'drama-masks'
                    break

                case 'seated':
                    result = 'sofa-single-outline'
                    break

                case 'mini-game':
                    result = 'alpha-s-box-outline'
                    break

                case 'versus':
                    result = 'fencing'
                    break
                
                case 'pop-up':
                    result = 'archive-arrow-up-outline'
                    break
                
                default:
                    result = 'rodent'
                    break
            }

            return result
        }
    }
})