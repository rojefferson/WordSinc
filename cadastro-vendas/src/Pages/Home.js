import React, { Component } from 'react';
import { render } from "react-dom";
import matchSorter from 'match-sorter'
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { Container, Row, Col } from 'reactstrap'

class Home extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          data: [],
        };
      }


      deleteItem(id) {
       let confirmDelete = window.confirm('Deseja deletar?')        
        if(confirmDelete){
          fetch('https://localhost:5001/Venda/' + String(id), {
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
      fetch('https://localhost:5001/Venda/Venda')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    }
    componentDidMount(){
      this.getVendas()
    }
    componentDidUpdate(){
      this.getVendas()
    }

    //TODO fazer delete
    //TODO fazer update
    render(){
       const {data} = this.state;
        return (
          <Container>
            <Row>
              <Col xs="15" md="10">
               <h1>Vendas</h1>
              </Col>
              <Col>
                 <button  class="btn btn-success" onClick={event =>  window.location.href='/Venda/30'}> 
                   Adicionar
                 </button>
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
                    <button class="btn btn-danger" onClick={() => this.deleteItem(cell.original.id)}>
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
                    <button class="btn btn-info"  >
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
        );
    }


}


export default Home