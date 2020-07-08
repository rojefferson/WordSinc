import React, { Component } from 'react';
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { Container, Row, Col } from 'reactstrap'
import { Link, withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink ,Button } from 'reactstrap';
import { logout } from '../Services/auth'
import { urlServidor } from '../Services/config'

class Home extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          data: [],
        };

        this.sair = this.sair.bind(this);
      }

     NavTeste(){
        return(
           <div>teste</div>
        );
    }

      deleteItem(id) {
       let confirmDelete = window.confirm('Deseja deletar?')        
        if(confirmDelete){
          fetch(urlServidor +'/Venda/' + String(id), {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(item => {
            this.getVendas()
          })
          .catch(err => console.log(err))
        }
        
        this.getVendas();
      }
      

    getVendas(){
      fetch( urlServidor + '/Venda/Venda')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    }
    componentDidMount(){
      this.getVendas()
    }
    componentDidUpdate(){
      this.getVendas()
    }

    sair(){
      logout();
      this.props.history.goBack();;
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



    render(){
       const {data} = this.state;
        return (
          <div className="cotainer" >
            <div>
               <this.NavBar sair = {this.sair} />
            </div>
            <div className="row justify-content-center" >
              <div className="col-md-8">
                  <div className="card">
                    <div className="card-header" style= {{textAlign: "center"}} > <h5>Vendas</h5></div>
                      <div className="card-body">
                      <Container>
                        <Row>
                          <Col>
                           <div  style = {{float: "right"}}>
                            <button  class="btn btn-success" onClick={event =>  this.props.history.push("/venda")}> 
                                Adicionar
                              </button>
                           </div>                       
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                          <ReactTable
                          data={data}
                          filterable
                          defaultFilterMethod={(filter, row) =>
                            String(row[filter.id]).toLowerCase().indexOf(String(filter.value).toLowerCase())>-1}
                          columns={[
                            {
                              Header: "Cliente",
                              accessor: "cliente",
                            },
                            {
                              width: 200,
                              Header: "Chip",
                              accessor: "chip",
                            },
                            {
                              width: 150,
                              Header: "CNPJ/CPF",
                              accessor: "cpfcnpj",
                            },
                            { 
                              width: 100,
                              Header: "Deletar",
                              accessor: "name",
                              filterable: false,
                              Cell: cell => (
                                <button className="btn btn-danger" onClick={() => this.deleteItem(cell.original.id)}>
                                  deletar
                                </button>
                              )
                            },
                            { 
                              width: 100,     
                              Header: "Deletar",
                              accessor: "id",
                              filterable: false,
                              Cell: cell => (
                                <button className="btn btn-info"  onClick={event => this.props.history.push(('/Venda/' + cell.original.id ))} >
                                  Editar
                                </button>
                              )
                            }
                          ]}
                          defaultPageSize={10}
                        
                        />
                          </Col>
                        </Row>
                    </Container>
                      </div>
                </div>
               </div>
            </div>
          </div>     
          
        );
    }


}


export default withRouter(Home);