import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        id="rpg"
        games={rpgGames}
        background="black"
        title="RPG"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="action"
        games={actionGames}
        background="gray"
        title="Ação"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={sportGames}
        background="black"
        title="Esportes"
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="fight"
        games={fightGames}
        background="gray"
        title="Luta"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={simulationGames}
        background="black"
        title="Simulação"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
