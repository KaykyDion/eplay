import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import resident from '../../assets/images/resident.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Aventura',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entreteriment',
    title: 'Star Wars Jedi: Survivor',
    system: 'Xbox Series S/X',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 1,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entreteriment',
    title: 'Resindent Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 229,00'],
    image: resident
  },
  {
    id: 1,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entreteriment',
    title: 'Diablo IV',
    system: 'Xbox Series S/X',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 1,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entertainment',
    title: 'Star Wars Jedi: Survivor',
    system: 'Xbox Series S/X',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entreteriment',
    title: 'Diablo IV',
    system: 'Xbox Series S/X',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 1,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entreteriment',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 1,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entreteriment',
    title: 'Diablo IV',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 1,
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação desenvolvido pela Blizzard Entreteriment',
    title: 'Star Wars Jedi: Survivor',
    system: 'Xbox Series S/X',
    infos: ['17/05'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} background="gray" title="Promoções" />
    <ProductsList games={emBreve} background="black" title="Em breve" />
  </>
)

export default Home
