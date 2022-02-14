import {LightningElement} from "lwc";

export default class App extends LightningElement {
  data = [
    {cod:"P-001", nome: "Produto A", preco:"200", estoque:"sim"},
    {cod:"P-002", nome: "Produto B", preco:"300", estoque:"sim"},
    {cod:"P-003", nome: "Produto C", preco:"400", estoque:"sim"},
    {cod:"P-004", nome: "Produto D", preco:"500", estoque:"sim"},
    {cod:"P-005", nome: "Produto E", preco:"600", estoque:"sim"},
    {cod:"P-006", nome: "Produto F", preco:"700", estoque:"sim"}
  ];
}
