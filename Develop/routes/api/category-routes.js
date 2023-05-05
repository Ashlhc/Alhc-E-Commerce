const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
  // find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  })
  .then((categories)=>{
    res.json(categories);
  })
  .catch((err)=>{
    console.log(err);
    res.status(500).json({msg:"error",err});
  });
});
  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id)
  .then((categoryData)=>{
    res.json(categoryData);
  })
  .catch((err)=>{
    console.log(err);
    res.status(500).json({msg:"error",err});
  });
});

  // create a new category
router.post('/', (req, res) => {
  Category.create({
    id:req.params.id,
    category_name:req.body.name,
  }).then((newCategory)=>{
    res.json(newCategory);
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({msg:"error",err});
  });
});

  // update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      id:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    }
  )
    .then((editCategory)=>{
      res.json(editCategory);
    })
    .catch((err)=>{
      console.log(err);
      res.status(500).json({msg:"error",err});
    });
});

  // delete a category by its `id` value
router.delete('/:id', (req, res) => {
Category.destroy({
  where:{
    id:req.params.id
  },
})
.then((delCategory)=>{
  res.json(delCategory);
}).catch((err)=>{
  console.log(err);
  res.status(500).json({msg:"error,err"});
  });
});

module.exports = router;
