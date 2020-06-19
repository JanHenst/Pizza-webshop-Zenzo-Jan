new Vue({
    el: '#cartItemsTwee',
    data: {
        cartPizzasTwee: [
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Fresh thin pizza in a brick oven baked with 100% natural mozzarella, pomodori sauce and topped with beef tenderloin (Bresoala from Valtellina region in Lombardy), arugula, pine nuts, dried tomatoes and grana padano (parmesan from po plain).',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/pizza-list-1.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Fresh thin pizza in a brick oven baked with 100% natural mozzarella, pomodori sauce and topped with beef tenderloin (Bresoala from Valtellina region in Lombardy), arugula, pine nuts, dried tomatoes and grana padano (parmesan from po plain).',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/pizza-list-2.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Fresh thin pizza in a brick oven baked with 100% natural mozzarella, pomodori sauce and topped with beef tenderloin (Bresoala from Valtellina region in Lombardy), arugula, pine nuts, dried tomatoes and grana padano (parmesan from po plain).',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/pizza-list-3.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Fresh thin pizza in a brick oven baked with 100% natural mozzarella, pomodori sauce and topped with beef tenderloin (Bresoala from Valtellina region in Lombardy), arugula, pine nuts, dried tomatoes and grana padano (parmesan from po plain).',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/pizza-list-4.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Fresh thin pizza in a brick oven baked with 100% natural mozzarella, pomodori sauce and topped with beef tenderloin (Bresoala from Valtellina region in Lombardy), arugula, pine nuts, dried tomatoes and grana padano (parmesan from po plain).',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/pizza-list-5.jpg'
            },
            
        ],
    },
    mounted() {
    },
    methods: {
        deleteObject: function(index) {
            this.$delete(this.cartPizzasTwee, index);
          }
    }
})