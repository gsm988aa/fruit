<template>

  <div id="app">

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <router-view/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div id="nav" style="background-attachment: fixed;  ">

            &nbsp
            <router-link to="/home">
              <q-button icon="q-icon-house-stroke" size="medium" theme="secondary" type="default">
                主页
              </q-button>
            </router-link>
            &nbsp
            <router-link to="/closer">
              <q-button size="medium" theme="secondary" type="default">
                合/分闸
              </q-button>
            </router-link>
            &nbsp
            <router-link to="/breaker">
              <q-button size="medium" theme="secondary" type="default">
                断路器/微机
              </q-button>
            </router-link>
            &nbsp
            <router-link to="/harmony">
              <q-button size="medium" theme="secondary" type="default">
                物联
              </q-button>
            </router-link>
            &nbsp
            <router-link to="/settings">
              <q-button size="medium" theme="secondary" type="default">
                设置
              </q-button>
            </router-link>
            &nbsp
			<router-link to="/add">
			  <q-button size="medium" theme="secondary" type="default">
			    Add
			  </q-button>
			</router-link>
			&nbsp
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>
