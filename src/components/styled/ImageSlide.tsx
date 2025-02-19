import styled from "styled-components";
import {MdArrowLeft, MdArrowRight} from "react-icons/md";
import {useState} from "react";
import {Stack} from "./Stack.ts";
import {Project} from "../../content/projects.type.ts";

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

interface ImageSlideProps {
    imageSlide: NonNullable<Project["imageSlide"]>
}

function ImageSlide({ imageSlide }: ImageSlideProps) {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    function clickLeft() {
        if (currentSlide > 0) {
            setCurrentSlide(prevState => prevState - 1)
        }
    }

    function clickRight() {
        if (currentSlide < imageSlide.length - 1) {
            setCurrentSlide(prevState => prevState + 1)
        }
    }

    return (
        <Stack alignItems="center">
            <p>{imageSlide[currentSlide].caption}</p>
            <StyledOuterContainer>
                <StyledButtons onClick={clickLeft} disabled={currentSlide === 0}>
                    <MdArrowLeft size={64} />
                </StyledButtons>
                <StyledInnerContainer>
                    <img src={imageSlide[currentSlide].image} width="100%" />
                </StyledInnerContainer>
                <StyledButtons onClick={clickRight} disabled={currentSlide === imageSlide.length - 1}>
                    <MdArrowRight size={64} />
                </StyledButtons>
            </StyledOuterContainer>
        </Stack>
    )
}

export default ImageSlide