import { ModalController } from '../controllers/Modal.js'
import { RouterController } from '../controllers/Router.js'

export const RouterUtil = {
  goBackOrCloseModal() {
    if (RouterController.state.history.length > 1) {
      RouterController.goBack()
    } else {
      ModalController.close()
    }
  },
  navigateAfterNetworkSwitch() {
    const { history } = RouterController.state
    const networkSelectIndex = history.findIndex(name => name === 'Networks')
    if (networkSelectIndex >= 1) {
      RouterController.goBackToIndex(networkSelectIndex - 1)
    } else {
      ModalController.close()
    }
  }
}
