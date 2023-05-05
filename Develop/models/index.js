// import models
const express = require('express');
const sequelize = require('../config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;


const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'tag_id',
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session)

const allRoutes = require("../routes/api/index")
console.log(allRoutes);

app.use(allRoutes)

sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`listenin to port ${PORT}!`)
    })
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
module.exports = router;