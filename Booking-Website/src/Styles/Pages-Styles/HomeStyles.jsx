import styled from "styled-components";

const HomeStyles = styled.div`

    position: relative;

    .Container{
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0,0,0,0.5)),url("src/assets/pexels-arkkrapol-anantachote-1571746.jpg");
        background-size: cover;
        background-position: center;
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
        font-weight: 700;
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
    
`

export default HomeStyles