<template>
  <div>
    <h2>Capture New Data</h2>
    <router-link to="/qr-code-scanner">Scan QR Code</router-link>
  </div>
</template>

<script>
export default {
  name: 'CaptureNew',
};
</script>

<style scoped>
  /* Add your styles specific to CaptureNew.vue here */
  h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 16px;
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
