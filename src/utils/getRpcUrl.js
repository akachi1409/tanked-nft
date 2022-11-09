import sample from 'lodash/sample'
import { networkConfig } from 'mainConfig'

export const nodes = [networkConfig.RPC_URL_1, networkConfig.RPC_URL_2, networkConfig.RPC_URL_3]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl