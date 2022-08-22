import React from "react";
import styled from "styled-components";
const NavBarReact = () => {

    return ( 
        <>
        <Navbar>
            <h2>
            Navbar <span>E-COMMERCE </span> 
            </h2>

            <div>
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
            </div>
           
        </Navbar>
        
        </>

     );
}
 
export default NavBarReact;

const Navbar = styled.div`


h2{
    color: white;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
    padding: .4rem;
    background-color: #333;
    display:flex;
    align-items: center;
    justify-content: space-between;
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;  
 }

 
`