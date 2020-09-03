import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Col,
  DropdownMenu,
  DropdownItem,
  Fade,
  FormGroup,
  Form,
  FormText,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Spinner,
  Table,
  Container,
  Row,
  Modal
} from "reactstrap";

import HeaderBasic from "components/Headers/HeaderBasic.js";

//Define o tipo de unidade na listagem
function VerificaSintomatico(variaveis) {
  const opcao = variaveis.sintomatico;
  if (opcao === 1) {
    return (
      <Badge color="" className="badge-dot mr-4">
        <i className="bg-danger" />
        Sintomáticos
      </Badge>
    );
  };
  return ( 
    <Badge color="" className="badge-dot mr-4">
      <i className="bg-success" />
      Assintomáticos
    </Badge>
  );
};

class UnidadeSaude extends React.Component {
  state = {
    cadastrarModal: false,
    error: null,
    isLoaded: false,
    items: [],
    cep: ''
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  //Para funcionar a busca de cep
  

  buscarCepChange(event) {
    this.setState({cep: event.target.value});
  }

  componentDidMount() {
    fetch("http://localhost:3001/unidadeSaude")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
    fetch("https://viacep.com.br/ws/"+this.setState.cep+"/json/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      //Caso der erro no carregamento dos dados
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      //Enquanto carrega os dados
      return (
        <>
          <HeaderBasic />
          <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)', textAlign: 'center'
            }}
            >
              <h1 className="text-white">Carregando...</h1>
              <Spinner color="dark" />
          </div>
        </>
      );
    } else {
      return (
        <>
          <HeaderBasic />
          {/* Page content */}
          <Container className="mt--7" fluid>
            {/* Table */}
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0 mesma-linha">Unidades de saúde</h3>
                    <Button color="primary" onClick={() => this.toggleModal("cadastrarModal")} type="button" className="float-right">
                      Cadastro
                    </Button>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Endereço</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={index}>
                          <td>
                            {item.nome}
                          </td>
                          <td>
                            <VerificaSintomatico sintomatico={item.sintomatica}/>
                          </td>
                          <td>
                            {item.rua}, {item.numero}
                          </td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Another action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Something else here
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <CardFooter className="py-4">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-center mb-0"
                        listClassName="justify-content-center mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
          </Container>
          <Modal
            className="modal-dialog-centered"
            isOpen={this.state.cadastrarModal}
            toggle={() => this.toggleModal("cadastrarModal")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cadastro
              </h5>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("cadastrarModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center mb-3">
                    <big>Cadastro de Unidades de Saúde</big>
                  </div>
                  <Form role="form">
                    <FormGroup>
                      <Input placeholder="Nome" type="text" />
                    </FormGroup>
                    <FormGroup>
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="sintomaticaCheck"
                          type="checkbox"
                        />
                        <label className="custom-control-label" htmlFor="sintomaticaCheck">
                          Sintomática
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col md="8">
                          <FormGroup>
                            <Input placeholder="Cep" name="cep" id="cep" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Button color="primary"type="button">
                              Buscar
                            </Button>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormText color="muted">
                        Digite o cep e aperte buscar para o autopreenchimento
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Rua" name="rua" type="text" disabled />
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Número" name="numero" type="text" disabled />
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Complemento" name="complemento" type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Bairro" name="bairro" type="text" disabled />
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Cidade" name="cidade" type="text" disabled />
                    </FormGroup>
                    <FormGroup>
                      <Input placeholder="Estado" name="estado" type="text" disabled />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("cadastrarModal")}
              >
                Close
              </Button>
              <Button color="success" type="button">
                Save changes
              </Button>
            </div>
          </Modal>
        </>
      );
    }
  }
}

export default UnidadeSaude;
