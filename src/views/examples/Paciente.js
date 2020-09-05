import React from "react";
import api from "../../services/api";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  FormText,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label
} from "reactstrap";

//Componentes
import HeaderBasic from "components/Headers/HeaderBasic.js";

//API
import axios from "axios";

//Formata data
function dataAtual(){
  var data = new Date();

  var dia = data.getDate();    
  var mes = data.getMonth()+1;   
  var ano = data.getFullYear();

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);

}

//Formata hora
function horaAtual(){
  var data = new Date();
  
  var hora = data.getHours();   
  var min = data.getMinutes(); 
  var seg = data.getSeconds(); 

  var str_hora = ("0"+hora).slice(-2) + ':' + ("0"+min).slice(-2) + ':' + ("0"+seg).slice(-2);

  return str_hora;
}

class Register extends React.Component {

  state = {
    items: [],
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  };
  
  componentDidMount() {
    //Carrega os dados
    fetch(api+"unidadeSaude")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          items: result
        });
      }
    );
  };

  //Fução da Api de CEP
  BuscaClick(){
    axios.get('https://viacep.com.br/ws/'+this.state.cep+'/json/').then(response => response.data)
    .then((data) => {
      this.setState({
        rua: data.logradouro,
        bairro: data.bairro,
        complemento: data.complemento,
        cidade: data.localidade,
        estado: data.uf
      })
    }).catch(function (error) {
      console.log('Erro: ', error);
    });
  }

  //Atualiza o valor a cada dígito
  InputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
          [name]: value
      });
  }

  render() {
    const { items } = this.state;

    return (
      <>
        <HeaderBasic />
        <Col lg="12">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">

              <Form role="form">

                <h1>Dados pessoais</h1>

                <Label for="nome">Nome</Label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="nome" placeholder="Nome Completo" id="nome" autoComplete="new-nome" required />
                  </InputGroup>
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <Label for="datanascimento">Data Nascimento</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Data Nascimento" id="datanascimento" type="Date" autoComplete="new-date" />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Label for="CNS">CNS</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-badge" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="CNS" maxLength="15" autoComplete="new-cns" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                
                <hr></hr>

                <h1>Endereço e Telefone</h1>

                <Row form>
                  <Col md={6}>
                    <Label for="cep">CEP</Label>
                    <Row>
                        <Col md="8">
                            <FormGroup>
                              <Input
                              id="cep"
                              name="cep"
                              type="text"
                              placeholder="Cep"
                              minLength="8"
                              maxLength="9"
                              defaultValue={this.state.cep || ''}
                              onChange={e => this.InputChange(e)}
                              required />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Button color="primary" onClick={() => this.BuscaClick()} type="button">
                              Buscar
                            </Button>
                          </FormGroup>
                        </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Label for="rua">Rua</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-pin-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                        placeholder="Rua" 
                        defaultValue={this.state.rua || ''} 
                        onChange={e => this.InputChange(e)} 
                        name="rua" 
                        id="rua" 
                        type="text" 
                        autoComplete="new-endereco" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <Label for="numero">Número</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-pin-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Número da casa"
                          id="numero"
                          type="number"
                          name="numero"
                          defaultValue={this.state.numero || ''}
                          onChange={e => this.InputChange(e)}
                          autoComplete="new-endereco" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <Label for="bairro">Bairro</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-pin-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                        placeholder="Bairro"
                        id="bairro"
                        name="bairro"
                        type="text"
                        defaultValue={this.state.bairro || ''} 
                        onChange={e => this.InputChange(e)} 
                        autoComplete="new-endereco" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <Label for="cidade">Cidade</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" ni ni-pin-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                        placeholder="Cidade"
                        id="cidade"
                        type="text"
                        name="cidade"
                        defaultValue={this.state.cidade || ''}
                        onChange={e => this.InputChange(e)}
                        autoComplete="new-cidade" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <Label for="estado">Estado</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-pin-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                          <Input
                          type="select"
                          name="estado"
                          id="estado"
                          defaultValue={this.state.estados}
                          onChange={e => this.InputChange(e)}
                          disabled
                          required >
                            <option value="SP"> São Paulo </option>
                            <option value="AC"> Acre </option>
                            <option value="AL"> Alagoas </option>
                            <option value="AP"> Amapá </option>
                            <option value="AM"> Amazonas </option>
                            <option value="BA"> Bahia </option>
                            <option value="CE"> Ceará </option>
                            <option value="DF"> Distrito Federal </option>
                            <option value="ES"> Espírito Santo </option>
                            <option value="GO"> Goiás </option>
                            <option value="MA"> Maranhão </option>
                            <option value="MT"> Mato Grosso </option>
                            <option value="MS"> Mato Grosso do Sul </option>
                            <option value="MG"> Minas Gerais </option>
                            <option value="PA"> Pará </option>
                            <option value="PB"> Paraíba </option>
                            <option value="PR"> Paraná </option>
                            <option value="PE"> Pernambuco </option>
                            <option value="PI"> Piauí </option>
                            <option value="RJ"> Rio de Janeiro </option>
                            <option value="RN"> Rio Grande do Norte </option>
                            <option value="RS"> Rio Grande do Sul </option>
                            <option value="RO"> Rondônia </option>
                            <option value="RR"> Roraima </option>
                            <option value="SC"> Santa Catarina </option>
                            <option value="SE"> Sergipe </option>
                            <option value="TO"> Tocantins </option>
                          </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <Label for="telefone">Telefone</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-mobile-button" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Telefone" id="telefone" type="text" autoComplete="new-telefone" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                
                <hr></hr>

                <h1>Avaliação médica</h1>

                <Row form>
                  <Col md={6}>
                    <Label for="avaliacao">Primeira Avaliação Médica</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="textarea" name="text" id="avaliacao" />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Label for="dataobito">Data Óbito</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Óbito" type="Date" id="dataobito" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

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

                <Row form>
                  <Col md={6}>
                    <Label for="local ">Local</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="local">
                          <option>Fazer API com select</option>
                          <option>2</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Label for="convenio">Tipo de Convênio</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="convenio">
                          <option value="SUS">SUS</option>
                          <option value="Particular">Particular</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Label for="unidades">Unidades de Referência</Label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-fat-add" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select" id="unidades">
                      {items.map((item, index) => (
                        <option key={index} value={item.idUnidadeSaude}>{item.nome}</option>
                      ))}
                    </Input>
                  </InputGroup>
                </FormGroup>
                
                <hr></hr>

                <h1>Exame</h1>

                <Row form>
                  <Col md={6}>
                    <Label for="datacoleta">Data Coleta Exame</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="Date" id="datacoleta" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <Label for="tipoexame">Tipos de Exame</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="tipoexame">
                          <option value="Teste Rápido">Teste Rápido</option>
                          <option value="Sorologia">Sorologia</option>
                          <option value="PCR-RT">PCR-RT</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <Label for="dataresultado">Data do Resultado</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="Date" id="dataresultado"/>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Label for="resultadoexame">Resultado do Exame</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-folder-17" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="resultadoexame">
                          <option value="N">Negativo</option>
                          <option value="S">Positivo</option>
                          <option value="A">Aguardando Resultado</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <hr></hr>

                <h1>Ligação</h1>

                <Row form>
                  <Col md={6}>
                    <Label for="dataligacao ">Data Ligação</Label>
                    <FormGroup>
                      <Input type="Date" value={dataAtual()} disabled/>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Label for="horaligacao ">Hora Ligação</Label>
                    <FormGroup>
                      <Input type="hour" value={horaAtual()} disabled/>
                    </FormGroup>
                  </Col>
                  <FormText color="muted">
                    A data e hora são registradas automaticamente ao terminar o contato
                  </FormText>
                </Row>

                <hr></hr>

                <h1>Situação</h1>

                <Label for="gruporisco">Grupo de Risco</Label>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-fat-add" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select" id="gruporisco">
                      <option value="N">Não</option>
                      <option value="S">Sim</option>
                    </Input>
                  </InputGroup>
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <Label for="comorbidade ">Comorbidade</Label>
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
                    <Label for="isolamento">Em Isolamento</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="isolamento">
                          <option value="N">Não</option>
                          <option value="S">Sim</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <Label for="orientacao">Orientação</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="orientacao">
                          <option value="Bem">Bem</option>
                          <option value="Confuso">Confuso</option>
                          <option value="Sonolento">Sonolento</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>



                  <Col md={6}>
                    <Label for="apetite ">Apetite</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option value="B">Bom</option>
                          <option value="D">Diminuído</option>
                          <option value="A">Anorético</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <Label for="sinais ">Sinais</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option value="1">1</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Label for="febre ">Febre</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select">
                          <option value="1">Ausente</option>
                          <option value="2">Um pico baixo</option>
                          <option value="3">Febre Persistente - 3 Picos por dia</option>
                        </Input>
                      </InputGroup>
                      <FormText color="muted">
                        Com 3 picos de febre, já deve ser considerada persistente.
                      </FormText>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6}>
                    <Label for="tosse">Tosse</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="tosse">
                          <option value="1">Ausente</option>
                          <option value="2">Consegue falar sem tossir</option>
                          <option value="3">Não completa uma frase sem tossir</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Label for="ar">Falta de Ar/Cansaço</Label>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-fat-add" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" id="ar">
                          <option value="1">Ausente</option>
                          <option value="2">Presente ao esforço</option>
                          <option value="3">Intensa no repouso</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <hr></hr>

                <h1>Família</h1>

                <Label for="situacao ">Situação da Família</Label>
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

                <Label for="nome ">Nome Completo</Label>
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
                    <Label for="condicao ">Condição</Label>
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
                    <Label for="exame ">Exame</Label>
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

                <hr></hr>

                <h1>Observações Gerais</h1>

                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Input type="textarea" name="text" id="observacao" />
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
