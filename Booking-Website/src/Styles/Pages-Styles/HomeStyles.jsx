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

    .availability{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .availability-container{
        position: absolute;
        background: #F0EBD8;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:2rem ;
        padding: .7rem 2.5rem;
        border-radius: 8px;
    }

    .availability p{
        color: black;
    }

    .vl{
        height: 4rem;
        width: .1rem;
        background: black;
    }

    .Check{
        font-size: 15px;
        font-weight: 200;
        color: #ECECEC;
        padding: 1.2rem 1.5rem;
        background: #0D1321;
        border: none;
        border-radius: 8px;
    }

    .Container2{
        padding: 5rem 6rem;
        gap:5rem;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Text-1{
        width: 500px;
    }

    h2{
        margin: 0;
        font-size: 50px;
        color: #0D1321;
    }

    .Container2 p{
        color: #7B7B7B;
        font-size: 25px;
        font-weight: 350;
    }

    .Container2 img{
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

    //Hotels

    .hotel-Container{
        padding: 5rem 6rem;
    }
    
    .Text2{
        width: 30rem;
        margin-bottom: 3rem;
    }

    .Text2 p{
        color: #7B7B7B;
        font-size: 25px;
        font-weight: 350;
    }


    .hotel-Front-Container{
        display: flex;
        gap: 3rem;
    }

    .Hotels{
        display: flex;
    }
    
`

export default HomeStyles