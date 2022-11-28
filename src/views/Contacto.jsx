import { Container } from "react-bootstrap";

import FormularioContacto from "../components/FormularioContacto";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuentanos, ¿en que te podemos ayudar?</h1>
      <FormularioContacto />
    </Container>
  );
};
