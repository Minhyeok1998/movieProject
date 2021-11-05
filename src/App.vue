<template>
  <div id="app">
   <header>
     
      <div id="nav">
        <img alt="cgv" src="./assets/cgvLogo.png" width="15%">
        <router-link to="/">Home</router-link> |
        <router-link to="/main">Main</router-link>|
        <router-link to="/second">Second</router-link>
      </div>
   </header>
    
    <router-view/>
  </div>
</template>
<script>

</script>


<style>
/* img{
  display: inline-block;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  align-self: left;
  left:1pt;
  top:3pt;
  display: block;
  padding:10px;
  text-align: left;
  margin:0%;
  
    
  position: fixed;
}

#nav a {
  opacity: 0.3;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #DC143C;
  border: 1pt dotted RED;
 opacity: 1;
  
}


</style>
