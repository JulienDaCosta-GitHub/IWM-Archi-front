<template>
  <div>
    <h1 style="display: flex; justify-content: center">Liste des clients</h1>

    <div style="display: flex; justify-content: center">
      <button style="margin-right: 40px" @click="redirecToClients()">Voir les clients</button>
      <button @click="redirecToDocuments()">Voir les documents</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

const redirecToClients = () => {
  window.location.href = "/client/listClients"
}

const redirecToDocuments = () => {
  window.location.href = "/document/listDocuments"
}

</script>