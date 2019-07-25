import styled from "styled-components";
import defaultImg from '../images/room-1.jpeg'

//this sets up the sizing of the images and also get images to singleroomjs dynamically
const StyledHero = styled.header`
 min-height: 80vh;
 background: url(${props => (props.img ? props.img : defaultImg)}) center/cover no-repeat;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export default StyledHero;