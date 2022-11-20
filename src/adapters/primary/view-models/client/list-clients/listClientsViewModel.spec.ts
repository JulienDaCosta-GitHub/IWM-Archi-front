import { useClientStore } from '~/src/store/client'
import { createPinia, setActivePinia } from 'pinia'
import { listClientsVM, ClientsVM } from '~/src/adapters/primary/view-models/client/list-clients/listClientsViewModel'

describe('List clients view model', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    it('should verify clients info', () => {
        // Given
        const client1: any = { id: "abc123", name: "Edward Newton" }
        const client2: any = { id: "def456", name: "Martin Matin" }
        const clientStore = useClientStore()
        clientStore.list([client1, client1])
        // When
        const clientsVM = listClientsVM()
        // Then
        const expectedClients: ClientsVM = {
            items: [
                {
                    id: "abc123",
                    name: "Edward Newton",
                },
                {
                    id: "def456",
                    name: "Martin Matin",
                }
            ]
        }
        expect(clientsVM).toEqual(expectedClients)
    })
})
