import React from 'react'
import styled from 'styled-components';
import Shoe from '../assets/shoe.png';
import Tic from '../assets/blue tic.png';
import Jor1 from '../assets/jordon1.png'
import Jor2 from '../assets/jordon (2).png'
import Jor3 from '../assets/jordon (3).png'
import Jor4 from '../assets/jordon (4).png'

const type = [
  { name: "Air Max", image: "https://i.ebayimg.com/images/g/GzMAAOSwd7Flo~qu/s-l400.jpg" },
  { name: "Low Dunk", image: "https://i.ebayimg.com/images/g/GzMAAOSwd7Flo~qu/s-l400.jpg" },
  { name: "Air Jordan", image: "https://i.ebayimg.com/images/g/GzMAAOSwd7Flo~qu/s-l400.jpg" },
  { name: "Retro High", image: "https://i.ebayimg.com/images/g/GzMAAOSwd7Flo~qu/s-l400.jpg" },
  { name: "SB Force", image: "https://i.ebayimg.com/images/g/GzMAAOSwd7Flo~qu/s-l400.jpg" },
];

const Home = () => {
  return (
    <>
      <div>
        <House>
          <Heading>N I K E</Heading>
          <SHOE src={Shoe} />
          <Tag>JUST <br /> DO <br /> IT</Tag>
          <Para>The original words and form of a written or <br />  printed work  (2) : an edit</Para>
          <Title>NIKE AIR MAX 95</Title>
          <Title2>RON 899</Title2>
        </House>

        <Bscards>
          <BlueNike src={Tic}></BlueNike>
          <Box1>
            <J2 src={Jor2} alt="Air Jordon Blue" />
            <Name>Nike Air Max 95 </Name>
            <Nam>899.99</Nam>
          </Box1>
          <Box2>
            <J1 src={Jor1} alt="Air Jordon Blue" />
            <Name>Nike Air Max 95 </Name>
            <Nam>899.99</Nam>
          </Box2>
          <Box3>
            <J3 src={Jor3} alt="Air Jordon Blue" />
            <Name>Nike Air Max 95 </Name>
            <Nam>899.99</Nam>
          </Box3>
          <Box4>
            <J4 src={Jor4} alt="Air Jordon Blue" />
            <Name>Nike Air Max 95 </Name>
            <Nam>899.99</Nam>
          </Box4>
        </Bscards>
      </div>

      <Container>
        <Message>
          <span>Your next obsession starts here</span>
          <i class="bi bi-star-fill" style={{ color: "blue", fontSize: "30px", }}  ></i>
        </Message>
        <Message>
          <span>Because every step deserves the spotlight!</span>
          <i class="bi bi-star-fill" style={{ color: "blue", fontSize: "30px", }} ></i>
        </Message>
        <Message>
          <span>Slay the streets, one step at a time</span>
        </Message>
      </Container>

      <Category>
        <h1>
          Categories
        </h1>

        <Part>
          <Grid>
            {type.map((type, index) => (
              <Part key={index}>
                <Image src={type.image} alt={type.name} />
                <Identity>{type.name}</Identity>
              </Part>
            ))}
          </Grid>
        </Part>

      </Category>
    </>
  );
};

export default Home
const Part = styled.div`
  /* display: flex; */
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Identity = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #555;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  text-align: center;
`;
const Grid = styled.div`
 display: flex;
 justify-content: center;
 gap: 10%;
 flex-wrap: wrap;
`;

const Category = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 15%;
 margin-top: 3%;
 padding-bottom: 10%;
 font-family: "Bai Jamjuree", serif;
 font-weight: bolder;
 font-style: bold;
 color: #e96b6b;
 border: 5px solid green;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px; 
  padding: 20px; 
  margin-top: 30vh;
  background-color: white;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  gap: 80px; 
  font-size: 16px;
  font-weight: 500;
  color: #1d1b1b;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

// const Div = styled.div`

// display: inline-flex; 
// gap: 50px; 1
// position: absolute;
// top: 100vh;
// height: 10vh;
// width: 99.5%;

// `;

// const Quote = styled.span`
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  width: 150%;
//  background-color: #fcf9f9;
//  border: 1px solid ;
// `;

const J4 = styled.img`
position: absolute;
right: 7vw;
height: 28vh;
width: 17vw;
/* border: 3px solid greenyellow; */
`;

const Box4 = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 15%;
 width: 15%;
 position: absolute;
 top: 78vh;
 right: 60vw;
 border-radius: 10px;
 box-shadow: 9px 11px 3px purple;
 font-family: "Bai Jamjuree", serif;
 font-size: clamp(1rem, 1vw, 13rem);
 font-weight: bolder;
 font-style: bold; 
 background-color: #e9e6e7;
 border: 3px solid #fa2e8d ;
