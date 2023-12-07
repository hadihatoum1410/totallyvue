<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Add your global styles here */
router-link {
  margin-right: 20px;
  text-decoration: none;
  font-size: 18px;
  color: #3498db;
  transition: color 0.3s;
}

router-link:hover {
  color: #2980b9;
}
</style>
