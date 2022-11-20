<template>
  <div>
    <h1 style="display: flex; justify-content: center">Profil du client</h1>

    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
      <div>
        <p style="text-align: center">Nom du client : Test</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClient} from "~/src/coreLogic/usecases/get-client/get-client";
import { listClientsVM } from '~/src/adapters/primary/view-models/client/list-clients/listClientsViewModel'
import clientGateway from '~/gateway'
import { useClientStore } from '~/src/store/client'
import { computed, onMounted } from '#imports'

const route = useRoute()

onMounted(() => {
  getClient(route.params.id as string, clientGateway)
})

const clientsVM = computed(() => {
  console.log('listClientsVM()', listClientsVM().items)
  return listClientsVM().items
})

const redirectoToAdd = () => {
  window.location.href = "/client/addClient"
}

const redirectoToSee = (id) => {
  window.location.href = "/clients/" + id
}

const isLoading = computed(() => {
  const clientStore = useClientStore()
  return clientStore.isLoading
})
console.log('clientsVM', clientsVM)

</script>