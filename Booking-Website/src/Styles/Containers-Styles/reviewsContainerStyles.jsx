import styled from "styled-components";

const reviewsContainerStyles = styled.div`
    display: flex;
    padding: 5rem 6rem;
    gap: 5rem;
    .comment-Container{
        display: flex;
        flex-direction: column;
    }
    .Title {
        width: 50%;
    }
    .profile{
        display: flex;
        gap: 1rem
    }

    .profile-Pic{
        height: 5rem;
        border-radius: 50%;
    }

    .spot{
        height: 20rem;
    }
`
export default reviewsContainerStyles