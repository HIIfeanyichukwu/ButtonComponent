import ButtonCard from "./buttonCard";

const SizeGroup = (props) => {
    return (
        <div className="size group">
            <ButtonCard
                classAtr={"sm"}
                title='<Button size="sm"/>'
            />
            <ButtonCard
                title='<Button size="md" />'
                classAtr={"md"}
            />
            <ButtonCard
                title='<Button size="lg" />'
                classAtr={"lg"}
            />
        </div>
    )
}

export default SizeGroup;