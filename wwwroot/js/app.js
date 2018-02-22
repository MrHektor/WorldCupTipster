var app = new Vue({
    el: '#app',
    data: {
        user: null,
        pageContent: ''
    },
    mounted: function(){
        this.checkLogin();
    },
    methods: {
        logout: function(){
            localStorage.removeItem("user");
            this.user = null;  
            this.loadPage("login"); 
        },
        checkLogin: function(){
            if(localStorage.getItem("user")){
                this.user = localStorage.getItem("user");
                this.loadPage("games");
            }
            else{
                this.loadPage("login");                
            }
        },
        loadPage: function(page){
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