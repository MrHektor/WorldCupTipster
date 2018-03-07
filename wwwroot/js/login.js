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
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append('email', this.email);
            fd.append('password', this.password);
            return axios.post(app.apiUrl + "LoginUser", fd, config)
                .then(function (response) {
                    localStorage.setItem("user", JSON.stringify(response.data));                
                    app.checkLogin();
                })
                .catch(function (error) {
                    alert(error);
                });
        }
    }
});