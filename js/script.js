const { createApp } = Vue;

createApp({
    data() {
        return {
            isRaining : false,
        }
    },
    methods: {
        changeWeather(){
            this.isRaining = !this.isRaining;
        }
    }
}).mount('#app');