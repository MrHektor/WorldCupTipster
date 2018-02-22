var loginApp = new Vue({
    el: '#loginApp',
    data: {
        email: '',
        password: '',
    },
    methods: {
        login: function(){
            // Call api to check login information            

            // Temp test 
            if(this.email === "test" && this.password === "test"){
                localStorage.setItem("user", "kalle");
                app.checkLogin();
            }
            else{
                alert("Inloggning misslyckades");
            }
        }        
    }           
});