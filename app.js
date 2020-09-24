new Vue({
    el: '#vue-app',
    data: {
        name: 'Anuradha',
        job: 'Engineer',
        website:'https://www.youtube.com/',
        age:25,
        a:0,
        b:0,
        error:false,
        success:false
    },
    methods: {
        greet: function (word) {
            return 'Hello world' + ' ' + word + ' ' + this.name
        },
        add:function (x){
            this.age += x;
        }
    },
    computed:{
        addToA: function (){
            return this.a + this.age
        },
        addToB: function (){
            return this.b + this.age
        }
    }

});