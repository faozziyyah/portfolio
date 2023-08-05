import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//import React from "react";

const Card = ({ title, description, img, livelink, repolink }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderLeftRadius="5" borderRightRadius="5" className="project">

      <Image src={img} borderLeftRadius="5" borderRightRadius="5" alt='Img not loaded' width='100%' />

      <div className="extra">

        <Heading color="white" as="h5">{title}</Heading>
        <Text color="white">{description}</Text>

        <div className="projlinks" style={{display: 'flex', justifyContent: 'space-between',}}>

          <a className="button" style={{ margin: "0.5rem", textDecoration: "none", width: "40%"}} href={livelink}>
              <VisibilityIcon /> &nbsp; Live
          </a>

          <a className="btn" style={{ margin: "0.5rem", textDecoration: "none", width: "40%" }} href={repolink}>
              <GitHubIcon /> &nbsp; Code
          </a>

        </div>
      
      </div>
      
    </VStack>
  );
};

export default Card;
