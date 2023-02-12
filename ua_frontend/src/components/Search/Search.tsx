import Icon from "../ui/Icons/Icon";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <form className='w-72 appearance-none hidden lg:block'>
            <input aria-label="Search" value='' placeholder='What can we help you find?' className='appperance-none text-sm h-11 w-full pl-2 placeholder:text-cream bg-[#0000] border border-cream'/>
            <Icon iconName={faMagnifyingGlass} className='text-cream absolute top-9 left-72'/>
        </form>
    )
};

export default Search