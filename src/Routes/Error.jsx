import { Button, Center } from '@chakra-ui/react'

function Error() {
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Center>
        <Button color="teal" >
          Go Back Home
        </Button>
      </Center>
    </div>
  );
}
export default Error;
