import ButtonCard from "./buttonCard";

const BtnGroup = (props) => {
    return (
        <div className="btn-group group">
            <ButtonCard
                title={"<Button />"}
            />
            <ButtonCard 
                classAtr={"btn-hover"}
                title={"&:hover, &:focus"}
            />
        </div>
    )
}

export default BtnGroup;