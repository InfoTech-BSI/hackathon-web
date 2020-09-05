import React from "react";

// reactstrap componentes
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  DropdownMenu,
  DropdownItem,
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

//API
import axios from "axios";
import api from "../../services/api";

//Componentes
import HeaderBasic from "components/Headers/HeaderBasic.js";
import CadastroUnidade from "components/Funcao/CadastroUnidade.js";
import AlteracaoUnidade from "components/Funcao/AlteracaoUnidade";

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
    alterarModal: false,
    error: null,
    isLoaded: false,
    items: [],
    idUnidade: 0,
    idEndereco: 0
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  //Apaga Unidade
  ApagaUnidade(id){
    axios.delete(api+'unidadeSaude/'+id).then(response => response.data)
    .then((data) => {
      window.location.reload(false);
    }).catch(function (error) {
      console.log('Erro: ', error);
    });
  };

  //Muda id da alteração
  IdUdpate(endereco,unidade) {
    this.setState({
      idUnidade: unidade,
      idEndereco: endereco
    });
    this.toggleModal("alterarModal")
  }

  componentDidMount() {
    //Carrega os dados
    fetch(api+"unidadeSaude")
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
  };

  // componentDidUpdate(prevProps) {
  //   // Uso típico, (não esqueça de comparar as props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

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
                      {items.map((item) => (
                        <tr key={item.idUnidadeSaude}>
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
                                role="button"
                                color="white"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v text-black-50" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem
                                  onClick={() => this.IdUdpate(item.idEndereco,item.idUnidadeSaude)}
                                >
                                  Editar
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() => this.ApagaUnidade(item.idUnidadeSaude)}
                                >
                                  Apagar
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
                            href="#1"
                            onClick={e => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#1"
                            onClick={e => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#2"
                            onClick={e => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#3"
                            onClick={e => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#2"
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
                <CardBody className="pl-lg-5 pr-lg-5 pb-0 pt-0">
                  <div className="text-center mb-3">
                    <h1>Cadastro de Unidades de Saúde</h1>
                  </div>
                  <CadastroUnidade></CadastroUnidade>
                </CardBody>
              </Card>
            </div>
          </Modal>
          <Modal
            className="modal-dialog-centered"
            isOpen={this.state.alterarModal}
            toggle={() => this.toggleModal("alterarModal")}
          >
            <div className="modal-header">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("alterarModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="pl-lg-5 pr-lg-5 pb-0 pt-0">
                  <div className="text-center mb-3">
                    <h1>Alteração de Unidades de Saúde</h1>
                  </div>
                  <AlteracaoUnidade
                    idUnidade={this.state.idUnidade}
                    idEndereco={this.state.idEndereco}
                  ></AlteracaoUnidade>
                </CardBody>
              </Card>
            </div>
          </Modal>
        </>
      );
    }
  }
}

export default UnidadeSaude;
