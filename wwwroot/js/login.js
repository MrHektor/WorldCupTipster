var loginApp = new Vue({
    el: '#loginApp',
    data: {
        email: '',
        password: '',
        loaded: false
    },
    mounted: function(){
        this.loaded = true;
    },
    methods: {
        login: function(){
            // Call api to check login information            

            // Temp test 
            if(this.email === "test" && this.password === "test"){
                var user = {
                    id: 1,
                    email: 'enepost@gmail.com',
                    firstname: 'Kalle',
                    lastname: 'Anka'
                };

                localStorage.setItem("user",JSON.stringify(user));                
                app.checkLogin();
            }
            else{
                alert("Inloggning misslyckades");
            }
        }        
    }           
});