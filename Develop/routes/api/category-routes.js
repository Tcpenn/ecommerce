const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log('======================');
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: {
          exclude: ['category_id']
        }
      }
    ]
  })
    .then(dbCategoriesData => res.json(dbCategoriesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log('======================');
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['category_id']
      }
    ]
  })
  .then(dbCategoriesData => {
    if(!dbCategoriesData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoriesData);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  console.log('======================');
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoriesData => res.json(dbCategoriesData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log('======================');
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbCategoriesData => {
    if (!dbCategoriesData) {
      res.status(500).json({ message: 'No category with this id'});
      return;
    }
    res.json(dbCategoriesData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  console.log('======================');
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoriesData => {
    if(!dbCategoriesData) {
      res.status(404).json({ message: 'No category with this id'});
      return
    }
    res.json(dbCategoriesData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
