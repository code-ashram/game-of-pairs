export const enum ACTION_TYPE {
  LOGIN
}

export type User = {
  userName: string | null,
  isLogin: boolean
}

export type LoginAction = {
  type: ACTION_TYPE
  payload: User
}

export type Action = LoginAction

const userReducer = (state: User, { type, payload }: Action) => {
  switch (type) {
    case ACTION_TYPE.LOGIN:
      return {
        username: payload.userName,
        isLogin: true
      }
    default: {
      return state
    }
  }
}

export default userReducer
