import { Box, Flex } from "@chakra-ui/react"

export const FooterCard = (bool, ...arr) =>{
  const list = arr.map((x,i)=> {
    if(i===0) return <Box as='h3' fontWeight='600' fontSize='20px' >{x}</Box> 
    else return <Box as='p' fontSize='13px' fontWeight='400'>{x}</Box>
    
  })
  if(bool) return(
    <Flex flexDirection='column' align='flex-start' gap='0.4rem' ml='4rem' mt='1rem'>
    {list}
    </Flex>
  )
  else 
    return (
        <Flex flexDirection='column' align='flex-start' gap='0.4rem' ml='2rem' mt='1rem'>
        {list}
        </Flex>
    )
}