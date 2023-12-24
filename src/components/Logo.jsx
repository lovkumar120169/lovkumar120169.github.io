import React from 'react'
import styled from 'styled-components'
import { RxSlash, RxChevronLeft, RxChevronRight } from "react-icons/rx";

export const Logo = () => {
  return (
    <LOGO>
        <p style={{  alignItems: "center", justifyContent: "center", color: "white", fontSize: "20px", fontFamily: "'Rouge Script', cursive" }}><RxChevronLeft /><span style={{fontSize:"25px"}}>Luv<span style={{color:"#DFA464"}}>Kumar</span></span><RxSlash /><RxChevronRight /></p>
    </LOGO>
  )
}

const LOGO=styled.div`
    width: 15rem;
`
