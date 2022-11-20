import { defineStore } from 'pinia'
import { Client } from '~/src/coreLogic/usecases/client-listing/client'


export const useClientStore = defineStore('ClientStore', {

  state: () => {
    return {
      items: [] as Array<Client>,
      isLoading: false
    }
  },
  getters: {
    all: (state: any) => state.items
  },
  actions: {
    list(clients: Array<Client>) {
      this.items = clients
      this.isLoading = false
    },
    startListing() {
      this.isLoading = true
    },
  }
})