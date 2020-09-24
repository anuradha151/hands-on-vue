new Vue({
    el: '#vue-app',
    data: {
        name: 'Anuradha',
        job: 'Engineer',
        website:'https://www.youtube.com/'
    },
    methods: {
        greet: function (word) {
            return 'Hello world' + ' ' + word + ' ' + this.name
        }
    }

});