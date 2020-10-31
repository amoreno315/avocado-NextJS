import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  //lo que se haga aqui es para todas las paginas, en nuestro caso no necesitamos nada del
  //servidor, así que podemos eliminar esta parte
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        {/* //personalizado desde next */}
        <Head />
        {/* //por ejemplo para modificar el fabicon o para cambiar la fuente o para agregar
        //estilos externos
        // o para agregar otros script o js que se encuente en internet */}
        <body className="my-body-class">
          {/* //aqui tambien podemos añadir clases al body */}
          <Main /> 
          {/* aqui viene nuestra aplicacion */}
          <NextScript />
          {/* //aqui podemos agrgar elementos adicionales que esten fuera de nuestra app */}
        </body>
      </Html>
    )
  }
}

export default MyDocument