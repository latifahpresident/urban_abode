
import { useNavigate } from 'react-router-dom';
import { Products } from '../../Store/products';
import ParagraphMediumBold from '../../components/ui/Typography/ParagraphBoldMedium';

  interface ProdListProps {
    products: Products[]

}

 export const ProductsList = ({ products } : ProdListProps) => {
    let navigate = useNavigate() 

    return (
        <div className='my-4 mx-2'>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {products.map((prod, index) => (
                <div key={index} className='h-80 flex items-center flex-col' onClick={() => navigate(`/${prod.id}`)}>
                    <div key={index} className='h-36 w-full'>
                        <img src={prod.images[0]} alt={prod.title} className="h-full w-full"/> 
                    </div>
                    <div className='flex flex-col min-h-[124px] justify-between'>
                        <div className='flex justify-around items-center mt-3 w-full'>
                            {prod.colors.map((color, index) => (
                                <button key={index} className='h-4 w-9 rounded focus:border focus:border-black' style={{backgroundColor: `${color}`}}/>
                            ))}
                        </div>
                        <ParagraphMediumBold className='capitalize text-xs font-medium mt-4 text-darkGreen'>{prod.title}</ParagraphMediumBold>
                        <ParagraphMediumBold className='capitalize text-xs font-medium mt-4 items-end text-black'>{`$ ${prod.price}`}</ParagraphMediumBold>
                    </div>
                </div>
            ))}  
            </div>
        </div>
    )
 }
