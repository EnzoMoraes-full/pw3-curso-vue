export default{
    data(){
    return{
            frutas: ['maça', 'morango', 'kiwi'],
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