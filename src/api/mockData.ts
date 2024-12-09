import { Rank } from '../models'

import kishor from '../img/kishor.jpg'
import kiryadev from '../img/kiryadev.jpg'
import me from '../img/me.jpg'
import anechka from '../img/anechka.jpg'
import barney from '../img/barney.jpg'
import sashko from '../img/sashko.jpg'
import { getRandomInt } from '../utils'

const mockData: Rank[] = [
  {
    id: String(getRandomInt()),
    user: 'Sachinandan Kishor',
    time: new Date('2024.09.13 08:16:12').toISOString(),
    steps: 16,
    photo: kishor,
    comment: 'Чушь!'
  },
  {
    id: String(getRandomInt()),
    user: 'Kiryadev',
    time: new Date('2024.07.31 12:12:22').toISOString(),
    steps: 18,
    photo: kiryadev,
    comment: 'Ахаххаввха!'
  },
  {
    id: String(getRandomInt()),
    user: 'Anechka',
    time: new Date('2024.11.13 14:12:32').toISOString(),
    steps: 20,
    photo: anechka,
    comment: 'Вредина!'
  },
  {
    id: String(getRandomInt()),
    user: 'Andrey',
    time: new Date('2024.11.14 11:32:42').toISOString(),
    steps: 22,
    photo: me,
    comment: '\\o'
  },
  {
    id: String(getRandomInt()),
    user: 'Barney',
    time: new Date('2024.11.15 13:41:52').toISOString(),
    steps: 24,
    photo: barney,
    comment: 'Что ха х*ня?'
  },
  {
    id: String(getRandomInt()),
    user: 'Sashko',
    time: new Date('2024.11.16 20:40:41').toISOString(),
    steps: 22,
    photo: sashko,
    comment: 'Вааще агонь!'
  },
]

export default mockData
