import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          dolorum, similique doloribus numquam esse officia. Ad voluptatem,
          doloremque, quod odio architecto neque quis corrupti impedit
          dignissimos facere eveniet. Cum, sequi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Debitis dolorem possimus reiciendis
          optio dicta quaerat reprehenderit amet voluptas assumenda quisquam!
          Neque quod ducimus nostrum voluptatem asperiores, autem quis tempora
          dolorem.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> Playstation 5 <br />
          <b>Desenvolvedora:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertaiment <br />
          <b>Idiomas:</b> Inglês, Espanhol, Português
        </p>
      </Section>
      <Gallery name="Jogo teste" defaultCover={residentEvil} />
    </>
  )
}

export default Product
