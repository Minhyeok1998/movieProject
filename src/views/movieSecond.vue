<template>
  <div class="movieSecond">
    <header>
    <h1>두번째 화면!</h1>
   </header>
   <span>
     <table class="mySearchT">
      <colgroup>  
        <col span="2">
        <col span="3">
        <col span="2">
      </colgroup>
      <tr>
        <th>영화 검색</th>
        <td><input id="searchT" type="text" placeholder="검색할 영화 입력" v-model="searchText" @keyup.enter="searchMovieEvent()"></td>
        <td><button id="searchBtn" @click="searchMovieEvent()" >검색</button></td>
      </tr>
     </table>
    
   </span>
    <hr>
    <span>
      <movie-table></movie-table>
    </span>

    <span>
      <!-- 치키차 -->
    </span>
  </div>
</template>
<script>
  import movieTableCompVue from '@/components/movieTableComp.vue';
  export default{
    components:{
      'movie-table' : movieTableCompVue
      
    },
 
    
    data(){
      return{
        searchText:"",
        // searchResult: []
        movieList:[],
        resultSearch:[]
      }
    },
    
    // computed:{
    //   movieList(){
    //     return this.$store.movieList;
    //     }
    // },
      methods:{
     
        searchMovieEvent(){
          
          
          this.$store.state.movieList.filter(this.searchText === this.store.state.movieList.movieName);   
          
          alert(this.searchText+" 이게 입력됨");

          
        },
        }
        
    
  }
</script>
<style>
.movieSecond{
  width:80%;
  margin: 0 auto;
}

.mySearchT{
  border: none;
  width:80%;
  margin:0 auto;
  
}
.mySearchT >td{
  border:none;
}
.mySearchT td>input ,button{
  border:none;
  width:90%;
  height:50px;
  font-size: 20pt;
}
#searchBtn:hover{
  background: #a9a9a9;
}
#searchBtn{
  background-color: white;
}

</style>
