import Joi from "joi"

const productValidate = (data) => {
    const schema = Joi.object({
        code: Joi.string().required(),
        barcode: Joi.string().required(),
        status: Joi.string().required(),
        imported_t: Joi.date().required(),
        url: Joi.string().required(),
        product_name: Joi.string().required(),
        quantity: Joi.string().required(),
        categories: Joi.string().required(),
        packaging: Joi.string().required(),
        brands: Joi.string().required(),
        image_url: Joi.string().required(),
    })
    return schema.validate(data)
}
export default productValidate