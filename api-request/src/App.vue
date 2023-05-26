<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible 
		v-for="mensagem in mensagens" 
		:key="mensagem.texto"
		:variant="mensagem.tipo"
	>
			{{ mensagem.texto }}
		</b-alert> 

		<b-card>
			<b-form-group label="None:">
				<b-form-input type="text"
				 size="lg"
				  v-model="usuario.nome"
				  placeholder="Informe o Nome"
				>
				</b-form-input>
				<b-form-group label="E-mail:">
				<b-form-input type="text"
				 size="lg"
				  v-model="usuario.email"
				  placeholder="Informe o E-mail"
				  >
				  
				</b-form-input>
				</b-form-group>
				<hr>
				<b-button @click="salvar"
				size="lg"
				variant="primary">
					Salvar
				</b-button>
				<b-button @click="obterUsuario"
				size="lg"
				variant="success"
				class="ml-2">
					Obter Usuário
				</b-button>
			</b-form-group>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios"
			:key="id"
			>
				<strong>Nome: </strong>{{ usuario.nome }}<br />
				<strong>E-mail: </strong>{{ usuario.email }}<br />
				<b-button 
				variant="danger"
				size="lg"	
				class="ml-2"
				@click="excluir(id)"
				>Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data(){
		return{
			usuario: {
				nome: '',
				email: ''
			},
			mensagens: [],
			usuarios: []
		}
	},
	// created(){
	// 	this.$http.get('usuarios.json').then(response =>{
	// 		console.log(response);
	// 	})
	// },
	methods:{
		salvar(){
		this.$http.post('usuarios.json', this.usuario)
			.then(() => {
				this.limpar();
				this.mensagens.push({
					texto: 'Usuario adicionado com sucesso!',
					tipo: 'success'
				})
					
			})
				.catch(() => {
					this.limpar();
					this.mensagens.push({
						texto: 'Erro ao adicionar o usuario!',
						tipo: 'danger'
				})

			})
		},
		limpar(){
			this.usuario.nome = '';
			this.usuario.email = '';
			this.mensagens = [];
		},
		obterUsuario(){
			this.$http.get('usuarios.json')
			.then(response => {
				this.usuarios = response.data;
			})
		},
		excluir(id){
			this.$http.delete(`usuarios/${id}`)
			.then(() => this.limpar())
			.catch(err => {
				this.limpar();
				this.obterUsuario();
				this.mensagens.push({
					texto: 'Problema ao deletar',
					type: 'danger'
				})
					
			})
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
