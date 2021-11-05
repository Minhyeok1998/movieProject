<template>
  <div class="movieMain">
   <span>
     <h2>영화 정보 입력</h2>
    <form id="movieFrom" onsubmit="return false;">
      <fieldset style="border:none">
        <ul>
          <li>
            <label for="mName">영화 제목</label>
            <input type="text" v-model="mName" placeholder="영화 제목을 입력해주세요">
          </li>
          <li>
            <label for="startDate">영화 시작일자</label>
            <input type="date" v-model="startDay" >
          </li>
          <li>
            <label for="endDate">영화 종료일자</label>
            <input type="date" v-model="endDay" >
          </li>
          <li>
            <label for="startTime">영화 시작시간</label>
            <input type="time" v-model="startTime">
          </li>
          <li>
            <label for="endTime">영화 종료시간</label>
            <input type="time" v-model="endTime">
          </li>
        </ul>
      </fieldset>
      <hr>
     
     <div style="margin:10pt; float:right;">
        <button  type="submit" id="saveMovieBtn" @click="saveMovie">저장</button>

         <input type="reset" id="resetMovie" value="초기화">
     </div>      
    </form>
   </span>
   <br>
   <!-- <span>
     <h2>영화 정보</h2>
    <ul>
    <li v-for="(movie) in movieList" v-bind:key="movie">{{movie}}</li>
    </ul>
   </span> -->
   <span>
     <h2>영화 정보</h2>
     <movie-table></movie-table>
     
     <!-- <movie-table></movie-table> -->
     <!-- <table class="movieTable">
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
         <tr v-for="(movie, id) in movieList" :key="id">
           <td>{{movie.id}}</td>
           <td>{{movie.movieName}}</td>
           <td>{{movie.startDay}}</td>
           <td>{{movie.endDay}}</td>
           <td>{{movie.startTime}}</td>
           <td>{{movie.endTime}}</td>
         </tr>
       </tbody>
     </table>  -->
   
   </span>
  </div>
</template>


<script>
import movieTableCompVue from '@/components/movieTableComp.vue';



export default{
  
  
  name:'Main',
  components:{
    'movie-table': movieTableCompVue,
  },
  updated() {
    console.log('####',this.count);
  },
  methods:{
    saveMovie(){
      this.count = this.$store.state.movieList.length + 1;
      console.log("count",this.count);
      
     this.$store.state.movieList.push({id:this.count, movieName:this.mName, startDay:this.startDay, endDay:this.endDay, startTime:this.startTime, endTime:this.endTime});
     console.log("push : ", this.logcount++);
     this.mName="";
     this.startDay="";
     this.endDay="";
     this.startTime="";
     this.endTime="";
     
    }
  },
  data(){
    return{
      logcount:0,
      mName:"",
      startDay: '',
      endDay: '',
      startTime: '',
      endTime: '',
      count: 0,
      //  movieList:[
      //    // {id:this.count,n:'', sd:'', ed:'', st:'', et:''}
      // ]

    }
  },


  

}
</script>
<style>

.movieMain{
  text-align:center;
}
.movieMain span{
  width:80%;
  margin: 20px;
  
}

.movieMain form{
  display: inline-block;
  width:50%;
  
  border: solid 2pt #DC143C;
}
.movieMain li >label{
  color: #DC143C;
  text-align: left;
  float:left;
  width:40%;
  margin-bottom:10px;
}
.movieMain li>input{
  width:55%;
  height:100%;
  margin-bottom:10px;
}
.movieMain li> input:hover{
  background:aliceblue;
}
.movieMain li> input:focus{
  font-size: 120%;
}

.movieMain ul{
  list-style:none
}
.movieMain li{
  display: list-item;
  
}
/* .movieTable{
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
} */
#saveMovieBtn{
  font-size: 11pt;
  width:50%;
  height:5%;
  margin:5pt;
  border:1pt solid black;
}
#saveMovieBtn:hover{
  background-color:#a9a9a9;
}
</style>