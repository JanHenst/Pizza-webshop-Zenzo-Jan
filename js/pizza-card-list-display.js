new Vue({
    el: '#cartItems',
    data: {
        cartPizzas: [
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '11,50',
                img:         'images/vierkant-pizza.jpg'
            },
            
        ],
    },
    mounted() {
    },
    methods: {
        deleteObject: function(index) {
            this.$delete(this.cartPizzas, index);
          }
    }
})

new Vue({
    el: '#cartItemsTwee',
    data: {
        cartPizzasTwee: [
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/vierkant-pizza.jpg'
            },
            {
                title:       'Pizza Carpaccio di Bresoala',
                description: 'Verse dunne pizza in steenoven gebakken met 100% natuurlijke mozzarella, pomodorisaus en gegarneerd met runderhaas (Bresoala uit Valtellinastreek in Lombardije), rucola, pijnboompitten, gedroogde tomaten en grana padano (parmezaan uit povlakte)',
                price:       '€ 11,50 <i>-15%</i>',
                img:         'images/vierkant-pizza.jpg'
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