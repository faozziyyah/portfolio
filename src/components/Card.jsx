import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Card = ({ title, description, img, livelink, repolink }) => {
  
  return (
    <div className="">

      <Image src={img} borderLeftRadius="5" borderRightRadius="5" alt='Img not loaded' width='100%' height="180px" />

      <div className="projlinks" style={{display: 'flex', justifyContent: 'space-between', marginTop: ''}}>

          <a className="btn" style={{ margin: "0.5rem", textDecoration: "none", width: "40%" }} href={repolink}>
              <GitHubIcon /> &nbsp; Code
          </a>

          <a className="button" style={{ margin: "0.5rem", textDecoration: "none", width: "40%"}} href={livelink}>
              <VisibilityIcon /> &nbsp; Live
          </a>

        </div>

      <div className="extra">

        <Heading color="white" as="h4" marginBottom="1em" marginTop="10px">{title}</Heading>
        <Text color="white" width="80%" margin="auto">{description}</Text>
      
      </div>
      
    </div>
  );
};

export default Card;
