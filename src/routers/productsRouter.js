import express from "express"
import ProductController from "../controllers/productsController.js"

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('Fullstack Challenge 20201030')
})

router.get('/products', ProductController.allProducts)
router.get('/products/:code', ProductController.findProductByCode)
router.delete('/products/:code', ProductController.deleteProduct)
router.get('/insertControlFields', ProductController.insertControlFields)
router.put('/products/:code', ProductController.insertProduct)



export default router