import ButtonCard from "./buttonCard";
import ColorSub from "./colorSub";

const ColorGroup = (props) => {
    return (
        <div className="group color-group">
            <ColorSub>
                <div className="color group">
                    <ButtonCard
                        title='<Button color="default"/>'
                        />
                    <ButtonCard
                        title='<Button color="primary" />'
                        classAtr={"primary"}
                        />
                    <ButtonCard
                        title='<Button color="secondary" />'
                        btnText={"Secondary"}
                        classAtr={"secondary"}
                    />
                    <ButtonCard
                        title='<Button color="danger" />'
                        btnText={"Danger"}
                        classAtr={"danger"}
                        />
                </div>
            </ColorSub>

            <ColorSub>
                <ButtonCard
                    title='&:hover, &:focus'
                    classAtr={"btn-hover"}
                />
                <ButtonCard
                    classAtr={"primary-hover"}
                />
                <ButtonCard
                    btnText={"Secondary"}
                    classAtr={"secondary-hover"}
                />
                <ButtonCard
                    btnText={"Danger"}
                    classAtr={"danger-hover"}
                />
            </ColorSub>
        </div>
        
    )
}

export default ColorGroup;