<template>


</template>

<script>
export default {
  name: "Closer"
}
</script>

<style scoped>

/*.body {*/
/*  background-color: #af3131;*/
/*}*/

#magicalDragScene {

  background: url("/src/assets/apple-logo-white2.jpg" ) no-repeat center ;
  /*no-repeat center*/
  /*background-position: left center;*/

  height: 100%;

  width: 100%;

  background-size: cover;

  position: fixed;
}


.card-glass1 {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}


.card-glass2 {
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
/*.card-glass3 {*/
/*  backdrop-filter: blur(16px) saturate(180%);*/
/*  -webkit-backdrop-filter: blur(16px) saturate(180%);*/
/*  background-color: rgba(255, 255, 255, 0.75);*/
/*  border-radius: 12px;*/
/*  border: 1px solid rgba(209, 213, 219, 0.3);*/
/*}*/

.card-glass3 {
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}



.sosbrk{
  color: #1e39e8;
  border-radius: 1000px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;
}
</style>


