import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navegacion() {
    return (
        <>
            <Navbar bg="danger" variant="dark">
            <Container>
                <Container className="menu">
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                    🏠Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                    📙Contacto
                    </Link>
                </Container>
                <Container className="icono">
                    <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
                </Container>
            </Container>
            </Navbar>
        </>

    )
}