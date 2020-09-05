import React from "react";

import {
    Button,
    Col,
    Form,
    FormGroup, 
    FormText, 
    Input,
    Label,
    Row,
    Spinner
} from "reactstrap";

//API
import axios from "axios";

import api from "../../services/api";

class CadastroUnidade extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
            nome: '',
            sintomatica: false,
            isSubmitting: false
        };
    }
    

  //Cadastra
    submitForm = async e => {
        e.preventDefault();

        console.log(this.state);

        var cepSet = this.state.cep;
        var ruaSet = this.state.rua;
        var numeroSet = this.state.numero;
        var complementoSet = this.state.complemento;
        var bairroSet = this.state.bairro;
        var cidadeSet = this.state.cidade;
        var estadoSet = this.state.estado;
        var nomeSet = this.state.nome;
        var sintomaticaSet = this.state.sintomatica;

        //Convertendo para numero
        if (sintomaticaSet) {
            sintomaticaSet = 1;
        } else {
            sintomaticaSet = 0;
        }

        //Cadastra via api
        axios.post(api+'Endereco/',{
            cep: cepSet,
            rua: ruaSet,
            numero: numeroSet,
            bairro: bairroSet,
            complemento: complementoSet,
            cidade: cidadeSet,
            estado: estadoSet
        }).then(function (response) {
            console.log('Sucesso: ', response);
            axios.post(api+'UnidadeSaude/',{
                nome: nomeSet,
                sintomatica: sintomaticaSet
            }).then(function (response) {
                console.log('Sucesso: ', response);

                window.location.reload(false);
            });
        }).catch(function (error) {
            console.log('Erro: ', error);
        });
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
        if (this.state.isSubmitting) {
            return (
                <>
                    <div
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, 30%)',
                        textAlign: 'center',
                        height: '200px',
                        position: 'relative'
                    }}
                    >
                        <h1 className="text-black">Carregando...</h1>
                        <Spinner color="dark" />
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Form role="form" onSubmit={this.submitForm}>
                        <FormGroup>
                            <Input
                                placeholder="Nome"
                                type="text"
                                name="nome"
                                defaultValue={this.state.nome || ''}
                                onChange={e => this.InputChange(e)}
                                required />
                        </FormGroup>
                        <FormGroup style={{marginLeft: '24px'}}>
                            <Input
                                type="checkbox"
                                checked={this.state.sintomatica || ''}
                                onChange={e => this.InputChange(e)}
                                name="sintomatica"
                                id="sintomatica"/>
                            <Label for="sintomatica" check>Unidade Sintomática</Label>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="8">
                                    <FormGroup>
                                        <Input
                                        id="cep"
                                        name="cep"
                                        type="text"
                                        defaultValue={this.state.cep || ''}
                                        onChange={e => this.InputChange(e)}
                                        placeholder="Cep"
                                        minLength="8"
                                        maxLength="9"
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
                            <FormText color="muted">
                                Digite o cep e aperte buscar para o autopreenchimento
                            </FormText>
                        </FormGroup>
                        <FormGroup>
                            <Input defaultValue={this.state.rua || ''} onChange={e => this.InputChange(e)} placeholder="Rua" name="rua" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <Input defaultValue={this.state.numero || ''} onChange={e => this.InputChange(e)} placeholder="Número" name="numero" type="text" required />
                        </FormGroup>
                        <FormGroup>
                            <Input defaultValue={this.state.complemento || ''} onChange={e => this.InputChange(e)} placeholder="Complemento" name="complemento" type="text" />
                        </FormGroup>
                        <FormGroup>
                            <Input defaultValue={this.state.bairro || ''} onChange={e => this.InputChange(e)} placeholder="Bairro" name="bairro" type="text" required />
                        </FormGroup>
                        <FormGroup>
                            <Input defaultValue={this.state.cidade || ''} placeholder="Cidade" name="cidade" type="text" required />
                        </FormGroup>
                        <FormGroup>
                            <Input value={this.state.estado || ''} disabled type="select" name="estado" id="estado" required >
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
                        </FormGroup>
                        <FormGroup className="text-center">
                            <Button
                                color="secondary"
                                data-dismiss="modal"
                                type="button"
                            >
                                Cancelar
                            </Button>
                            <Button color="success" type="submit">
                                Cadastrar
                            </Button>
                        </FormGroup>
                    </Form>
                </>
            );
        }
    }
}

export default CadastroUnidade;