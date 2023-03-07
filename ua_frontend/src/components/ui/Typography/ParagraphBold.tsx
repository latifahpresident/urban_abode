interface ParagraphProps {
    children: string
    className: string
}
const ParagraphBold = ({children, className}: ParagraphProps) => {
    return (
        <p className={`font-bold text-lg text-darkGreen ${className}`}>
            {children}
        </p>
    )
};

export default ParagraphBold