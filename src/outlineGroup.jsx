import ButtonCard from "./buttonCard";

const OutlineGroup = (props) => {
    return (
        <div className="outline group">
            <ButtonCard
                classAtr={"btn-outline"}
                title='<Button variant="outline"/>'
            />
            <ButtonCard
                title="&:hover, &:focus"
                classAtr={"btn-outline-hover"}
            />
        </div>
    )
}

export default OutlineGroup;