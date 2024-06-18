import { subscribeKey as subKey } from 'valtio/vanilla/utils'
import { proxy } from 'valtio/vanilla'

// -- Types --------------------------------------------- //
export interface NotificationsControllerState {
  message: string
  variant: 'error' | 'success'
  open: boolean
}

type StateKey = keyof NotificationsControllerState

// -- State --------------------------------------------- //
const state = proxy<NotificationsControllerState>({
  message: '',
  variant: 'success',
  open: false
})

// -- Controller ---------------------------------------- //
export const NotificationsController = {
  state,

  subscribeKey<K extends StateKey>(
    key: K,
    callback: (value: NotificationsControllerState[K]) => void
  ) {
    return subKey(state, key, callback)
  },

  showSuccess(message: NotificationsControllerState['message']) {
    state.message = message
    state.variant = 'success'
    state.open = true
  },

  showError(message: unknown) {
    /*
     * Const errorMessage = CoreHelperUtil.parseError(message)
     * TODO: Implement CoreHelperUtil.parseError
     */
    state.message = message as string
    state.variant = 'error'
    state.open = true
  },

  hide() {
    state.open = false
  }
}
