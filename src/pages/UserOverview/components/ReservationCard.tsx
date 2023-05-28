import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';


const restaurants = JSON.parse(localStorage.getItem('restaurants') ?? "{}");

export const  ReservationCard = ( { reservation } : any) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
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
            backgroundImage: `url(${restaurants[reservation.restaurantId].imageUrl})`,
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
            src={restaurants[reservation.restaurantId-1].imageUrl}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {restaurants[reservation.restaurantId].name}
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
