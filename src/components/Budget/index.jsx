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
                  <Heading fontSize={'3vw'}>Faça já seu orçamento!</Heading>
                </CardHeader>
                <CardBody bg={'#EDF2F7'} p={'none'}>
                  <Input
                    size='lg'
                    placeholder='Quantidade desejada'
                    fontSize={'1.7vw'}
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
                <Text fontSize={'3vw'} bg={'#ffdcfe'} mt={'3%'} borderBottom={'2px'} borderColor={'green'}>
                  R$ {(value * 3.70).toFixed(2)}
                </Text>
                <Text fontSize={'1.2vw'}>*apenas para a versão básica, para mais detalhes entre em contato!</Text>
              </Stack>
            </Box>
            <Box p={'10px'}>
              <Card bg={'#a36483'} color={'white'}>
                <Stack align={'center'}>
                  <CardBody >
                    <Heading fontSize={'3vw'}>Acima de</Heading>
                    <Text fontSize={'2.5vw'}>
                      300 Bem Casados
                    </Text>
                    <List>
                      <ListItem fontSize={'2vw'}>
                        <ListIcon as={StarIcon} color='green.500' />
                        Brinde uma placa personalizada
                      </ListItem>
                    </List>
                    <Text fontSize={'2.5vw'}>
                      500 Bem Casados
                    </Text>
                    <List>
                      <ListItem fontSize={'2vw'}>
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