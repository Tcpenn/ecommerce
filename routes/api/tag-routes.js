const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data 
  console.log('======================');
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      },
      {
        model: ProductTag,
        attributes: ['product_tag', 'tag_id']
      }
    ]
  })
  .then(dbTagsData => res.json(dbTagsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log('======================');
  Tag.findOne({
    where: {
      id: req.body.id
    },
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      },
      {
        model: ProductTag,
        attributes: ['product_tag', 'tag_id']
      }
    ]
  })
  .then(dbTagsData => {
    if (!dbTagsData) {
      res.status(404).json({ message: 'No tag found with this id' })
      return;
    }
    res.json(dbTagsData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

});

router.post('/', (req, res) => {
  // create a new tag
  console.log('======================');
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagsData => res.json(dbTagsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  console.log('======================');
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbTagsData => {
    if(!dbTagsData[0]) {
      res.status(404).json({ message: "No tag with this id" });
      return;
    }
    res.json(dbTagsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  console.log('======================');
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagsData => {
    if(!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
