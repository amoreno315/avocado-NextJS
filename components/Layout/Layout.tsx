import Navbar from '@components/Navbar/Navbar'


// los ../ import hell o dot hell esto puede ser poco legible
// se puede usar path aliases para evitar los ../ por una @
const Layout:React.FC = ({children}) => {
  return (
    <div>
      {/* Todas mis paginas van a tener un Navbar, el contenido de la pagina y un footer */}
      <Navbar/>
      {children}
      <footer className="container">This is the footer</footer>
      <style jsx global>{`
        div {color: red}
        `}</style>
    </div>
  )
}

export default Layout