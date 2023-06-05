const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'V-for',
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
            console.log(this);
        }
    }
}).mount('#app');


let a = 1;

console.log(a); // 1

a = 2;

// § a quando vieni cambiato aggiorna tutti quelli che ti usano come variabile
// § tutte le dipendenze di a dovranno essere aggiornate con il nuovo a