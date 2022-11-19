import { ClientGateway } from '../../coreLogic/gateways/ClientGateway'
import { Client } from '../../coreLogic/usecases/client-listing/client'

export class ApiClientGateway implements ClientGateway {
   async listAll(): Promise<Array<Client>> {
      const res = await fetch('http://localhost:4000/api/clients')
      const json = await res.json()
      return json as Array<Client>
   }
}