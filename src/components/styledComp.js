import styled from 'styled-components'

export const Menu = styled.div`
  position: relative; top: 0px;
  border-bottom: 4px solid black;
  width: 100%; height: 90px;
  font-size: 28px;
  color: white;
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 20px 0px;

`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 1200px; margin: 20px auto;
  @media screen and (max-width:1200px) {
    width: 100%;
  }
  @media screen and (max-width:768px) {
    width: 100%;
  }
  @media screen and (max-width:480px) {
    width: 80%;
  } 
`

export const Item = styled.div`
  cursor: pointer;
  width: 265px; height: 500px;
  margin: 11px;
  color: #FFFFFF;
  background-color: black;
  overflow: hidden;

  @media screen and (max-width:1200px) {
    width: 30%;
  }
  @media screen and (max-width:768px) {
    width: 46%;
  }
  @media screen and (max-width:480px) {
    width: 98%;
  }   

`
export const Butt_sty = styled.input`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 2;
    width: 150px; height: 50px;
    font-size: 18px;
    border: 1px solid white;
    background-color: rgba(0,0,0,0.6);
    color: white;
    opacity: ${props => props.opaci}
`
export const Image = styled.div`
  height: 415px;
  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  opacity: ${props => props.opaciImg};
  z-index: 100;

  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`
export const Temp = styled.div`
  height: 250px; 
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`
export const Button = styled.button`
  width: 200px; height: 60px;
  font-size: 20px; border-radius: 20px;
  border: 2px solid white; color: white;
  background-color: #98C138; margin: 20px;
  &:hover{ background-color: #2C5500 };
  transition: all 0.4s;
`
