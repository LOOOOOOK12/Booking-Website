import styled from "styled-components";

const AvailabilityStyles = styled.div`
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

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
`
export default AvailabilityStyles;