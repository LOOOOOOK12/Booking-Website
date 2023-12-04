import styled from 'styled-components'


const NavStyles = styled.div`
            width: 100%;

            nav{
                height: 70px;
                width: 100%;
                top: 0;
                z-index: 15;
                position: fixed;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                text-align: center;
                transition: 0.5s;
                background: #F0EBD8;
            }
            nav h1{
                font-size: 35px;
                font-weight: 400;
                text-decoration: none;
            }
            ul{
                color: black;
                display: flex; 
                flex-direction: row;
            }

            .Links{
                color: black;
                margin-right:3rem;
                text-decoration: none;
            }
            .Book{
                color: white;
                padding: .9rem 1.3rem;
                border-radius: 8px;
                background: #0D1321;
                border: #0D1321 2px solid;
            }
            h1{
                color: black;
            }
`
export default NavStyles