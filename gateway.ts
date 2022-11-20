import { InMemoryClientGateway } from '~/src/adapters/secondary/InMemoryClientGateway'
import { InMemoryWithDelayClientGateway } from '~/src/adapters/secondary/InMemoryWithDelayClientGateway'
import { ApiClientGateway } from '~/src/adapters/secondary/ApiClientsGateway'

export const clientGateway = new ApiClientGateway()

// const clientGateway = new InMemoryClientGateway()
// export const productGateway = new InMemoryWithDelayClientGateway()
// const client1 : any = { id: 'abc123', name: 'Client1 Client'}
// const client2 : any = { id: 'abc123', name: 'Client2 Client'}
// clientGateway.feedWith(client1, client2)

export default clientGateway