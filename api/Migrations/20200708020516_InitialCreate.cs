using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vendas",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    contrato = table.Column<string>(nullable: true),
                    chip = table.Column<string>(nullable: true),
                    rastreador = table.Column<string>(nullable: true),
                    linha = table.Column<string>(nullable: true),
                    cliente = table.Column<string>(nullable: true),
                    cpfcnpj = table.Column<string>(nullable: true),
                    RGIE = table.Column<string>(nullable: true),
                    dataNascimento = table.Column<string>(nullable: true),
                    endereco = table.Column<string>(nullable: true),
                    bairro = table.Column<string>(nullable: true),
                    cidadeUF = table.Column<string>(nullable: true),
                    cep = table.Column<string>(nullable: true),
                    telefoneResidencial = table.Column<string>(nullable: true),
                    telefoneCelular = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    marca = table.Column<string>(nullable: true),
                    modelo = table.Column<string>(nullable: true),
                    cor = table.Column<string>(nullable: true),
                    placa = table.Column<string>(nullable: true),
                    panico1 = table.Column<string>(nullable: true),
                    panico2 = table.Column<string>(nullable: true),
                    valorRastreador = table.Column<string>(nullable: true),
                    valorBotao = table.Column<string>(nullable: true),
                    localvenda = table.Column<string>(nullable: true),
                    vendendorIndicacao = table.Column<string>(nullable: true),
                    localInstalacao = table.Column<string>(nullable: true),
                    instalador = table.Column<string>(nullable: true),
                    dataVenda = table.Column<string>(nullable: true),
                    dataInstalacao = table.Column<string>(nullable: true),
                    observacoes = table.Column<string>(nullable: true),
                    parcelas = table.Column<string>(nullable: true),
                    tipoPagamento = table.Column<string>(nullable: true),
                    BotaoExtra = table.Column<string>(nullable: true),
                    BotaoExtraQuantidade = table.Column<string>(nullable: true),
                    tipoVeiculo = table.Column<string>(nullable: true),
                    qtdParcelas = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vendas", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vendas");
        }
    }
}
