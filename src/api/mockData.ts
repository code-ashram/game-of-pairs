import { Rank } from '../models'

import kishor from '../img/kishor.jpg'
import kiryadev from '../img/kiryadev.jpg'
import me from '../img/me.jpg'
import anechka from '../img/anechka.jpg'
import barney from '../img/barney.jpg'
import sashko from '../img/sashko.jpg'
import { uuidToNumber } from '../utils'

const mockData: Rank[] = [
  {
    id: uuidToNumber(crypto.randomUUID()),
    user: 'Sachinandan Kishor',
    time: '2024.09.13 08:16:12',
    steps: 16,
    photo: kishor,
    comment: 'Чушь!'
  },
  {
    id: uuidToNumber(crypto.randomUUID()),
    user: 'Kiryadev',
    time: '2024.07.31 12:12:22',
    steps: 18,
    photo: kiryadev,
    comment: 'Ахаххаввха!'
  },
  {
    id: uuidToNumber(crypto.randomUUID()),
    user: 'Anechka',
    time: '2024.11.13 14:12:32',
    steps: 20,
    photo: anechka,
    comment: 'Вредина!'
  },
  {
    id: uuidToNumber(crypto.randomUUID()),
    user: 'Andrey',
    time: '2024.11.14 11:32:42',
    steps: 22,
    photo: me,
    comment: '\\o'
  },
  {
    id: uuidToNumber(crypto.randomUUID()),
    user: 'Barney',
    time: '2024.11.15 13:41:52',
    steps: 24,
    photo: barney,
    comment: 'Что ха х*ня?'
  },
  {
    id: uuidToNumber(crypto.randomUUID()),
    user: 'Sashko',
    time: '2024.11.16 20:40:41',
    steps: 22,
    photo: sashko,
    comment: 'Вааще агонь!'
  },
]

export default mockData
