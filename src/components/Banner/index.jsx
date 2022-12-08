import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import "./styles.scss";

const index = () => {
    return (
        <div className='div-banner-master'>
            <div className='div-banner'>
                <div className='div-img-banner'>
                    <img id='img3' src="./img/imgBanner3.jpg" alt="Imagem de bem casados" />
                </div>
                <div className='div-text'>
                    <Heading ml={'auto'} mr={'auto'}>
                        História do Bem Casado
                    </Heading>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ab dolor suscipit repellendus qui, in porro unde inventore, necessitatibus voluptatem voluptates dolore, neque ad beatae! Necessitatibus qui facere modi! Dolorem.
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default index;