import { Box } from "@chakra-ui/react"

export const Profile = () =>{
    return (
        <Box w='100%' h='500px'>
              <Box w='70%'  m='auto' mt='4rem'>
                <Box as='h1' fontSize='40px' fontWeight='bold'> Hello Shubham</Box>
                <Box h='3rem'/>
                <Box textAlign='center' fontWeight='bold' fontSize='20px'>Amount Donated : 2000</Box>
                <Box h='3rem'/>
                <Box textAlign='center' fontWeight='bold' fontSize='20px'>Number of Fundraiser Started: 2</Box>
              </Box>
        </Box>
    )
}