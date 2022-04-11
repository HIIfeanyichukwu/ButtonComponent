import styled from "styled-components"
const MainElement = styled.main`

`
const MainText = styled.h1`
    text-transform: capitalize;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #4f4f4f;
    font-family: "Poppins", sans-serif;
    margin-block: 53px 28px;
`

const Main = (props) => {
    return (
        <MainElement className="main">
            <MainText>buttons</MainText>
            {props.children}
            <p className="material-icon">
                Icons: https://material.io/resources/icons/?style=round
            </p>
            <p className="acknowledgement">
                created by <a href="">@doIfeanyichukwu</a> - devChallenges.io
            </p>
        </MainElement>
    )
}

export default Main;