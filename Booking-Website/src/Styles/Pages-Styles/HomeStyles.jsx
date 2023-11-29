import styled from "styled-components";

const HomeStyles = styled.div`

    position: relative;

    .Container{
        height: 92vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0,0,0,0.5)),url("src/assets/pexels-arkkrapol-anantachote-1571746.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }

    .hero{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        width: 50%;
    }
    .Japan{
        font-size: 70px;
        margin-bottom: 2rem;
        color: #DDDDDD;
    }

    .span1{
        color: #1D2D44;
    }

    .Container p{
        font-weight: 100;
        margin: 0;
        color: #F0EBD8;
        font-size: 25px;
    }

    .availability{
        background: #F0EBD8;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:3rem ;
        top: 650px;
        width: 882px;
        height: 129px;
        border-radius: 8px;
    }

    .availability p{
        color: black;
    }

    .Check{
        color: #ECECEC;
        padding: 1.5rem 2rem;
        background: #0D1321;
        border: none;
        border-radius: 8px;
    }

    .Container2{
        padding: 4rem 0;
        height: 100vh;
    }
    
`

export default HomeStyles