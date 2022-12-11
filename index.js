const express = require ('express')
const app = express();
const cors = require('cors')
const shop = require('./shop.json');
const categories = require('./categories.json')
const port = process.env.PORT || 5000;
app.use(cors())




app.get('/', (req, res) => {
    res.send('Welcome')

})

app.get('/shop-categories', (req , res) => {

    res.send(categories)
})
app.get('/category/:id', (req , res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(shop)
    } else {
        const category_shop = shop.filter(n => n.category_id === id);
    res.send(category_shop)
    }
    
}
)

app.get('/shop', (req , res) => {
    res.send(shop)
})

app.get('/shop/:id', (req , res) => {
    const id = req.params.id;
    const selectedShop = shop.find(s => s._id === id);
    res.send(selectedShop);
});

app.listen(port, () => {
    console.log('Running', port);
})