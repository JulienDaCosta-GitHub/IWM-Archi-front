import { ClientGateway } from '~/src/coreLogic/gateways/ClientGateway'
import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export class ClientDoesNotExistsError extends Error {
  constructor(id: string) {
    super(`Client ${id} does not exists`)
  }
}

export class InMemoryClientGateway implements ClientGateway {
  protected clients: Array<Client> = []

  listAll(): Promise<Array<Client>> {
    return Promise.resolve(this.clients)
  }
  feedWith(...clients: Array<Client>) {
    this.clients = clients
  }

  getById(id: string): Promise<Client> {
    const res = this.clients.find((c) => c.id === id)
    if (!res) {
      throw new ClientDoesNotExistsError(id)
    }
    return res
  }
}
