import styled from "styled-components";

const AboutSection1Styles = styled.div`
    padding: 6rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:3rem;

    .Quote{
        width: 60%;
        text-align: center;
    }


    .Quote h1{
        font-weight: 300;
    }

    .StoryContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }

    .OurStory{
        width: 50%;
        text-align: left;
    }

    .OurStory p{
        font-size: 30px;
        font-weight: 350;
    }

    hr{
        background-color: #0D1321;
        height: 2px;
        border: none;
    }

    .stories{
        width: 50%;
    }

    .missionIntro{
        width: 100%;
        height: 5rem;
        background-color: #0D1321;
    }
`
export default AboutSection1Styles