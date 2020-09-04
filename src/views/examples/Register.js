import React from "react";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {
  render() {
    return (
      <>

        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            

            <CardBody className="px-lg-5 py-lg-5">

              <Form role="form">


               


                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nome" type="nome" autoComplete="new-nome" />
                  </InputGroup>
                </FormGroup>


                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" />
                  </InputGroup>
                </FormGroup>



                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select">
                      <option>Perfil</option>
                      <option>Municipal</option>
                      <option>Monitoramento</option>
                    </Input>
                  </InputGroup>
                </FormGroup>
                

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-fat-add" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select">
                      <option>Unidade de Saúde</option>
                      <option>UBS ALTO CAFEZAL “Dr. Francisco Nicolau Salum”</option>
                      <option>UBS BANDEIRANTES “Dr. Augusto Bastos Chaves”</option>
                      <option>UBS CASCATA “Dr. Luis Augusto Pisani Lourenço”</option>
                      <option>UBS CASTELO BRANCO “Dr. Eurípides Batistetti”</option>
                      <option>UBS CHICO MENDES “Dr. Érico Cardeal”</option>
                    </Input>
                  </InputGroup>
                </FormGroup>



                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Senha" type="password" autoComplete="new-password" />
                  </InputGroup>
                </FormGroup>


          

             

                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                     
                    </div>
                  </Col>
                </Row>

                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button">
                    Criar Conta
                  </Button>
                </div>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