`;

const J3 = styled.img`
position: absolute;
right: 6vw;
height: 26vh;
width: 15vw;
`;

const Box3 = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 15%;
 width: 15%;
 position: absolute;
 top: 78vh;
 right: 42vw;
 border-radius: 10px;
 box-shadow: 9px 11px 3px brown;
 font-family: "Bai Jamjuree", serif;
 font-size: clamp(1rem, 1vw, 13rem);
 font-weight: bolder;
 font-style: bold; 
 background-color: white;
 border: 2px solid purple;
`;

const Box2 = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 15%;
 width: 15%;
 position: absolute;
 top: 78vh;
 right: 2vw;
 border-radius: 10px;
 box-shadow: 9px 11px 3px green;
 font-family: "Bai Jamjuree", serif;
 font-size: clamp(1rem, 1vw, 13rem);
 font-weight: bolder;
 font-style: bold; 
 background-color: white;
 border: 2px solid purple;
`;
const Box1 = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 15%;
 width: 15%;
 position: absolute;
 top: 78vh;
 right: 22vw;
 border-radius: 10px;
 box-shadow: 9px 11px 3px blue;
 font-family: "Bai Jamjuree", serif;
 font-size: clamp(1rem, 1vw, 13rem);
 font-weight: bolder;
 font-style: bold; 
 background-color: white;
 border: 2px solid orange;
`;

const J1 = styled.img`
 position: absolute;
 top: 10%;
 right: 6vw;
 height: 20vh;
 width: 14vw;
`;

const J2 = styled.img`
 position: absolute;
 right: 8vw;
 height: 25vh;
`;

const Nam = styled.h3`
 display: flex;
 flex-direction: column ;
 justify-content: center;
 align-items: end;
 height: 4vh;
 width: 5vw;
 background-color: #ffffff;
 border: 2px solid black;
 position: absolute; 
 top: 5vh;
 right: 0.4vw;
`;

const Name = styled.span`
 display: flex;
 flex-direction: column ;
 justify-content: center;
 align-items: center;
 height: 5vh;
 width: 10vw;
 /* border: 2px solid black; */
 position: absolute; 
 top: 1vh;
 right: 0vw;
`;

const Bscards = styled.div`
 /* display: flex;
 justify-content: center;
 align-items: center;
 gap: 10%;
 border: 2px solid blue;
 height:10vh ; */
`;

const House = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  height:65vh;
  /* border: 2px solid red; */

`;
const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  color: #86b3ca;
  height: 5%;
  padding-top: 20vh;
  padding-bottom: 23vh;
  font-size: clamp(25rem, 5vw, 13rem);
  font-family: "Bai Jamjuree", serif;
  font-weight: bolder;
  font-style: bold;  
`;
const SHOE = styled.img`
  position: absolute;
  top: 40%; 
  left: 52%; 
  transform: translate(-50%, -50%);
  z-index: 2; 
  width: 50%; 
  height: 80%;
`;
const Tag = styled.h1`
  position: absolute;
  top: 41%; 
  left: 10%; 
  transform: translate(-50%, -50%);
  z-index: 2; 
  /* width: 28vw;
  height: 40vh; */
  /* border: 2px solid red; */
  color: white;
  font-family: "Bai Jamjuree", serif;
  font-size: clamp(1rem, 5vw, 13rem);
  font-weight: bolder;
  font-style: bold; 
`;
const Para = styled.p`
 position: absolute;
  top: 69%; /* Adjust position to center */
  left: 16%; /* Adjust position to center */
  transform: translate(-50%, -50%);
  z-index: 2; /* Place image on top of the text */
  width: 9; /* Set size for the image */
  height: 5%;
  color: #111010;
  /* border: 2px solid black; */
  font-family: "Bai Jamjuree", serif;
  font-size: clamp(1rem, 1vw, 13rem);
  font-weight: bolder;
  font-style: bold; 

`;
const Title = styled.h2`
  position: absolute;
  z-index: 2;
  top: 45.4%;
  right: 0%;
  transform: translate(-50%, -50%);
  font-family: "Bai Jamjuree", serif;
  font-size: clamp(1.6rem, 2.1vw,3rem);
  font-weight: bolder;
  font-style: bold; 
  /* border: 2px solid black; */
`;
const Title2 = styled.h2`
  position: absolute;
  z-index: 2;
  top: 51%;
  right: 12%;
  color: white;
  transform: translate(-50%, -50%);
  font-family: "Bai Jamjuree", serif;
  font-size: clamp(1.8rem, 2.1vw,3rem);
  font-weight: bolder;
  font-style: bold; 
  /* border: 2px solid black; */
`;
const BlueNike = styled.img`
  position: absolute;
  /* z-index: 2; */
  top: 70vh;
  right: 3%;
  width: 25%;
`;






















// const House = styled.div`
//   margin-top: 10%;
//   padding-bottom: 0%;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   background-image: url(${Nike});
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
// /  /   padding: 0.5vw 2vh 0.5vw 2vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Name = styled.img`
//     display: flex;
//     justify-content:space-between;
//     align-items: center;
//     margin-top: 10%;
//     /* padding-top: 10%; */
//     padding-left: 4%;
//     height: 50vh;
//     width: 90vw;
// `;