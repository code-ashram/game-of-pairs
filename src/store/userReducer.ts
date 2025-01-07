export const enum ACTION_TYPE {
  LOGIN
}

export type User = {
  userName: string | null,
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
        userName: payload.userName
      }
    default: {
      return state
    }
  }
}

export default userReducer
