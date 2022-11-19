<script lang="ts" setup>
   import { listClients } from '~~/src/coreLogic/usecases/client-listing/listClients';
   import { listClientsVM } from '~~/src/coreLogic/usecases/client-listing/listClients';
   import { ClientGateway } from '~~/src/coreLogic/gateways/ClientGateway';

   const listClientsVM = computed(() => {
      return listClientsVM().items
   })
</script>

<template>
   <div>
      <h1>Hello World !</h1>
      <div (v-else v-for="(client) in listClientsVM" :key="client.id" )>
         {{client.name}}
      </div>
   </div>
</template>