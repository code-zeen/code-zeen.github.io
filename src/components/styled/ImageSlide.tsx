import styled from "styled-components";
import {MdArrowLeft, MdArrowRight} from "react-icons/md";
import {useState} from "react";
import {Stack} from "./Stack.ts";
import {Project} from "../../content/projects.type.ts";

const StyledOuterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 560px;
`
const StyledInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
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
const StyledImage = styled.img`
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
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
        <Stack alignItems="center" width='100%'>
            <p>{imageSlide[currentSlide].caption}</p>
            <StyledOuterContainer>
                <StyledButtons onClick={clickLeft} disabled={currentSlide === 0}>
                    <MdArrowLeft size={64} />
                </StyledButtons>
                <StyledInnerContainer>
                    <StyledImage src={imageSlide[currentSlide].image} width="100%" alt={imageSlide[currentSlide].image} />
                </StyledInnerContainer>
                <StyledButtons onClick={clickRight} disabled={currentSlide === imageSlide.length - 1}>
                    <MdArrowRight size={64} />
                </StyledButtons>
            </StyledOuterContainer>
        </Stack>
    )
}

export default ImageSlide