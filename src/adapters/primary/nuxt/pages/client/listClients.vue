<template>
  <div>
    <h1 style="display: flex; justify-content: center">Liste des clients</h1>

    <div>
      <div>
        <p>Nom du client : Test Client</p>
        <div>
          <button @click="redirectoToAdd()">Ajouter un client</button>
          <button @click="redirectoToSee()">Voir un client</button>
          <button @click="deleteClient()">Supprimer un client</button>
        </div>
      </div>

      <div>
        <p>Nom du client : Test Client</p>
        <div>
          <button @click="redirectoToAdd()">Ajouter un client</button>
          <button @click="redirectoToSee()">Voir un client</button>
          <button @click="deleteClient()">Supprimer un client</button>
        </div>
      </div>

      <div>
        <p>Nom du client : Test Client</p>
        <div>
          <button @click="redirectoToAdd()">Ajouter un client</button>
          <button @click="redirectoToSee()">Voir un client</button>
          <button @click="deleteClient()">Supprimer un client</button>
        </div>
      </div>
    </div>
    <!--      <div v-for="client in clientsVM" :key="client.id">-->
    <!--        {{client.name}}-->
    <!--      </div>-->
  </div>
</template>

<script lang="ts" setup>

const redirectoToAdd = () => {
  window.location.href = "/client/addClient"
}

const deleteClient = () => {
}

const redirectoToSee = () => {
  window.location.href = "/client/profileClient"
}

import { listClientsVM} from "~/src/adapters/primary/view-models/client/list-clients/listClientsViewModel";

const clientsVM = computed(() => {
  return listClientsVM()
})

</script>