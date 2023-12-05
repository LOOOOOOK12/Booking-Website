import styled from "styled-components";

const reviewsContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 6rem;

    .comment-Container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    hr{
        background-color: #0D1321;
        height: 2px;
        border: none;
    }

    .comment{
        font-size: 30px;
        color: #7B7B7B;
        font-weight: 300;
        margin-top: 50px;
        margin-right: 65px;
    }

    .Title {
        width: 40%;
    }

    .profile{
        margin-top: 50px;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    h2{
        color: #0D1321;
        font-size: 40px;
        margin: 0px;
    }

    .profile-Info h4{
        font-size: 30px;
        margin: 0px;
        color: #0D1321;
    }

    .profile-Info p{
        font-size: 15px;
        margin-top: 15px;
        color: #42464F;
    }

    .profile-Pic{
        height: 114px;
        border-radius: 50%;
    }

    .spot{
        height: 25rem;
        border-radius: 10px;
    }
`
export default reviewsContainerStyles