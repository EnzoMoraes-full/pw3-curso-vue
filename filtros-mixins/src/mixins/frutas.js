export default{
    data(){
    return{
            frutas: [ 'morango','maça', 'kiwi'],
            fruta: '',
        }
    },
 methods:{
    add(){
        this.frutas.push(this.fruta);
        this.fruta = '';
        }
    }
}