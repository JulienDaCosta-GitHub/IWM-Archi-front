<template>
  <div>
    <h1 style="display: flex; justify-content: center">Liste des documents</h1>

    <div>
      <div>
        <p>Nom du document : Test Document</p>
        <div>
          <button @click="redirectoToAdd()">Ajouter un Document</button>
          <button @click="redirectoToSee()">Voir un document</button>
          <button @click="deleteDoc()">Supprimer un document</button>
        </div>
      </div>

      <div>
        <p>Nom du document : Test Document</p>
        <div>
          <button @click="redirectoToAdd()">Ajouter un Document</button>
          <button @click="redirectoToSee()">Voir un document</button>
          <button @click="deleteDoc()">Supprimer un document</button>
        </div>
      </div>

      <div>
        <p>Nom du document : Test Document</p>
        <div>
          <button @click="redirectoToAdd()">Ajouter un Document</button>
          <button @click="redirectoToSee()">Voir un document</button>
          <button @click="deleteDoc()">Supprimer un document</button>
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
  window.location.href = "/document/addDocument"
}

const deleteDoc = () => {
}

const redirectoToSee = () => {
  window.location.href = "/document/getDocument"
}

import { listClientsVM} from "~/src/adapters/primary/view-models/client/list-clients/listClientsViewModel";

const clientsVM = computed(() => {
  return listClientsVM()
})

</script>