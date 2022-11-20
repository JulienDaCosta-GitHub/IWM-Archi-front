<template>
  <div>
    <h1 style="display: flex; justify-content: center">Ajouter un client</h1>

    <form method="post">
      <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
        <div>
          <p style="text-align: center">Nom du client :</p>
          <input v-model="clientName" type="text">
        </div>
        <div>
          <button type="submit" style="margin-top: 15px">Ajouter un client</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientName: ''
    }
  }
}
</script>