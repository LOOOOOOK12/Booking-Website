import styled from 'styled-components'


const NavStyles = styled.div`
            height: 40px;
            top: 0;
            z-index: 15;
            width: 90%;
            position: fixed;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            padding: 1rem 5%;
            transition: 0.5s;
            background: #F0EBD8;

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
`
export default NavStyles