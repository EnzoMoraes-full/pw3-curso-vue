<template>
<div>
   <h2>Frutas</h2>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{fruta}}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add"/>
    </div>
</template>

<script>
import frutas from '../mixins/frutas'
export default {
  mixins: [frutas]
}
</script>

<style>

</style>