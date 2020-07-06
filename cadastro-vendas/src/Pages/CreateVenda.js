import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import {Form,FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button,Navbar,Nav} from 'react-bootstrap';



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
      fetch('https://localhost:5001/Venda/' + String(id))
      .then(response => response.json())
      .then(data => this.setState({ data }));
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
  }

  divisaoForm(dados){
    return(

       <div
        style={{
          backgroundColor: 'grey',
          border: '3px solid',
          height: '30px'
        }}
      
      > 
      <p 
          style={{ 
          fontWeight: 900 , 
          textAlign: 'center',
        
        
        }} 
          > {dados.text} </p>
      </div>

    
    );
  }



  validaCheck(params,input) {
    if(params[input] == 1){
      return true;
    }
    return false;
  }

   //TODO deixar data funcionando
   //TODO problema no numeric
   //TODO problema na observação

    render(){
      let {data} = this.state;
      if(data == null){
        data = Venda;
      }
        return( 
          <Container>
              <Row>
                 <Col>
                   <h1>Cadastro de Venda</h1>
                </Col>
               </Row>
              <Col>
              <Form  >
                <Container>
                  <Row>
                    <Col>
                      <Form.Group controlId="contrato">
                        <Form.Label>Nº do contrato</Form.Label>
                        <Form.Control type="text" placeholder="Contrato"  name='contrato'   defaultValue={data.contrato}  onChange={this.handleChange.bind(this)} />
                      </Form.Group> 
                    </Col>
                    <Col>
                     <Form.Group controlId="contrato">
                        <Form.Label>Nº do CHIP</Form.Label>
                        <Form.Control type="text" placeholder="chip"  name='chip'   defaultValue={data.chip}  onChange={this.handleChange.bind(this)} />
                      </Form.Group> 
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="contrato">
                          <Form.Label>Nº do Rastreador</Form.Label>
                          <Form.Control type="text" placeholder="rastreador"  name='rastreador'   defaultValue={data.rastreador}  onChange={this.handleChange.bind(this)} />
                        </Form.Group>        
                    </Col>
                    <Col>
                      <Form.Group controlId="contrato">
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
                      <Form.Group controlId="contrato">
                              <Form.Label>Cliente: </Form.Label>
                              <Form.Control type="text" placeholder="cliente"  name='cliente'   defaultValue={data.cliente}  onChange={this.handleChange.bind(this)} />
                            </Form.Group>    
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="contrato">
                                  <Form.Label>CPF/CNPJ: </Form.Label>
                                  <Form.Control type="text" placeholder="cpfcnpj"  name='cpfcnpj'   defaultValue={data.cpfcnpj}  onChange={this.handleChange.bind(this)} />
                                </Form.Group>   
                    </Col>
                    <Col>
                      <Form.Group controlId="contrato">
                                    <Form.Label>RG/IE: </Form.Label>
                                    <Form.Control type="text" placeholder="RGIE"  name='RGIE'   defaultValue={data.RGIE}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>   
                    </Col>
                    <Col>
                      <Form.Group controlId="contrato">
                                    <Form.Label>Data Nascimento: </Form.Label>
                                    <Form.Control type="date"  name='dataNascimento'   defaultValue={data.dataNascimento}  defaultValue={data.dataNascimento}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>   
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Form.Group controlId="contrato">
                                      <Form.Label>Endereço: </Form.Label>
                                      <Form.Control type="text"  name='endereco'   defaultValue={data.endereco}  onChange={this.handleChange.bind(this)} />
                                  </Form.Group>
                    </Col>   
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="contrato">
                                            <Form.Label>Bairro: </Form.Label>
                                            <Form.Control type="text"  name='bairro'   defaultValue={data.bairro}  onChange={this.handleChange.bind(this)} />
                                        </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="contrato">
                                            <Form.Label>Cidade/UF: </Form.Label>
                                            <Form.Control type="text"  name='cidadeUF'   defaultValue={data.cidadeUF}  onChange={this.handleChange.bind(this)} />
                                        </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="contrato">
                                            <Form.Label>Cidade/UF: </Form.Label>
                                            <Form.Control type="text"  name='cidadeUF'   defaultValue={data.cidadeUF}  onChange={this.handleChange.bind(this)} />
                                        </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="contrato">
                                            <Form.Label>CEP: </Form.Label>
                                            <Form.Control type="text"  name='cep'   defaultValue={data.cep}  onChange={this.handleChange.bind(this)} />
                                        </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="contrato">
                                                <Form.Label>Telefone Residencial: </Form.Label>
                                                <Form.Control type="text"  name='telefoneResidencial'   defaultValue={data.telefoneResidencial}  onChange={this.handleChange.bind(this)} />
                                            </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="contrato">
                                                  <Form.Label>Celular: </Form.Label>
                                                  <Form.Control type="text"  name='telefoneCelular'   defaultValue={data.telefoneCelular}  onChange={this.handleChange.bind(this)} />
                                              </Form.Group>
                      </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="contrato">
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
                    <Row>
                      <Col  xs="1">
                        <Form.Group>
                          <Form.Label>
                            Categoria:
                          </Form.Label>
                        </Form.Group>
                        </Col>
                        <Col xs="2">
                        <Form.Group controlId="contrato">
                                  <Form.Row>
                                    <Form.Check   name='carro'   checked={this.validaCheck(data,"carro")}   onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Carro</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                        <Col xs="2">
                        <Form.Group controlId="contrato">
                                  <Form.Row>
                                    <Form.Check   name='moto'  checked={this.validaCheck(data,"moto")}   onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Moto</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                        <Col xs="2">
                        <Form.Group controlId="contrato">
                                  <Form.Row>
                                    <Form.Check   name='caminhao'   checked={this.validaCheck(data,"caminhao")}    onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Caminhão</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                        <Col xs="2">
                        <Form.Group controlId="contrato">
                                  <Form.Row>
                                    <Form.Check   name='outros'    checked={this.validaCheck(data,"outros")} onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Outros</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                     </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="contrato">
                                                      <Form.Label>Marca: </Form.Label>
                                                      <Form.Control type="text"  name='marca'   defaultValue={data.marca}  onChange={this.handleChange.bind(this)} />
                                                  </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group controlId="contrato">
                                                      <Form.Label>Modelo: </Form.Label>
                                                      <Form.Control type="text"  name='modelo'   defaultValue={data.modelo}  onChange={this.handleChange.bind(this)} />
                                                  </Form.Group>
                      </Col>
                  </Row>

                   <Row>
                     <Col>
                      <Form.Group controlId="contrato">
                                                        <Form.Label>Cor: </Form.Label>
                                                        <Form.Control type="text"  name='cor'   defaultValue={data.cor}  onChange={this.handleChange.bind(this)} />
                                                    </Form.Group>
                     </Col>
                     <Col>
                      <Form.Group controlId="contrato">
                                                        <Form.Label>Placa: </Form.Label>
                                                        <Form.Control type="text"  name='placa'   defaultValue={data.placa}  onChange={this.handleChange.bind(this)} />
                                                    </Form.Group>
                     </Col>
                   </Row>
                   <Row>
                    <Col>
                        <Form.Group controlId="contrato">
                                                          <Form.Label>Pânico 1: </Form.Label>
                                                          <Form.Control type="text"  name='panico1'   defaultValue={data.panico1}  onChange={this.handleChange.bind(this)} />
                                                      </Form.Group>
                      </Col> 
                   </Row>
                   <Row>
                   <Col>
                        <Form.Group controlId="contrato">
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
                      <Form.Group controlId="contrato">
                              <Form.Label>Valor Ratreador : </Form.Label>
                              <Form.Control type="text"  name='valorRastreador'   defaultValue={data.valorRastreador}  onChange={this.handleChange.bind(this)} />
                          </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="contrato">
                            <Form.Label>Valor Botão: </Form.Label>
                            <Form.Control type="text"  name='valorBotao'   defaultValue={data.valorBotao}  onChange={this.handleChange.bind(this)} />
                        </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    <Row>
                      <Col  xs="1">
                        <Form.Group>
                          <Form.Label>
                            Pagamento:  
                          </Form.Label>
                        </Form.Group>
                        </Col>
                        <Col xs="1">
                        <Form.Group controlId="contrato">
                                  <Form.Row>
                                    <Form.Check   name='PagamentoDebito'   checked={this.validaCheck(data,"PagamentoDebito")} onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Débito</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                        <Col xs="1" >
                        <Form.Group controlId="contrato"  >
                                  <Form.Row>
                                    <Form.Check   name='PagamentoCredito'    checked={this.validaCheck(data,"PagamentoCredito")}  onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Crédito</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                        <Col xs="2">
                        <Form.Group  className="w-50 p-3" >
                                    <Form.Control type="number"   name='qtdParcelas'   defaultValue={data.qtdParcelas}  onChange={this.handleChange.bind(this)} />

                              </Form.Group>
                        </Col>
                        <Col xs="1" >
                        <Form.Group controlId="contrato"  >
                                  <Form.Row>
                                    <Form.Check   name='PagamentoEspecie'    checked={this.validaCheck(data,"PagamentoEspecie")}  onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Espécie</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                        <Col xs="1" >
                        <Form.Group controlId="contrato"  >
                                  <Form.Row>
                                    <Form.Check   name='PagamentoFinanciamento'   checked={this.validaCheck(data,"PagamentoFinanciamento")}  onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Financiamento</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                        <Col xs="1" >
                        <Form.Group controlId="contrato"  >
                                  <Form.Row>
                                    <Form.Check   name='PagamentoOutros'   checked={this.validaCheck(data,"PagamentoOutros")}   onChange={this.handleChange.bind(this)} />
                                    <Form.Label>Outros:</Form.Label>
                                  </Form.Row>
                              </Form.Group>
                        </Col>
                     </Row>
                     
                    </Col>
                  </Row>

                  <Row>
                    
                  <Col  xs="5">
                    <Form.Group>
                      <Form.Label>
                        Botão Extra:  
                      </Form.Label>
                    </Form.Group>
                    </Col>
                    <Col xs="1">
                    <Form.Group controlId="contrato">
                              <Form.Row>
                                <Form.Check   name='BotaoExtra'    checked={this.validaCheck(data,"BotaoExtra")}   onChange={this.handleChange.bind(this)} />
                              </Form.Row>
                          </Form.Group>
                    </Col>
                    <Col xs="3">
                        <Form.Group   >
                                    <Form.Control type="number"  min="10"  max="100"  name='botaoExtraQuantidade'   defaultValue={data.botaoExtraQuantidade}  onChange={this.handleChange.bind(this)} />

                              </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="contrato">
                                                            <Form.Label>Local de Venda: </Form.Label>
                                                            <Form.Control type="text"  name='localvenda'   defaultValue={data.localvenda}  onChange={this.handleChange.bind(this)} />
                                                        </Form.Group>
                       </Col>
                       <Col>
                        <Form.Group controlId="contrato">
                                                              <Form.Label>Vendedor/Indicação: </Form.Label>
                                                              <Form.Control type="text"  name='vendendorIndicacao'   defaultValue={data.vendendorIndicacao}  onChange={this.handleChange.bind(this)} />
                                                          </Form.Group>
                       </Col>
                    </Row>
                    <Row>
                      <Col>
                          <Form.Group controlId="contrato">
                                                              <Form.Label>Local de instalação: </Form.Label>
                                                              <Form.Control type="text"  name='localInstalacao'   defaultValue={data.localInstalacao}  onChange={this.handleChange.bind(this)} />
                                                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="contrato">
                                                                <Form.Label>Instalador: </Form.Label>
                                                                <Form.Control type="text"  name='instalador'   defaultValue={data.instalador}  onChange={this.handleChange.bind(this)} />
                                                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                      <Col>
                          <Form.Group controlId="contrato">
                                                              <Form.Label>Data da Venda: </Form.Label>
                                                              <Form.Control type="date"  name='dataVenda'   defaultValue={data.dataVenda}  onChange={this.handleChange.bind(this)} />
                                                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="contrato">
                                                                <Form.Label>Data da Instalação: </Form.Label>
                                                                <Form.Control type="date"  name='dataVenda'   defaultValue={data.dataVenda}  onChange={this.handleChange.bind(this)} />
                                                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                       <Col>
                          <Form.Group controlId="contrato">
                                                                <Form.Label>Observações: </Form.Label>
                                                                <Form.Control type="text"  name='observacoes'   defaultValue={data.observacoes}  onChange={this.handleChange.bind(this)} />
                                                            </Form.Group>
                        </Col>
                    </Row>

                </Container>
                <Button  onClick={() => this.handleSubmit({data})} >
                  Salvar
                </Button>     
               </Form> 
               </Col>
          </Container>
          
        );
    }

}

export default CreateVenda