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
import clientGateway from '~/gateway'
import { onMounted } from '#imports'

const route = useRoute()

onMounted(() => {
  getClient(route.params.id as string, clientGateway)
})

</script>