<template>
  <div>
    <h1 style="display: flex; justify-content: center">Liste des clients</h1>
    <button style="margin-right: 40px" @click="redirectoToAdd()">Ajouter un client</button>
    <div v-if="isLoading"> Loading ...</div>

    <div>
      <div v-for="(client) in clientsVM" :key="client.id">
        <p>Nom du client : {{ client.name }}</p>
        <div>
          <button style="margin-right: 40px" @click="redirectoToSee(client.id)">Voir le client</button>
          <button @click="deleteClient()">Supprimer un client</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { listClients } from '~/src/coreLogic/usecases/client-listing/listClients'
  import { listClientsVM } from '~/src/adapters/primary/view-models/client/list-clients/listClientsViewModel'
  import clientGateway from '~/gateway'
  import { useClientStore } from '~/src/store/client'
  import { computed, onMounted } from '#imports'


  onMounted(() => {
    listClients(clientGateway)
  })

  const clientsVM = computed(() => {
    console.log('listClientsVM()', listClientsVM().items)
    return listClientsVM().items
  })

  const redirectoToAdd = () => {
    window.location.href = "/client/addClient"
  }

  const deleteClient = () => {
    console.log("deleted !")
  }

  const redirectoToSee = (id) => {
    window.location.href = "/client/profileClient/" + id
  }

  const isLoading = computed(() => {
    const clientStore = useClientStore()
    return clientStore.isLoading
  })
  console.log('clientsVM', clientsVM)
 
</script>