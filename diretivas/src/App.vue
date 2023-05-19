<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>

		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<p v-text="'Usando diretiva <strong>v-text</strong>'"></p>

		<p v-destaque:fundo.atrasar="'lightblue'"> Usando diretiva personalizada </p>
		<p v-destaque.atrasar="'pink'"> Usando diretiva personalizada </p>
		<p v-destaque:fundo.atrasar.alternar="destaqueConfigs"> Usando diretiva personalizada </p>
		

		<p v-nome:arg.modifA.modifB.modifC.modifN="valor"> Usando diretiva personalizada </p>

</div>
</template>

<script>
export default {
	directives:{
		destaque:{ 
		bind(el, binding, vnode){
		
		//	el.style.color = binding.value;
		const aplicaCor = cor => {
			if(binding.arg === 'fundo'){
              el.style.backgroundColor = cor 
			} else {
				el.style.color = cor
			}

			let atraso = 0;
			if(binding.modifiers.atrasar){
              atraso = binding.value.atraso;
			}

			const cor1 = bindig.value.cor1;
			const cor2 = bindig.value.cor2;
             let corAtual = cor1;

			 setTimeout(() => {
				if(binding.modifers.alterna){
					setInterval.Interval(() => {
						corAtual = corAtual === cor1 ? cor2 : cor1
						aplicaCor(corAtual);
					}, binding.value.intervalo)
				} else {
					aplicaCor(biding.value.cor1);
				}
			 }, atraso)
		}
		}
	}
	},

	data(){
		return{
			destaqueConfigs: {
				cor1: 'green',
				cor2: 'red',
				atraso: 2000,
				interValor: 200
			}
		}
	}
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
}
</style>
