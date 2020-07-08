import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, FormText  } from 'reactstrap'
import {Form,FormControl, ControlLabel, HelpBlock, Checkbox, Radio} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink ,Button } from 'reactstrap';
import { cadastrarVenda } from '../Services/api'
import { urlServidor } from '../Services/config'
import { logout } from '../Services/auth'
import Venda from "../Models/Venda"


class CreateVenda extends  React.Component{
    constructor(props){
      super(props);   
      let idVenda = props.match.params.id;
      if(idVenda == null){
        this.state = Venda
      } else
      {
        this.state = Venda
        this.getVenda(idVenda);
      }
    }

    getVenda(id){
      fetch(urlServidor + 'Venda/' + String(id))
      .then(response => response.json())
      .then(data => {this.setState({ data })
            });
    }
    
  handleChange(event) {
    let fieldName = event.target.name;
    let fleldVal = ""   
    if(event.target.type == "checkbox"){
      fleldVal = "0";
      if(event.target.checked){
        fleldVal = "1"
      }
    }else{
      fleldVal  = event.target.value;
    }
    this.setState({data: {...this.state.data, [fieldName]: fleldVal}})

    this.exibirParcelas();
  }

  handleSubmit(venda){
    fetch( urlServidor + 'venda/cadastrar', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:  JSON.stringify(venda.data)
     }).then(response => response.json())
     .then(data => console.log("sucesso"));
    this.props.history.push("/home");
  }



  sair(){
    logout();
    window.location.reload(false);
  }
 NavBar(event){
      return(
        <Container>
              <Row>
                  <Col>
                      <div   style = {{float: "right"}} >   
                          <Nav tabs >
                          <NavItem className="navbar-nav text-left">  
                          <Button onClick = { () =>  event.sair()}>
                              Sair
                          </Button>
                          </NavItem>
                          </Nav>
                      </div >
                  </Col>    
              </Row>
        </Container>
      );
    }


  divisaoForm(dados){
    return(

       <div
        style={{
          backgroundColor: 'grey',
          border: '3px solid',
          height: '30px'
        }}> 
      <p 
          style={{ 
          fontWeight: 900 , 
          textAlign: 'center',
        }} > {dados.text} </p>
      </div>
    );
  }


  exibirParcelas(){ 

    const v = {...this.state.data}

    if(v.tipoPagamento == "CREDITO"){
      return 'visible'
    }

    return 'hidden'
  }


  validaCheck(params,input) {
    if(params[input] == 1){
      return true;
    }
    return false;
  }


  NavBar(event){
    return(
      <Container>
            <Row>
                <Col>
                    <div style = {{float: "right"}} >   
                        <Nav tabs >
                        <NavItem className="navbar-nav text-left">  
                        <Button onClick = { () =>  event.sair()}>
                            Sair
                        </Button>
                        </NavItem>
                        </Nav>
                    </div >
                </Col>    
            </Row>
      </Container>
    );
  }


    render(){
      let {data} = this.state;
      if(data == null){
        data = Venda;
      }
        return( 
          <Container>
            <Row> 
              <this.NavBar sair = {this.sair} />
            </Row>
            <Row>
              <div className="cotainer">
                <div className="row justify-content-center" >
                  <div className="col-md-8">
                    <div className="card">
                      <div className="card-header" style= {{textAlign: "center"}} > <h1>Cadastro de Vendas</h1></div>
                          <div className="card-body">             
                      <Container>
                        <Col>
                          <Form  >
                            <Container>
                              <Row>
                                <Col>
                                  <Form.Group >
                                    <Form.Label>Nº do contrato</Form.Label>
                                    <Form.Control type="text" placeholder="Contrato"  name='contrato'   defaultValue={data.contrato}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group> 
                                </Col>
                                <Col>
                                <Form.Group >
                                    <Form.Label>Nº do CHIP</Form.Label>
                                    <Form.Control type="text" placeholder="chip"  name='chip'   defaultValue={data.chip}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group> 
                                </Col>
                              </Row>

                              <Row>
                                <Col>
                                  <Form.Group >
                                      <Form.Label>Nº do Rastreador</Form.Label>
                                      <Form.Control type="text" placeholder="rastreador"  name='rastreador'   defaultValue={data.rastreador}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>        
                                </Col>
                                <Col>
                                  <Form.Group >
                                        <Form.Label>Nº da Linha</Form.Label>
                                        <Form.Control type="text" placeholder="linha"  name='linha'   defaultValue={data.linha}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>    
                                </Col>
                              </Row>

                              <Row>
                                <Col>
                                      <this.divisaoForm text ="Dados do Cliente" />
                                  </Col>
                              </Row>
                              
                              <Row>
                                <Col>
                                  <Form.Group >
                                          <Form.Label>Cliente: </Form.Label>
                                          <Form.Control type="text" placeholder="cliente"  name='cliente'   defaultValue={data.cliente}  onChange={this.handleChange.bind(this)} />
                                        </Form.Group>    
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group >
                                    <Form.Label>CPF/CNPJ: </Form.Label>
                                    <Form.Control type="text" placeholder="cpfcnpj"  name='cpfcnpj'   defaultValue={data.cpfcnpj}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>   
                                </Col>
                                <Col>
                                  <Form.Group >
                                      <Form.Label>RG/IE: </Form.Label>
                                      <Form.Control type="text" placeholder="RGIE"  name='RGIE'   defaultValue={data.RGIE}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>   
                                </Col>
                                <Col>
                                  <Form.Group >
                                      <Form.Label>Data Nascimento: </Form.Label>
                                      <Form.Control type="date"  name='dataNascimento'   defaultValue={data.dataNascimento}  defaultValue={data.dataNascimento}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>   
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                <Form.Group >
                                      <Form.Label>Endereço: </Form.Label>
                                      <Form.Control type="text"  name='endereco'   defaultValue={data.endereco}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>
                                </Col>   
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group >
                                        <Form.Label>Bairro: </Form.Label>
                                        <Form.Control type="text"  name='bairro'   defaultValue={data.bairro}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group >
                                        <Form.Label>Cidade/UF: </Form.Label>
                                        <Form.Control type="text"  name='cidadeUF'   defaultValue={data.cidadeUF}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group >
                                      <Form.Label>Cidade/UF: </Form.Label>
                                      <Form.Control type="text"  name='cidadeUF'   defaultValue={data.cidadeUF}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group >
                                        <Form.Label>CEP: </Form.Label>
                                        <Form.Control type="text"  name='cep'   defaultValue={data.cep}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group >
                                          <Form.Label>Telefone Residencial: </Form.Label>
                                          <Form.Control type="text"  name='telefoneResidencial'   defaultValue={data.telefoneResidencial}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group >
                                          <Form.Label>Celular: </Form.Label>
                                          <Form.Control type="text"  name='telefoneCelular'   defaultValue={data.telefoneCelular}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                  </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group >
                                      <Form.Label>E-mail: </Form.Label>
                                      <Form.Control type="text"  name='email'   defaultValue={data.email}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col>
                                      <this.divisaoForm text ="Dados do Veiculo" />
                                </Col>
                              </Row>

                  
                              <Row>
                                  <Col>
                                    <FormGroup>
                                    <Label for="exampleSelect">Categoria:</Label>
                                    <Input type="select" name="tipoVeiculo"  onChange={this.handleChange.bind(this)} value={data.tipoVeiculo} >
                                      <option value="CARRO">Carro</option>
                                      <option value="MOTO">Moto</option>
                                      <option value= "CAMINHAO" >Caminhão</option>
                                  I    <option value= "OUTRO" >Outro</option>
                                    </Input>
                                  </FormGroup>
                                  </Col>
                              </Row>

                              <Row>
                                <Col>
                                  <Form.Group >
                                        <Form.Label>Marca: </Form.Label>
                                        <Form.Control type="text"  name='marca'   defaultValue={data.marca}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                  <Form.Group >
                                        <Form.Label>Modelo: </Form.Label>
                                        <Form.Control type="text"  name='modelo'   defaultValue={data.modelo}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                  </Col>
                              </Row>

                              <Row>
                                <Col>
                                  <Form.Group >
                                        <Form.Label>Cor: </Form.Label>
                                        <Form.Control type="text"  name='cor'   defaultValue={data.cor}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group >
                                      <Form.Label>Placa: </Form.Label>
                                      <Form.Control type="text"  name='placa'   defaultValue={data.placa}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                    <Form.Group >
                                          <Form.Label>Pânico 1: </Form.Label>
                                          <Form.Control type="text"  name='panico1'   defaultValue={data.panico1}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                  </Col> 
                              </Row>
                              <Row>
                              <Col>
                                    <Form.Group >
                                        <Form.Label>Pânico 2: </Form.Label>
                                        <Form.Control type="text"  name='panico2'   defaultValue={data.panico2}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                  </Col>
                              </Row>

                              <Row>
                                <Col>
                                      <this.divisaoForm text ="DADOS DA VENDA" />
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group >
                                          <Form.Label>Valor Ratreador : </Form.Label>
                                          <Form.Control type="text"  name='valorRastreador'   defaultValue={data.valorRastreador}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group >
                                        <Form.Label>Valor Botão: </Form.Label>
                                        <Form.Control type="text"  name='valorBotao'   defaultValue={data.valorBotao}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                </Col>
                              </Row>
                                <Row>
                                  <Col>
                                    <FormGroup>
                                    <Label for="exampleSelect">Pagamento</Label>
                                    <Input type="select" name="tipoPagamento"  onChange={this.handleChange.bind(this)} value={data.tipoPagamento} >
                                      <option value="DEBITO">Débito</option>
                                      <option value="CREDITO">Crédito</option>
                                      <option value= "ESPECIE" >Espécie</option>
                                      <option value= "FINANCIAMENTO" >Financiamento</option>
                                      <option value= "OUTROS" >Outros</option>
                                    </Input>
                                  </FormGroup>
                                  </Col>
                                  <Col>
                                    <Form.Group style={{visibility: this.exibirParcelas()}}>
                                        <Label for="exampleSelect">Parcelas</Label>
                                      <Form.Control type="number"  name='qtdParcelas'    onChange={this.handleChange.bind(this)} />
                                    </Form.Group> 
                                  </Col>
                                </Row>

                              <Row>          

                              <Col>
                                    <FormGroup>
                                    <Label for="exampleSelect">Botão entra</Label>
                                    <Input type="select" name="BotaoExtra"  onChange ={this.handleChange.bind(this)} value = {data.BotaoExtra} >
                                      <option value="SIM">Sim</option>
                                      <option value="NAO">Não</option>
                                    </Input>
                                  </FormGroup>
                                  </Col>  
                                  <Col>
                                    <Form.Group>
                                      <Label for="exampleSelect">Qtd. Botão Extra</Label>
                                      <Form.Control type="number"  name='BotaoExtraQuantidade'    onChange={this.handleChange.bind(this)} />
                                    </Form.Group> 
                                  </Col>      
                              </Row>

                                <Row>
                                  <Col>
                                    <Form.Group >
                                        <Form.Label>Local de Venda: </Form.Label>
                                        <Form.Control type="text"  name='localvenda'   defaultValue={data.localvenda}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group >
                                        <Form.Label>Vendedor/Indicação: </Form.Label>
                                        <Form.Control type="text"  name='vendendorIndicacao'   defaultValue={data.vendendorIndicacao}  onChange={this.handleChange.bind(this)} />
                                    </Form.Group>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Group >
                                          <Form.Label>Local de instalação: </Form.Label>
                                          <Form.Control type="text"  name='localInstalacao'   defaultValue={data.localInstalacao}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                    </Col>
                                    <Col>
                                      <Form.Group >
                                          <Form.Label>Instalador: </Form.Label>
                                          <Form.Control type="text"  name='instalador'   defaultValue={data.instalador}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                  <Col>
                                      <Form.Group >
                                          <Form.Label>Data da Venda: </Form.Label>
                                          <Form.Control type="date"  name='dataVenda'   defaultValue={data.dataVenda}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                    </Col>
                                    <Col>
                                      <Form.Group >
                                          <Form.Label>Data da Instalação: </Form.Label>
                                          <Form.Control type="date"  name='dataVenda'   defaultValue={data.dataVenda}  onChange={this.handleChange.bind(this)} />
                                      </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                  <Col>
                                      <Form.Group >
                                            <Form.Label>Observações: </Form.Label>
                                            <Form.Control type="text"  name='observacoes'   defaultValue={data.observacoes}  onChange={this.handleChange.bind(this)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                            </Container>
                            <div style ={{textAlign: "center"}} >
                                <Button  onClick={() => this.handleSubmit({data})} >
                                  Salvar
                                </Button>  
                            </div>
                              
                          </Form> 
                          </Col>
                      </Container>
                            
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>     
        );
    }

}


export default withRouter(CreateVenda);