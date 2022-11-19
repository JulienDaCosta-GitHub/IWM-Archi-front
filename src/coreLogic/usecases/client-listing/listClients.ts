import { ClientGateway } from '../../gateways/ClientGateway'

export const listClients = async (clientGateway: ClientGateway) => {
   const clients = await clientGateway.listAll()
   return clients
}