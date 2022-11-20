import { Client } from '../../coreLogic/usecases/client-listing/client'

export interface ClientGateway {
   listAll(): Promise<Array<Client>>
   // getById(id: string): Promise<Client>
}