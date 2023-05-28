import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Select,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { API_URL } from '../../../api';


const restaurants = JSON.parse(localStorage.getItem('restaurants') ?? "{}");



export const ReservationCard = ({ reservation }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [comment, setComment] = React.useState('')
  const [rating, setRating] = React.useState('')
  const handleChangeCmt = (event:any) => setComment(event.target.value)
  const handleChangeRating = (event:any) => setRating(event.target.value)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const user = JSON.parse(localStorage.getItem('user') ?? "");
  const sendReview = async () => {

    let res = await axios.post(
      `${API_URL}/feedbacks/${user.id}/${reservation.restaurantId}`,
      {
        "comment":comment,
        "rating":rating
      }
    );
    console.log(res);

    if (res.status == 201) {
      alert(
        "Review adaugat cu succes!"
      );
      window.location.href = "/";
    }
  }
  
  return (<>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add review - {restaurants[reservation.restaurantId - 1].name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Number of stars</FormLabel>
            <Select  value={rating}         onChange={handleChangeRating} placeholder='Selecteaza'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Review</FormLabel>
            <Textarea  value={comment}         onChange={handleChangeCmt}  placeholder='Leave your opinion...' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={sendReview} colorScheme='blue' mr={3}>
            Add review
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

    <Center py={12}>
      <Box onClick={onOpen}
        role={'group'}
        p={6}
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${restaurants[reservation.restaurantId - 1].imageUrl})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={restaurants[reservation.restaurantId - 1].imageUrl}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {restaurants[reservation.restaurantId - 1].name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {reservation.noOfPersons} people

          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'l'}>
              {new Date(reservation.date).toLocaleDateString("ro-RO")}/{reservation.hour}

            </Text>

          </Stack>
        </Stack>
      </Box>
    </Center>
  </>
  );
}




// import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

// export const ReservationCard = ({ reservation }: any) => {
//   console.log("card", reservation);
//   return (
//     <Card>
//       <CardBody>
//         <p>Restaurant id:{reservation.restaurantId}</p>
//         <p>Number of people: {reservation.noOfPersons}</p>
//         <p>Date: {new Date(reservation.date).toLocaleDateString("ro-RO")}</p>
//         <p>Time: {reservation.hour}</p>

//         <p>
//           Status: {reservation.emailConfirmed ? "Confirmed" : "Not confirmed"}
//         </p>
//         <p>Onorata: {reservation.emailConfirmed ? "Yes" : "No"}</p>
//       </CardBody>
//     </Card>
//   );
// };
