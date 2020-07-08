using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
namespace api.Models
{
    public class Venda{
        public int id {get;set;}
	    public string contrato {get;set;}
		public string chip {get;set;}
		public string rastreador {get;set;}
		public string linha {get;set;}
		public string cliente {get;set;}
		public string cpfcnpj {get;set;}
		public string RGIE {get;set;}
		public string dataNascimento {get;set;}
		public string endereco {get;set;}
		public string bairro {get;set;}
		public string cidadeUF {get;set;}
		public string cep {get;set;}
		public string telefoneResidencial {get;set;}
		public string telefoneCelular {get;set;}
		public string email {get;set;}
		public string marca {get;set;}
		public string modelo {get;set;}
		public string cor {get;set;}
		public string placa {get;set;}
		public string panico1 {get;set;}
		public string panico2 {get;set;}
		public string valorRastreador {get;set;}
		public string valorBotao {get;set;}
		public string localvenda {get;set;}
		public string vendendorIndicacao {get;set;}
		public string localInstalacao {get;set;}
		public string instalador {get;set;}
		public string dataVenda {get;set;}
		public string dataInstalacao {get;set;}
		public string observacoes {get;set;}
		public string parcelas {get;set;}
		public string tipoPagamento {get;set;}
		public string BotaoExtra {get;set;}
		public string BotaoExtraQuantidade {get;set;}
		public string tipoVeiculo {get;set;}
		public string qtdParcelas {get;set;}
    }
}