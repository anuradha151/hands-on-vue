new Vue({
    el: '#vue-app',
    data: {
        name: 'Anuradha',
        job: 'Engineer',
        website:'https://www.youtube.com/',
        age:25
    },
    methods: {
        greet: function (word) {
            return 'Hello world' + ' ' + word + ' ' + this.name
        }
    }

});