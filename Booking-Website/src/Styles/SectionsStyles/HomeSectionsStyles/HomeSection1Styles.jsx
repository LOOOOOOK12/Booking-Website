import styled from "styled-components";

const HomeSection1Styles = styled.div`
    padding-top: 5rem;
    padding-left: 6rem;
    padding-right: 6rem;
    gap:5rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .Text-1{
        width: 500px;
    }

    h2{
        margin: 0;
        font-size: 50px;
        color: #0D1321;
    }

    p{
        color: #7B7B7B;
        font-size: 25px;
        font-weight: 350;
    }

    img{
        height: 35rem;
        width: 35rem;
        border-radius: 8px;
    }

    
    hr{
        background-color: #0D1321;
        height: 2px;
        border: none;
    }

    .readMore{
        padding:  1.5rem 2.8rem;
        border-radius: 8px;
        border: none;
        font-size: 15px;
        font-weight: 300;
        background: #0D1321;
        color: #e3e3e3;
    }
`
export default HomeSection1Styles