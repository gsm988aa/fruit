<template>

  <div class="container">
    <div class="top">
      <div class="top-left">
        <span class="d1">
          <i class="iconfont aircraft">&#xe72a;</i>
        </span>
        <span class="d2">
          <i class="iconfont aircraft">&#xe8d6;</i>
        </span>
        <span class="d3">
          <i class="iconfont aircraft">&#xe8dd;</i>
        </span>
        <span class="d4">
          <i class="iconfont aircraft">&#xe72a;</i>
        </span>
      </div>
      <div class="top-right">
        <i class="iconfont aircraft">&#xe8dd;</i>
        <p>音乐</p>
        <span class="d21">
          <i class="iconfont r-aircraft">&#xe8d6;</i>
        </span>
        <span class="d31">
          <i class="iconfont r-aircraft">&#xe8dd;</i>
        </span>
        <span class="d41">
          <i class="iconfont r-aircraft">&#xe72a;</i>
        </span>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  name: "Breaker"
}
</script>

<style scoped>
.container {
  width: 1018px;
  margin: 0 auto;
  height: 660px;
  background-color: #e6eef4;
}

.top {
  height: 200px;
  flex-direction: row;
}

.top-left {
  width: 400px;
  /* height: 400px; */
  float: left;
  /* background-color: rgb(92, 89, 89); */
  margin: 50px;
  border-radius: 39px;
  background: #e6eef4;
  box-shadow: 33px 33px 67px #cad1d7,
  -33px -33px 67px #ffffff;
}

.d1,
.d2,
.d3,
.d4 {
  display: inline-block;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background-color: red;
  margin: 24px;
  border-radius: 50%;
  background: #e6eef4;
  box-shadow: inset 14px 14px 22px #cfd6dc,
  inset -14px -14px 22px #fdffff;
}

.aircraft {
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10%; */
  padding-top: 30px;
  color: #4d8af0;
}

.top-right {
  width: 400px;
  height: 400px;
  float: right;
  background-color: green;
  margin: 50px;
  border-radius: 39px;
  background: #e6eef4;
  box-shadow: 33px 33px 67px #cad1d7,
  -33px -33px 67px #ffffff;
}

.d21,
.d31,
.d41 {
  display: inline-block;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: red;
  margin: 21px;
  border-radius: 50%;
  background: #e6eef4;
  box-shadow: 6px 6px 12px #cad1d7,
  -6px -6px 12px #ffffff;
}

.r-aircraft {
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10%; */
  padding-top: 24px;
  color: #4d8af0;
}

p {
  text-align: center;
  font-size: 24px;
  color: #576f87;
  font-weight: bold;
}

</style>