import { TypographyProps } from './types';

const ParagraphLarge = ({children}: TypographyProps) => {
    return (
        <p className='text-lg'>{children}</p>
    )
}

export default ParagraphLarge;