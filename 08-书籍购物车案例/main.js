const app = new Vue({
    el: "#app",
    data: {
        books: [{
                id: 1,
                name: "《算法导论》",
                date: "2006-6",
                price: "85.00",
                count: 1
            },
            {
                id: 2,
                name: "《UNIX编程艺术》",
                date: "2006-2",
                price: "59.00",
                count: 1
            },
            {
                id: 3,
                name: "《编程珠玑》",
                date: "2006-6",
                price: "39.00",
                count: 1
            },
            {
                id: 4,
                name: "《代码大全》",
                date: "2006-6",
                price: " 128.00",
                count: 1
            }

        ]
    },
    methods: {
        increment(index) {
            console.log(index);
            this.books[index].count++
        },
        decrement(index) {
            if (this.count < 0) {

                $("#decrement").disabled = true

            } else {
                this.books[index].count--
            }



        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            //1.
            //     for (let i = 0; i < this.books.length; i++) {
            //         totalPrice += this.books[i].price * this.books[i].count
            //     }
            //     return totalPrice
            // }

            // 2.for(let i in this.books)

            // for (let i in this.books) {
            //     const book = this.books[i]
            //     totalPrice += book.price * book.count
            // }

            //3.for(let i of this.books)
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            // }
            // return totalPrice
            return this.books.reduce(function(preValue, book) {
                return preValue + book.price * book.count
            }, 0)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})

