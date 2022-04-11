import ButtonCard from "./buttonCard";

const TextGroup = (props) => {
    return (
        <div className="text group">
            <ButtonCard
                classAtr={"text"}
                title='<Button variant="text"/>'
            />
            <ButtonCard
                title="&:hover, &:focus"
                classAtr={"text-hover"}
            />
        </div>
    )
}

export default TextGroup;