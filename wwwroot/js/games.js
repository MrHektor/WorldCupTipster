var gamesApp = new Vue({
    el: '#gamesApp',
    data: {
        games: null,
        user: null,
        editable: false,
        loaded: false
    },
    mounted: function () {
        axios.get(app.apiUrl + 'GetAllBetsByUser?userId=' + app.pageParams.userId)
            .then(function (response) {
                gamesApp.games = response.data.games;
                gamesApp.user = response.data.user;
                gamesApp.editable = response.data.user.id === app.user.id;

                gamesApp.games.forEach(function (game) {
                    let gameDate = new Date(game.starts);
                    game.date = gameDate.getFullYear() + "-" + "0" + (gameDate.getMonth() + 1) + "-" + ("0" + (gameDate.getDate())).slice(-2);
                    game.time = ("0" + (gameDate.getHours())).slice(-2) + " : " + ("0" + (gameDate.getMinutes())).slice(-2);

                    game.editable = (new Date(game.starts) > Date.now()) && response.data.user.id === app.user.id;

                    if (game.resultHomeGoals && game.resultAwayGoals) {
                        if (game.resultHomeGoals === game.betHomeGoals && game.resultAwayGoals === game.betAwayGoals) {
                            game.class = "darkgreen";
                        }
                        else if ((game.resultHomeGoals > game.resultAwayGoals && game.betHomeGoals > game.betAwayGoals)
                            || (game.resultHomeGoals < game.resultAwayGoals && game.betHomeGoals < game.betAwayGoals)
                            || (game.resultHomeGoals === game.resultAwayGoals && game.betHomeGoals === game.betAwayGoals)) {
                            game.class = "lightgreen";
                        }
                        else {
                            game.class = "red";
                        }
                    }
                    else {
                        game.class = "";
                    }
                });
                gamesApp.loaded = true;
                gamesApp.calculateRoundOf16();
            })
            .catch(function (error) {

            }); 
    },
    methods: {
        calculateRoundOf16: function(){
            let betCompleted = true;
            let groupGames = gamesApp.games.filter(game => game.stage === 32);

            for(let game of groupGames){
                if(!game.betHomeGoals || !game.betAwayGoals){
                    betCompleted = false;
                    break;
                }
            }

            if(!betCompleted){
                return;
            }


        },
        calculateRoundOf8: function(){

        },
        calculateSemis: function(){

        },
        calculateFinal: function(){

        },
    }
});