import styled from "styled-components";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import ss4 from "../../assets/ss4.png";

const StyledImageSlide = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`

function ImageSlide() {
    return (
        <StyledImageSlide>
            <img src={ss1} alt="screen1" width="100%" />
            <img src={ss2} alt="screen2" width="100%" />
            <img src={ss3} alt="screen3" width="100%" />
            <img src={ss4} alt="screen4" width="100%" />
        </StyledImageSlide>
    )
}

export default ImageSlide