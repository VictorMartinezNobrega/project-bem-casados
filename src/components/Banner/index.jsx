import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import "./styles.scss";

const Bunner = () => {
    return (
        <div className='div-banner-master'>
            <div className='div-banner'>
                <div className='div-img-banner'>
                    <img id='img3' src="./img/imgBanner3.jpg" alt="Imagem de bem casados" />
                </div>
                <div className='div-text'>
                    <Heading ml={'auto'} mr={'auto'} mb={'5px'} pt={'5%'}>
                        História do Bem Casado
                    </Heading>
                    <Text fontSize='2xl' mb={'5px'} >
                        O bem-casado é um doce popular em Portugal e no Brasil, principalmente nas festas de casamento.
                         Além do sabor bastante doce, destaca-se pela atenção dada à elaboração das embalagens
                          com que são produzidos
                    </Text>
                    <Text fontSize='2xl'>
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