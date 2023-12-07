<template>
  <div>
    <h1>Welcome to Data Collection App</h1>
    <p>
      This app allows Data Collectors to initiate the data collection process
      through a QR code and obtain consent from Data Providers.
    </p>
    <router-link to="/capture-new">Capture New Data</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeWorld',
};
</script>

<style scoped>
  /* Add your styles specific to Home.vue here */
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
  }

  router-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  router-link:hover {
    background-color: #2980b9;
  }
</style>
