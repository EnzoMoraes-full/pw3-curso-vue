<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" s v-model.lazy.trim="form.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="form.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="form.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea style="white-space: 5px;" name="" cols="30" rows="5"  v-model="form.mensagem"></textarea >
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" value="reproduzivel" v-model="form.caracteristicas"> Reproduzível</span>
					<span><input type="checkbox" value="intermitente" v-model="form.caracteristicas"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" v-model="form.produto" :value="1"> Web</span>
					<span class="mr-4"><input type="radio" v-model="form.produto" :value="2"> Mobile</span>
					<span><input type="radio" v-model="form.produto" :value="3"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="form.prioridade">
						<option v-for="p in prioridades" 
						:key="p.codigo"
							:value="p.codigo"
							>
						
						{{p.codigo }} - {{ p.nome }}
						</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha  v-model="form.escolha"/>
				</Rotulo>
				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ form.email }} - {{ typeof form.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ form.senha }} - {{ typeof form.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ form.idade }} - {{ typeof form.idade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span>{{ form.mensagem }} - {{ typeof form.mensagem }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<li style="list-style: none;" v-for=" c in form.caracteristicas" :key="c">
						{{ c }}
						</li> - {{ typeof form.caracteristicas}}
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ form.produto }} - {{ typeof form.produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ form.propriedade }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ form.escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data(){
		return {
			form:{
			email: 'teste23@gmail.com',
			senha: '',
			idade: 20,
			mensagem: '',
			caracteristicas: ["intermitente"],
			produto: 2,
			prioridade: '0',
			codigo: 0,
			escolha: true,
		},
		prioridades: [
			{codigo: '0', nome: 'Alta'},
			{codigo: '1', nome: 'Moderado'},
			{codigo: '2', nome: 'Baixo'},
			{codigo: '3', nome: 'Minímo'}
		],

		enviado: false

		}
	},

	methods:{
		enviar(){
			this.enviado = true;

        // Validar formulário

			// Enviar o formulário para o back
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
