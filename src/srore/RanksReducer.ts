import { Rank } from '../models'

import user from '../img/user.png'

export const ACTION_TYPE = 'ADD'

export type Action = {
  type: typeof ACTION_TYPE
  payload: {
    rank: Rank
  }
}

export const rankReducer = (state: Rank[], { type, payload }: Action) => {
  switch (type) {
    case 'ADD':
      return [
        {
          id: crypto.randomUUID(),
          user: 'Unknown user',
          time: new Date().toISOString(),
          steps: payload.rank.steps,
          photo: user,
          comment: 'Интересная игра!'
        },
        ...state
      ]
  }
}

