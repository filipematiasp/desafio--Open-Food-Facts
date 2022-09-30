import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    code: String,
    barcode: String,
    status: String,
    imported_t: Date,
    url: String,
    product_name: String,
    quantity: String,
    categories: String,
    packaging: String,
    brands: String,
    image_url: String
})

export default mongoose.model('products', productSchema)