<template>
    <table class="movieTable">
      <caption>영화 리스트</caption>
       <thead>
         <tr>
           <th>번호</th>
           <th>영화 제목</th>
           <th>시작 날짜</th>
           <th>종료 날짜</th>
           <th>시작 시간</th>
           <th>종료 시간</th>
          </tr>
       </thead>
       <tbody>
         <tr v-for="(movie,id) in movieList" :key="id">
           <!-- <td>{{movie.id}}</td> -->
           <td>{{movie.id}}</td>
           <td>{{movie.movieName}}</td>
           <td>{{movie.startDay}}</td>
           <td>{{movie.endDay}}</td>
           <td>{{movie.startTime}}</td>
           <td>{{movie.endTime}}</td>
         </tr>
       </tbody>
     </table>
</template>

<script>

export default {
  // name:movieTable,
  computed:{
      movieList(){
        // console.log("###length",this.$store.state.movieList.length);
        // console.log("###",this.$store.state.movieList);
       return this.$store.state.movieList;
      }
  },
  

}
</script>

<style>
.movieTable{
  width:80%;
  margin: 0 auto;
  border: 1pt solid red;
  border-collapse: collapse;
}
.movieTable th{
  background-color: lightcoral;
  
}
.movieTable th, td{
  border: 1px solid red;
}
</style>