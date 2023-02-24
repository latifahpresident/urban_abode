import { useState } from "react";
import Icon from "../ui/Icons/Icon";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const [value, setValue] = useState('')


    return (
        <form role='search' className='w-72 appearance-none hidden lg:block'>
            <input type='search' onChange={(event) => setValue(event.target.value)} aria-label="Search" value={value} placeholder='What can we help you find?' className='appperance-none text-sm h-11 w-full pl-2 placeholder:text-cream bg-[#0000] border border-cream'/>
            <Icon iconName={faMagnifyingGlass} className='text-cream absolute top-[40px] left-[630px]'/>
        </form>
    )
};

export default Search