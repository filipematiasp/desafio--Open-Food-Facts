import Products from "../model/productSchema.js"
import productValidate from "./validate.js"

async function allProducts (req, res) {
    try {
        const pageNumber = req.body.pageNumber || 1
        const nPerPage = req.body.nPerPage || 10

        let payload = {}
        let products = await Products.find().skip(pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0).limit(nPerPage)
        let count = await Products.count()

        // console.log('somatorio', count);

        payload.sizeProducts = count
        payload.products = products

        // console.log('segue os produtos', products);
        res.status(200).send(payload)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

async function findProductByCode (req, res) {
    try {
        const code = req.params.code

        let product = await Products.find({code})

        if(!product.length) {
            res.status(200).send("Product not found")
        } else {
            // console.log('segue o produto', product);
            res.status(200).send(product)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteProduct (req, res) {
    try {
        const code = req.params.code

        let product = await Products.findOneAndUpdate({code}, {status: "trash"})

        if(!product){
            res.status(200).send("Product not found")
        } else {
            res.status(200).send("Deleted product: " + product)
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

async function insertProduct (req, res) {
    try {
        const payload = req.body
        const { error } = productValidate(payload)
        if(error) {
            return res.status(400).send(error)
        }

        const code = req.params.code
        let product = await Products.findOneAndUpdate({code}, {status: "trash"})

        if(!product){
            res.status(200).send("Product not found")
        } else {
            res.status(200).send("Updated product: " + product)
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

async function insertControlFields () {
    try {
        const date = new Date()
        const product = await Products.updateMany({}, {status: "published", imported_t: date})
        console.log('finalizou: ', product);
    } catch (error) {
        console.log(error);
    }
}

function sum(a, b) {
    return a + b;
}


export default {
    allProducts,
    findProductByCode,
    deleteProduct,
    insertControlFields,
    insertProduct,
    sum
}