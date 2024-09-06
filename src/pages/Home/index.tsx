import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        isLoading={isLoadingSale}
        games={onSaleGames}
        background="gray"
        title="Promoções"
        id="on-sale"
      />
      <ProductsList
        isLoading={isLoadingSoon}
        games={soonGames}
        background="black"
        title="Em breve"
        id="coming-soon"
      />
    </>
  )
}

export default Home
