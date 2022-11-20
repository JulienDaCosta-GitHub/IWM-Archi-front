<template>
  <div>
    <h1 style="display: flex; justify-content: center">Ajouter un document</h1>

    <form method="post">
      <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
        <div>
          <p style="text-align: center">Nom du document :</p>
          <input v-model="documentName" type="text">
        </div>
        <div>
          <p style="text-align: center">Type de document :</p>
          <input v-model="documentType" type="text">
        </div>
        <div>
          <p style="text-align: center">Client Id :</p>
          <input v-model="clientId" type="text">
        </div>
        <div>
          <button type="submit" style="margin-top: 15px">Ajouter un document</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentName: '',
      documentType: '',
      clientId: ''
    }
  }
}
</script>