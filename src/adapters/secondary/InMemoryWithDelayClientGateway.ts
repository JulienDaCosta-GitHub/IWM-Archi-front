import { InMemoryClientGateway } from '~/src/adapters/secondary/InMemoryClientGateway'
import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export class InMemoryWithDelayClientGateway extends InMemoryClientGateway {
  async listAll(): Promise<Array<Client>> {
    await new Promise(r => setTimeout(r,2000))
    return super.listAll()
  }
}