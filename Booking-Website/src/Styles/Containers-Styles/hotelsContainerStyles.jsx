import styled from "styled-components";

const hotelsContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    padding-bottom: 1.5rem;
    background: #CCCCCC;
    border-radius: .5rem;
    transition: ease .3s;

    h3{
        margin: 1.5rem 0;
        color: #0D1321;
    }

    hr{
        background-color: #0D1321;
        height: 2px;
        
    }

    .Text-Hotels{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .Text-Hotels p{
        color: #7B7B7B;
        font-weight: 350;
    }

    img{
        height: 100%;
        width: 100%;
        border-radius: .5rem;
    }

    .Check-Button{
        width: 100%;
        padding: 1rem 3rem; 
        border-radius: 8px;
        border: 2px solid #838383;
        background: transparent;
        color: #838383;
        font-size: 20px;
        font-weight: 300;
        transition: ease .2s;
    }

    .Check-Button:hover{
        background: #0D1321;
        color: #CCCCCC;
        border:2px solid #0D1321;
    }
`
export default hotelsContainerStyles;