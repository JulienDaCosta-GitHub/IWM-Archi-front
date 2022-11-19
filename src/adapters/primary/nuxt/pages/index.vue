<template>
   <div>
      <h1>Hello World !</h1>
      <div (v-else v-for="(client) in clientsVM" :key="client.id" )>

      </div>
   </div>
</template>

<!-- <script lang="ts" setup>
import { listClients } from '../../../../coreLogic/usecases/client-listing/listClients'
import { listClientsVM } from '~/src/adapters/primary/view-models/list-clients/listClientsViewModel'
import { clientGateway } from '~/gateway'
</script> -->

