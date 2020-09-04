import React from "react";


import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label
} from "reactstrap";

class Register extends React.Component {
  render() {
    return (
      <>

        <Col lg="12" md="8">
          <Card className="bg-secondary shadow border-0">


            <CardBody className="px-lg-5 py-lg-5">

              <Form role="form">

                <label for="nome">Nome</label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="nome" placeholder="Nome Completo" autoComplete="new-nome" />
                  </InputGroup>
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <label for="datanascimento">Data Nascimento</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Data Nascimento" type="Date" autoComplete="new-date" />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <label for="CNS">CNS</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-active-40" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" autoComplete="new-cns" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <label for="rua">Rua</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Rua" type="text" autoComplete="new-endereco" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <label for="numero">Número</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Número" type="number" autoComplete="new-endereco" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <label for="bairro">Bairro</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Bairro  " type="text" autoComplete="new-endereco" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <label for="telefone ">Telefone</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-mobile-button" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Telefone" type="text" autoComplete="new-telefone" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <label for="dataobito ">Data Óbito</label>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Óbito" type="Date" />
                  </InputGroup>
                </FormGroup>

                <Label for="avaliacao">Primeira Avaliação Médica</Label>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" />
                  </InputGroup>
                </FormGroup>


                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="isolamento">Isolamento Até</Label>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="date" name="isolamento" id="isolamento" />
                      </InputGroup>
                    </FormGroup>
                  </Col>


                  <Col md={6}>
                    <FormGroup>
                      <Label for="Isintomas">Inicio Sintomas</Label>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="date" name="Isintomas" id="Isintomas" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Label for="datacoleta">Data Coleta Exames</Label>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="Date" />
                  </InputGroup>
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <label for="local ">Local</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                          <option>2</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <label for="convenio ">Tipo de Convênio</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                          <option>2</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <label for="unidades ">Unidades de Referência</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <label for="tipoexame ">Tipos de Exame</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <label for="dataresultado ">Data do Resultado</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="Date" />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <label for="resultadoexame">Resultado do Exame</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <label for="gruporisco ">Grupo de Risco</label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-fat-add" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select">
                      <option>1</option>
                    </Input>
                  </InputGroup>
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <label for="dataligacao ">Data Ligação</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="Date" />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <label for="horaligacao ">Hora Ligação</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="hour" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>


                <Row form>
                  <Col md={6}>
                    <label for="comorbidade ">Comorbidade</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>



                  <Col md={6}>
                    <label for="isolamento ">Em Isolamento</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <label for="orientacao">Orientação</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>



                  <Col md={6}>
                    <label for="apetite ">Apetite</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <label for="sinais ">Sinais</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <label for="febre ">Febre</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <label for="tosse ">Tosse</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <label for="ar ">Falta de Ar/Cansaço</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>


                <label for="situacao ">Situação da Família</label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-fat-add" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select">
                      <option>1</option>
                    </Input>
                  </InputGroup>
                </FormGroup>

                <label for="nome ">Nome Completo</label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="nome" autoComplete="new-nome" />
                  </InputGroup>
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <label for="condicao ">Condição</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>Assintomatico</option>
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <label for="exame ">Exame</label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option>1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>




                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button">
                    Salvar
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
