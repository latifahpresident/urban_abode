interface ParagraphProps {
    children: string
    color: string
}

const ParagraphLarge = ({children, color}: ParagraphProps) => {
    return (
        <p className={`text-${color} text-2xl self-end`}>{children}</p>
    )
};

export default ParagraphLarge