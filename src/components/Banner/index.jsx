import { Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import "./styles.scss";

const Bunner = () => {
    return (
        <div className='div-banner-master'>
            <div className='div-banner'>
                <div className='div-img-banner'>
                    <Image
                     m={'0.4%'}
                     boxSize={'98.5%'}
                     borderRadius={'8px'}
                     src="./img/imgBanner3.jpg" alt="Imagem de bem casados" 
                     />
                </div>
                <div className='div-text'>
                    <Heading ml={'auto'} mr={'auto'} mb={'5px'} fontSize='3vw'>
                        História do Bem Casado
                    </Heading>
                    <Text  mb={'5px'} >
                        O bem-casado é um doce popular em Portugal e no Brasil, principalmente nas festas de casamento.
                         Além do sabor bastante doce, destaca-se pela atenção dada à elaboração das embalagens
                          com que são produzidos
                    </Text>
                    <Text >
                        É feito para levar sorte e prosperidade aos recém-casados. 
                        Oferecer aos convidados depois do casamento, basicamente, concretiza essa 
                        união e garante a mesma sorte e felicidade dos noivos para os convidados.
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Bunner;