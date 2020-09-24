new Vue({
    el: '#vue-app',
    data: {
        name: 'Anuradha',
        job: 'Development',
        website: 'https://www.youtube.com/',
        age: 25,
        a: 0,
        b: 0,
        error: false,
        success: false,
        characters: ['Spiderman', 'Batman', 'Superman'],
        pawns: [
            {name: 'Kavinda', age: 23},
            {name: 'Usitha', age: 24},
            {name: 'Vishwa', age: 21},
        ],
        output: 'Your favourite superhero'
    },
    methods: {
        greet: function (word) {
            return 'Hello world' + ' ' + word + ' ' + this.name
        },
        add: function (x) {
            this.age += x;
        },
        readRefs: function () {
            console.log(this.$refs.input.value)
            this.output=this.$refs.input.value
        }
    },
    computed: {
        addToA: function () {
            return this.a + this.age
        },
        addToB: function () {
            return this.b + this.age
        }
    }

});