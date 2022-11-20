import { useClientStore } from '~/src/store/client'

import clientGateway from "~~/gateway"
import { InMemoryClientGateway } from "~~/src/adapters/secondary/InMemoryClientGateway"
import { ClientGateway } from "~~/src/coreLogic/gateways/ClientGateway"
import { listClients } from "~~/src/coreLogic/usecases/client-listing/listClients"

export interface ClientsVM {
  items: Array<ClientItemVM>
}

export interface ClientItemVM {
  id: string
  name: string
}

export const listClientsVM = ():ClientsVM => {
  const clientStore = useClientStore()
  const clients = clientStore.all
  
  return {
    items: clients
  }
}