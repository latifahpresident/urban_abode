import { twMerge } from "tailwind-merge"
import { TypographyProps } from "./types"

const ParagraphExtraSmall = ({children, className}: TypographyProps) => {
    return ( <p className={twMerge(`${className} text-xs `)}>{children}</p> )
}

export default ParagraphExtraSmall;