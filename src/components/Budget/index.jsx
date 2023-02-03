import { Box, Card, CardBody, CardHeader, Heading, Input, Stack, Text, List, ListItem, ListIcon }
  from '@chakra-ui/react';
import './styles.scss';
import { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';

function Budget() {

  const [value, setValue] = useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div className='div-budget-master'>
      <Box p={'1%'} display={'flex'} >
        <Box w={'100%'}>
          <Card
            border={'2px'}
            borderColor={'#a36483'}
            bg={"#ffdcfe"}
            direction={'row'}
            justifyContent="space-around"
          >
            <Box p={'10px'}>
              <Stack align={'center'}>
                <CardHeader mb={'3%'}>
                  <Heading>Faça já seu orçamento!</Heading>
                </CardHeader>
                <CardBody bg={'#EDF2F7'} p={'none'}>
                  <Input
                    size='lg'
                    placeholder='Quantidade desejada'
                    color={'black'}
                    type={'number'}
                    bg={'#EDF2F7'}
                    border={'2px'}
                    borderColor={'#a36483'}
                    focusBorderColor={'#a36483'}
                    variant='filled'
                    value={value}
                    onChange={handleChange}
                  ></Input>
                </CardBody>
                <Text fontSize={'4xl'} bg={'#ffdcfe'} mt={'3%'} borderBottom={'2px'} borderColor={'green'}>
                  R$ {(value * 3.40).toFixed(2)}
                </Text>
                <Text>*apenas para a versão básica, para mais detalhes entre em contato!</Text>
              </Stack>
            </Box>
            <Box p={'10px'}>
              <Card bg={'#a36483'} color={'white'}>
                <Stack align={'center'}>
                  <CardBody >
                    <Heading>Acima de</Heading>
                    <Text fontSize={'3xl'}>
                      300 Bem Casados
                    </Text>
                    <List>
                      <ListItem fontSize={'2xl'}>
                        <ListIcon as={StarIcon} color='green.500' />
                        Brinde uma placa personalizada
                      </ListItem>
                    </List>
                    <Text fontSize={'3xl'}>
                      500 Bem Casados
                    </Text>
                    <List>
                      <ListItem fontSize={'2xl'}>
                        <ListIcon as={StarIcon} color='green.500' />
                        Belo abraço
                      </ListItem>
                    </List>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          </Card>
        </Box>
      </Box>
    </div>
  )
}

export default Budget;