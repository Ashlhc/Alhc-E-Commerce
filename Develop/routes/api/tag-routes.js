const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
Tag.findAll({
  include:[Product]
})
  .then((tags)=>{
  res.json(tags);
})
  .catch((err)=>{
    console.log(err);
    res.status(500).json({msg:"error",err});
  });
});
  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id)
  .then(tagData=>{
    res.json(tagData);
  })
  .catch((err)=>{
    console.log(err);
    res.status(500).json({msg:"error",err});
  });
});

  // create a new tag
router.post('/', (req, res) => {
  Tag.create({
    id:req.params.id,
    tag_name:req.body.name,
  })
  .then((newTag)=>{
    res.json(newTag);
  })
  .catch((err)=>{
    console.log(err);
    res.status(500).json({msg:"error",err});
  });
});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update({
    id:req.params.id,
    tag_name:req.body.name
  },{
    where:{
      id:req.params.id
    },
  }
)
  .then((editTag)=>{
    res.json(editTag);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error",err})
  });
});

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id
    }
  }).then((delTag)=>{
    res.json(delTag);
  })
    .catch((err)=>{
    console.log(err);
    res.status(500).json({msg:"error",err});
  });
});

module.exports = router;
