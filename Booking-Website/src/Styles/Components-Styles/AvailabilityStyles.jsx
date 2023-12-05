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
            padding: 1.5rem 2.5rem;
            border-radius: 8px;
        }

        .availability p{
        color: black;
    }

    .availability p{
        color: black;
    }

    .vl{
        height: 4.2rem;
        width: .1rem;
        background: #0D1321;
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

    .Title-A{
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .Title-A p{
        margin: 0;
    }

    .Title-A img{
        height: 1.5rem;
    }
`
export default AvailabilityStyles;