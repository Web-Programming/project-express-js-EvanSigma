const express=require('express');
const router=express.Router();
const contrllerProduct=require('../../../app_toko_online/controllers/ControllerProducts');

router.post('/',contrllerProduct.create);

router.get('/',contrllerProduct.getAll);

router.get('/:id',contrllerProduct.detailProduct);

router.put('/:id',contrllerProduct.updateProduct);

router.delete('/:id',contrllerProduct.deleteProduct);

module.exports=router;