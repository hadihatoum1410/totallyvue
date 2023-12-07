<template>
  <div>
    <h2>Captured Data</h2>
    <div v-if="capturedData.length === 0">
      <p>No data has been captured yet.</p>
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in capturedData" :key="index">
            <td>{{ data.name }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapturedData',
  data() {
    return {
      capturedData: [],
    };
  },
  created() {
    // Fetch captured data from storage or server and populate the capturedData array.
    // For simplicity, let's simulate some data.
    this.capturedData = [
      { name: 'John Doe', email: 'john@example.com', phone: '555-1234' },
      { name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678' },
    ];
  },
};
</script>

<style scoped>
  /* Add your styles specific to CapturedData.vue here */
  h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-top: 16px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #3498db;
    color: #fff;
  }
</style>
