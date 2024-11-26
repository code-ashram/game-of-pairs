import { Rank } from '../models'

import user from '../img/user.png'

export const enum ACTION_TYPE {
  ADD
}

export type Action = {
  type: ACTION_TYPE
  payload: number
}

export const rankReducer = (state: Rank[], { type, payload }: Action) => {
  switch (type) {
    case ACTION_TYPE.ADD:
      return [
        {
          id: String(Math.random()),
          user: 'Unknown user',
          time: new Date().toISOString(),
          steps: payload,
          photo: user,
          comment: 'Интересная игра!'
        },
        ...state
      ]
  }
}

