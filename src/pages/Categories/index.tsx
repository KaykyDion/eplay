import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          id="rpg"
          games={rpgGames}
          background="black"
          title="RPG"
        />
        <ProductsList
          id="action"
          games={actionGames}
          background="gray"
          title="Ação"
        />
        <ProductsList
          id="sports"
          games={sportGames}
          background="black"
          title="Esportes"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          background="gray"
          title="Luta"
        />
        <ProductsList
          games={simulationGames}
          background="black"
          title="Simulação"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
