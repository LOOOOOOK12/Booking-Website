import styled from "styled-components";

const AboutStyles = styled.div`
    .Container{
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0,0,0,0.8)),url("src/assets/AboutUs/hirayama.jpg");
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

    h1{
        color: black;
    }

    .Container p{
        font-weight: 100;
        margin: 0;
        color: #E9E9E9;
        font-size: 25px;
    }

    .AboutUs{
        font-size: 70px;
        font-weight: 700;
        margin-bottom: 2rem;
        color: #DDDDDD;
    }

    .span1{
        color: #748CAB;
    }

`
export default AboutStyles