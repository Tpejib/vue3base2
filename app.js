Vue.createApp({
    data: () => ({
        html: '<h1>Vue 3 App</h1>',
        title: 'I am Title',
        person: {
            firstName: 'Name',
            lastName: 'Surname',
            age: '16'
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        stopPropagation(e) {
            e.stopPropagation()
        },
        addItem(e) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(e.key);
        },
        remove(idx) {
            this.items.splice(idx, 1)
        },
        log(item) {
            console.log(item);
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')