import ButtonCard from "./buttonCard";

const DisableShadowGroup = (props) => {
    return (
        <div className="disable-shadow group">
            <ButtonCard
                classAtr={"dis-shadow"}
                title='<Button disableShadow />'
            />
        </div>
    )
}

export default DisableShadowGroup;