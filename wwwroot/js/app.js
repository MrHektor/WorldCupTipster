var app = new Vue({
    el: '#app',
    data: {
        user: 33,
        pageContent: '',
        pageParams: '',
        apiUrl: 'http://localhost:81/api/tipster/'
    },
    mounted: function () {
        this.checkLogin();
        this.preloadImages();
    },
    methods: {
        logout: function () {
            localStorage.removeItem("user");
            this.user = null;
            this.loadPage("login");
        },
        checkLogin: function () {
            if (localStorage.getItem("user")) {
                this.user = JSON.parse(localStorage.getItem("user"));
                this.pageParams = {
                    userId: this.user.id
                };
                this.loadPage("games");
            }
            else {
                this.loadPage("login");
            }
        },
        preloadImages: function () {
            var images = new Array()
            function preload() {
                for (i = 0; i < preload.arguments.length; i++) {
                    images[i] = new Image()
                    images[i].src = preload.arguments[i]
                }
            }
            preload(
                "wwwroot/images/flags/Egypten.png",
                "wwwroot/images/flags/Ryssland.png",
                "wwwroot/images/flags/Saudiarabien.png",
                "wwwroot/images/flags/Uruguay.png",
                "wwwroot/images/flags/Sverige.png",
                "wwwroot/images/flags/Danmark.png",
                "wwwroot/images/flags/Sydkorea.png",
                "wwwroot/images/flags/Marocko.png",
                "wwwroot/images/flags/Iran.png",
                "wwwroot/images/flags/Portugal.png",
                "wwwroot/images/flags/Spanien.png",
                "wwwroot/images/flags/Frankrike.png",
                "wwwroot/images/flags/Australien.png",
                "wwwroot/images/flags/Argentina.png",
                "wwwroot/images/flags/Island.png",
                "wwwroot/images/flags/Peru.png",
                "wwwroot/images/flags/Kroatien.png",
                "wwwroot/images/flags/Nigeria.png",
                "wwwroot/images/flags/Costa Rica.png",
                "wwwroot/images/flags/Serbien.png",
                "wwwroot/images/flags/Tyskland.png",
                "wwwroot/images/flags/Mexiko.png",
                "wwwroot/images/flags/Brasilien.png",
                "wwwroot/images/flags/Schweiz.png",
                "wwwroot/images/flags/Belgien.png",
                "wwwroot/images/flags/Panama.png",
                "wwwroot/images/flags/Tunisien.png",
                "wwwroot/images/flags/England.png",
                "wwwroot/images/flags/Colombia.png",
                "wwwroot/images/flags/Japan.png",
                "wwwroot/images/flags/Polen.png",
                "wwwroot/images/flags/Senegal.png"
            )
        },
        loadPage: function (page) {
            axios.get('pages/' + page + '.html')
                .then(function (response) {
                    // Set page content
                    app.pageContent = response.data;

                    // Load page script
                    var scriptSrc = 'wwwroot/js/' + page + '.js';
                    var scripts = document.getElementsByTagName('script');
                    for (var i = scripts.length; i--;) {
                        if (scripts[i].src == scriptSrc) return false;
                    }

                    var script = document.createElement('script');
                    script.src = scriptSrc;
                    document.head.appendChild(script);
                })
                .catch(function (error) {
                    alert('Fel vid laddning av sida.');
                });
        }
    }
});

function redirectFromMenu(e, page) {
    e.classList.add("fast-spin");
    setTimeout(() => {
        e.classList.remove("fast-spin");
    }, 250);

    if(page === "games"){
        app.pageParams = {
            userId: app.user.id
        };
    }
    app.loadPage(page);    
}