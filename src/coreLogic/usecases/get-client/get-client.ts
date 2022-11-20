import { ClientGateway } from "../../gateways/ClientGateway"
import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export const getClient = async(id: string, clientGateway: ClientGateway): Promise<Client> => {
  return clientGateway.getById(id)
}