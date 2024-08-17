import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
      dignissimos magni blanditiis sit corporis similique delectus possimus,
      reprehenderit voluptates, sed facere unde suscipit nesciunt repudiandae
      cumque iste earum at voluptate.
    </Descricao>
  </Card>
)

export default Product
