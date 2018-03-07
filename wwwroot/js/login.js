var loginApp = new Vue({
    el: '#loginApp',
    data: {
        email: '',
        password: '',
        loaded: false
    },
    mounted: function () {
        this.loaded = true;
    },
    methods: {
        login: function () {
            // Call api to check login information
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append('email', this.email);
            fd.append('password', this.password);
            return axios.post("http://localhost:81/api/tipster/LoginUser", fd, config)
                .then(function (response) {
                    alert("inloggad");

                    // localStorage.setItem("user",JSON.stringify(user));                
                    // app.checkLogin();
                })
                .catch(function (error) {
                    alert(error);
                });
            // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            // axios.post('http://localhost:81/api/tipster/LoginUser', {
            //     email: 'hej@hopp.nu',
            //     password: 'test'
            //   }, config)
            //   .then(function (response) {
            //     alert("inloggad");

            //     // localStorage.setItem("user",JSON.stringify(user));                
            //     // app.checkLogin();
            //   })
            //   .catch(function (error) {
            //     alert(error);
            //   });
        }
    }
});