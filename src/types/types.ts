type Coordinates = {
    coordinateX: number,
    coordinateY: number,
}

export type AnimatedCoinType = {
    coordinates: Coordinates,
    setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>,
    actionValue: number,
    setAnimationDisplayState: React.Dispatch<React.SetStateAction<boolean>>
}

export type DissappearedElementType = {
    coordinates: AnimatedCoinType['coordinates'],
    animationDisplayState: boolean,
    actionValue: AnimatedCoinType['actionValue'],
}

export type AchieveType = {
    description: string,
    reward: number,
    goal: number,
    done: boolean,
    id: number,
}

export type BoostType = {
    title: string,
    price: number,
    description: string,
    boost: number,
    id: number,
}

export type ContextType = {
    actionValue: number;
    setActionValue: React.Dispatch<React.SetStateAction<number>>;
    clickedCoins: number;
    setClickedCoins: React.Dispatch<React.SetStateAction<number>>;
}