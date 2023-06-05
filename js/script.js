const { createApp } = Vue;

createApp({
    data() {
        return {
            isRaining : false,
            partecipants : [
                {
                    name : 'Ginetta',
                    role: 'Software Developer',
                    experience : 5
                },
                {
                    name : 'Ginetto',
                    role: 'Designer',
                    experience : 2
                },
                {
                    name : 'Lorenzina',
                    role: 'Junior Software Developer',
                    experience : 1
                },

            ],
        }
    },
    methods: {
        changeWeather(){
            this.isRaining = !this.isRaining;
        }
    }
}).mount('#app');