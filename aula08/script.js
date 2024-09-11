class Produto {
    constructor(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
    }
  
    vender(quantidade) {
      if (this.estoque >= quantidade) {
        this.estoque -= quantidade;
        console.log(`${quantidade} unidade(s) de ${this.nome} vendida(s).`);
      } else {
        console.log(`Estoque insuficiente de ${this.nome}.`);
      }
    }
  
    adicionarEstoque(quantidade) {
      this.estoque += quantidade;
      console.log(`${quantidade} unidade(s) de ${this.nome} adicionada(s) ao estoque.`);
    }
  
    mostrarInfo() {
      console.log(`Produto: ${this.nome}, Preço: R$${this.preco}, Estoque: ${this.estoque}`);
    }
  }
  
  const produto1 = new Produto("Smartphone", 1500, 10);
  
  produto1.mostrarInfo();
  
  produto1.vender(3);
  
  produto1.adicionarEstoque(5);
  
  produto1.mostrarInfo();
  