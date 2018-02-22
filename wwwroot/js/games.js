var gamesApp = new Vue({
    el: '#gamesApp',
    data: {
        games: null
    },
    mounted: function(){
        axios.get('http://localhost:81/api/game')
            .then(function (response) {
                gamesApp.games = response.data;
            })
            .catch(function (error) {
                
            });
    },
    methods: function(){

    }
});