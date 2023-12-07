import styled from "styled-components";

const AboutSection2Styles = styled.div`
    padding: 5rem 4rem;
    gap: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    .OurMission-Container{
        width: 40%;
    }

    .Mission h1{
        font-size: 50px;
        color: #0D1321;

    }

    .q{
        font-size: 30px;
        font-weight: 300;
        color: #42464F;
    }

    hr{
        background-color: #0D1321;
        height: 2px;
        border: none;
    }

    .count-Container{
        display: flex;
        
    }

    .count{
        display: flex;
        flex-direction: column;
        margin-right: 50px;
    }

    .count h1{
        font-size: 30px;
        color: #0D1321;

    }

    .count p, h1{
        margin: 0;
        color: #0D1321;

    }

    .lobot{
        height: 30rem;
        width: 30rem;
        border-radius: 8px;
    }
`
export default AboutSection2Styles