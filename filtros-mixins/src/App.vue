<template>
  <div id="app">
    <h1>Filtros e mixins</h1>
    <hr>
    <p>{{ cpf  | inverter | formataCPF }}</p>
    <hr>
    <h2>Frutas</h2>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{fruta}}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add"/>
    <hr>
    <NovoFrutas />
  </div>
</template>

<script>
import NovoFrutas from './components/NovoFrutas.vue';
import frutas from './mixins/frutas'
export default {
  components:{
    NovoFrutas
  },
  mixins: [frutas],
  filters: {
    formataCPF(valor){
      const array = valor.split('');
      array.splice(3, 0, '.');
      array.splice(7, 0, '.');
      array.splice(11, 0, '-');
      return array.join('');
    },
    inverter(valor){
     return valor.split('').reverse().join(''); 
    },
  },

 data(){
    return{
          cpf: '12345678901'
        }
    },
}
</script>

<style>
* {
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  background-color: aquamarine;

}

input{
  font-size: 2.5rem;
  text-align: center;
}

li{
  text-align: center;
  list-style: none;
  
}
</style>
