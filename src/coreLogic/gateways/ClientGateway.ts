import { Client } from '../../coreLogic/usecases/client-listing/client'

export interface ClientGateway {
   listAll(): Promise<Array<Client>>
}