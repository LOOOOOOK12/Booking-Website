import styled from "styled-components";

const hotelsContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
    background: #CCCCCC;
    border-radius: .5rem;

    h2{
        margin: 0;
    }

    hr{
        background-color: #0D1321;
        height: 2px;
        border: none;
    }

    img{
        height: 100%;
        width: 100%;
        border-radius: .5rem;
    }

`
export default hotelsContainerStyles;