import ButtonCard from "./buttonCard";
import cart from "./img/cart.svg";

const IconGroup = (props) => {
    return (
        <div className="group">
            <ButtonCard
                classAtr={"start-icon"}
                title='<Button startIcon="local_grocery_store" />'
                imgSrc={cart}
            />
            <ButtonCard
                title='<Button endIcon="local_grocery_store" />'
                classAtr={"end-icon"}
                imgSrc={cart}
            />
        </div>
    )
}

export default IconGroup;