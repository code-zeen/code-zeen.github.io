import styled from "styled-components";
import ss0 from "../../assets/ss0.png";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { useState } from "react";
import { Stack } from "./Stack.ts";

const StyledOuterContainer = styled.div`
    display: flex;
    width: 100%;
`
const StyledInnerContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`
const StyledButtons = styled.div<{
    disabled?: boolean,
}>`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #282828;
    cursor: pointer;

    &:hover {
        background-color: #2c2c2c;
    }

    &:active {
        background-color: #272727;
    }

    ${p => p.disabled && "background-color: #222222; cursor: auto; &:hover { background-color: #222222 }"}
`

function ImageSlide() {
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const content = [
        { image: ss0, caption: '1. 대시보드' },
        { image: ss1, caption: '2. 취약점 체크리스트 및 점수표' },
        { image: ss2, caption: '3. 계정 목록 및 생성' },
        { image: ss3, caption: '4. 자료실 및 파일 업로드' } ]

    function clickLeft() {
        if (currentSlide > 0) {
            setCurrentSlide(prevState => prevState - 1)
        }
    }

    function clickRight() {
        if (currentSlide < 3) {
            setCurrentSlide(prevState => prevState + 1)
        }
    }

    return (
        <Stack alignItems="center">
            <p>{content[currentSlide].caption}</p>
            <StyledOuterContainer>
                <StyledButtons onClick={clickLeft} disabled={currentSlide === 0}>
                    <MdArrowLeft size={64} />
                </StyledButtons>
                <StyledInnerContainer>
                    <img src={content[currentSlide].image} width="100%" />
                </StyledInnerContainer>
                <StyledButtons onClick={clickRight} disabled={currentSlide === 3}>
                    <MdArrowRight size={64} />
                </StyledButtons>
            </StyledOuterContainer>
        </Stack>
    )
}

export default ImageSlide