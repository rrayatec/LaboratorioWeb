import { Spinner, Button } from "react-bootstrap";

export default function Loading() {
  return (
    <div class="d-flex justify-content-center">
      <Button variant="danger" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Cargando...
      </Button>
    </div>
  );
}
