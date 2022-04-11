import ButtonCard from "./buttonCard";

const DisabledGroup = (props) => {
    return (
        <div className="disabled group">
            <ButtonCard
                classAtr={"disabled"}
                title='<Button disabled/>'
            />
            <ButtonCard
                title='<Button variant="text" disabled />'
                classAtr={"disabled-hover"}
                disabled={true}
            />
        </div>
    )
}

export default DisabledGroup;