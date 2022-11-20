import { createPinia, setActivePinia } from 'pinia'
import { useClientStore } from '~/src/store/client'
import { listClients} from "~/src/coreLogic/usecases/client-listing/listClients";
import { InMemoryClientGateway} from "~/src/adapters/secondary/InMemoryClientGateway";
import { Client } from '~/src/coreLogic/usecases/client-listing/client';

describe('List clients', () => {
  let clientStore: any
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    setActivePinia(createPinia())
    clientStore = useClientStore()
    clientGateway = new InMemoryClientGateway()
  })
  describe('There is no available clients', () => {
    it('should list nothing', async () => {
      await listClients(clientGateway)
      expect(clientStore.all).toEqual([])
    })
  })
  describe('There is available clients', () => {
    it('should list all clients', async () => {
      const client1: any = { id: 'abc123', name: 'Edward Newton' }
      const client2: any = { id: 'def456', name: 'Martin Matin' }
      clientGateway.feedWith(client1, client2)
      await listClients(clientGateway)
      expect(clientStore.all).toEqual([client1, client2])
    })
  })
  describe('Loading', () => {
    it('should be aware during loading', async () => {
      const unsubscribe = clientStore.$subscribe((mutation: any, state: any) => {
        expect(state.isLoading).toBeTruthy()
        unsubscribe()
      })
      await listClients(clientGateway)
    })
    it('should finish loading when done', async () => {
      await listClients(clientGateway)
      expect(clientStore.isLoading).toBeFalsy()
    })
  })
})
