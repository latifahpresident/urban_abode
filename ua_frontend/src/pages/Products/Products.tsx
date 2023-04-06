
interface ProductProp {
    id?: number | undefined
    title: string
    description: string
    price: number
    category: string
    quanity: number
    outOfStock: boolean
    images: string 
}
interface ProdListProps {
    products: ProductProp[]
}
 export const ProductsList = ({ products } : ProdListProps) => {

    console.log("Products*****",products)

    return (
        <div className='border'>
            prod list
            {products && products.map((prod, index) => (
                <div key={index}>
                    <div>
                        <img src={prod.images[0]} alt={prod.title}/>
                    </div>
                </div>
            ))}
        </div>
    )
 }
