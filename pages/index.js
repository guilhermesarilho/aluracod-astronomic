import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useState } from 'react';
import appConfig from '../config.json'; //Para importar as paletas de cores 
import {useRouter} from 'next/router';  //Sistema de roteamento do next  OBS: quando se tem o 'use' é chamado de Hooks




function Titulo (props) {   //Podemos criar um componente que der propriedades a um título.
    console.log(props)
    const Tag = props.tag || 'h1';
    return (
 
        <>  {/* Para deixae o código mas limpo. É como se fosse uma div, mas sem uso de classes etc. */}
            <Tag>{props.children}</Tag>    {/*//São as propriedade que a tag utilizará */}
            {/* /Para utilzar CSS no JavaScript => */}
            <style jsx>{`  
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals[300]}; //Para pegar uma cor da paleta de cores do config.json
                    text-align: center; 
                    font-size: 24px;

                }
            `}</style>
        </>
    )
}

//Isto é um componente react
// function HomePage() {  //Essa função irá criar a página 'home'
//     //JSX
//     return ( 
//         <div>
//             <GlobalStyle /> {/**Para o CSS funciona globalmente, ou seja, para o estilo funcionar em todo o programa */}
//            <Titulo tag="h2">Boas Vindas de Volta</Titulo>
//            <h2>Discord - Alura Matrix</h2>
           
//         </div>
        
//     ) 
// }
//export default HomePage

export default function PaginaInicial() {
  // const username = 'guilhermesarilho';
    const [username, setUsername] = React.useState(''); //o setUsername também é um hook
    const roteamento = useRouter();

  return (
    <>
      {/* <GlobalStyle /> */}
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          // backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://wallpaper.dog/large/970832.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.primary[200],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infoDosEvent){  //Sempre que alguem for submitar no formulário faça:
              infoDosEvent.preventDefault(); //Vai parar de recarregar a pagina
              console.log("Alguem submeteu o form")
              // window.location.href = '/chat'  //Ao clicar no botão, me encaminhe para a page 'chat'
              roteamento.push('/chat')  //Também encaminha para a page 'chat', mas sem dar aquele refresh chato
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            {/* <input value={username} 
            type="text" 
            onChange={function (event){
              console.log("Usuario digitou", event.target.value)  //Quando o usuario digitar, guarde no parametro event o valor que sofreu uma Mudança(onChange)
              //Onde está o valor?
              const valor = event.target.value; 
              //Trocar o valor da variável
              setUsername(valor)
            }} 
            
            /> */}

            <TextField
              value={username}
              onChange={function (event){
                console.log("Usuario digitou", event.target.value)  //Quando o usuario digitar, guarde no parametro event o valor que sofreu uma Mudança(onChange)
                //Onde está o valor?
                const valor = event.target.value; 
                //Trocar o valor da variável
                setUsername(valor)
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[999],  //texto
                  mainColor: appConfig.theme.colors.neutrals[999],  //borda
                  mainColorHighlight: appConfig.theme.colors.neutrals[999], //borda quando selecionada
                  backgroundColor: appConfig.theme.colors.neutrals['000'],  //campo
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary[500],
                mainColorStrong: appConfig.theme.colors.primary[500],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary[400],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

