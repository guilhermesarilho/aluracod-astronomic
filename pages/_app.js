//Isso não virará uma página,todas as coisas que ficar nesse arquivo rodará em todas as pages
function GlobalStyle() {
    return (
        <style global jsx>{`   //Esse estilo funcionará globalmente
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
        `}</style>
    )
}

function MyApp({ Component, pageProps }) {
    console.log('Essa função rodará em todas as pages')
   
    return (
        <>
        {/* Chamará a function globalStyle */}
            <GlobalStyle />     /{/*Se vc der um Ctrl + clique, vc vai ser direcionado para a função desse componente */}
            <Component {...pageProps} />
        </>
    )
    
}
export default MyApp;