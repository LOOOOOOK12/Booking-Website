import styled from "styled-components";

const FooterStyles = styled.div`
    height: 30vh;
    background: #1D2D44;
    padding: 1.5rem;
    color: #dddddd;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    .Menu{
        display: flex;
        flex-direction: column;
    }

    .Menu .Links{
        color: #dddddd;
        margin-right:3rem;
        text-decoration: none;
    }

    .Footer-Container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    h2{
        margin: 0px;
    }
`

export default FooterStyles