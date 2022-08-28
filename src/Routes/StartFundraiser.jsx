import {
  Input,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Button,
} from "@chakra-ui/react";

export const StartFundraiser = () => {
  return (
    <Box w="100%" minH="600px" justifyContent="center" mt="2rem" mb="4rem">
      <Box w="50%" m="auto">
        <Box as="h2" textAlign="center" borderBottom="1px solid grey" h="2rem">
          {" "}
          Tell us more about your Fundraiser
        </Box>
        <Box h="1.5rem" />
        <FormControl>
          <FormLabel>Patient Name</FormLabel>
          <Input type="email" />
          <FormHelperText>Patient Name is Required!</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Amount you want to raise?</FormLabel>
          <NumberInput max={5000000} min={2000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>Minimum amount is 2000!</FormHelperText>
        </FormControl>
        <Box h="1.5rem" />
        <FormControl>
          <FormLabel>The Patient is...</FormLabel>
          <Select placeholder="Select Relation">
            <option>Self</option>
            <option>Father</option>
            <option>Mother</option>
            <option>GrandFather</option>
            <option>GrandMother</option>
            <option>Others</option>
          </Select>
        </FormControl>
        <Box h="2.5rem" />
        <FormControl isRequired>
          <FormLabel>Mobile Number</FormLabel>
          <Input placeholder="Enter Number" />
        </FormControl>
        <Box h="2.5rem" />
        <FormControl>
          <FormLabel>How did you First hear about ketto?</FormLabel>
          <Select placeholder="Select Source">
            <option>Search Engine(Google, Yahoo)</option>
            <option>Facebook, Instagram(ad, post)</option>
            <option>Twitter Ad/Post</option>
            <option>Youtube Ad/Post</option>
            <option>Others</option>
          </Select>
        </FormControl>
        <Box h="2.5rem" />
        <Button>Start FundRaiser</Button>
      </Box>
    </Box>
  );
};
