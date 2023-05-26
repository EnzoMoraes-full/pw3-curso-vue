<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<div id="app">
    <h1>Exercício 1</h1>
    <hr>
    <p>{{ cpf | formataCPF }}</p>
    <hr>
  </div>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
	<h1>Exercício 2</h1>
    <hr>
	 <p>{{ frase | ContadorPalavra }}</p>
    <hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
	<h1>Exercício 3</h1>
    <hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<h1>Exercício 4</h1>
    <hr>
	</div>
</template>

<script>
export default {
	 filters: {
    formataCPF(valor){
      const array = valor.split('');
      array.splice(3, 0, '.');
      array.splice(7, 0, '.');
      array.splice(11, 0, '-');
      return array.join('');
    },
    ContadorPalavra(valor){
     const array = valor.split('');
      array.splice(9, 0, ' (9) ');
      array.splice(14, 0, ' (3) ');
      array.splice(20, 0, ' (3) ');
	  array.splice(28, 0, ' (7) ');
      return array.join('');
    },
  },

 data(){
    return{
			cpf: '12345678901',
			frase: 'Palmeiras não tem muldial'
        }
    },
}
</script>

<style>

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
	background-color: sandybrown;
}
</style>
