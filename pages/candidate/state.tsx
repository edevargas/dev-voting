import {useEffect, useState} from "react";
type useCardProps = {
    id: string,
    thumbUp: number,
    thumbDown: number
}
export const useCandidateState = ({id, thumbUp, thumbDown}: useCardProps) => {
    const [votesThumbUp, setVotesThumbUp] = useState(thumbUp)
    const [votesThumbDown, setVotesThumbDown] = useState(thumbDown)
    const [percentageUp, setPercentageUp] = useState(0)
    const [percentageDown, setPercentageDown] = useState(0)

    useEffect(() => {
        calculatePercentage()
    }, [votesThumbUp, votesThumbDown])

    const calculatePercentage = () => {
        const total = votesThumbUp + votesThumbDown
        if (total === 0) {
            setPercentageUp(50)
            setPercentageDown(50)
        } else {
            const perUp = votesThumbUp * 100 / total
            setPercentageUp(perUp)
            const perDown = votesThumbDown * 100 / total
            setPercentageDown(perDown)
        }

    }

    useEffect(() => {
        getLocalData()
    }, [])

    const getLocalData = () => {
        const authenticatedUser = getAuthenticatedUser()
        if (authenticatedUser) {
            const votes = localStorage.getItem(`${authenticatedUser}:${id}`)
            if (votes) {
                updateCounterVotes(votes)
            }
        }
    }
    const getAuthenticatedUser = () => {
        const user = localStorage.getItem('user')
        return user
    }
    const updateCounterVotes = (votesString: string) => {
        const votosArray = votesString.split(',')
        let upCount = 0
        let downCount = 0
        votosArray.forEach(v => {
            if (v === 'UP') {
                upCount++
            } else {
                downCount++
            }
        })
        setVotesThumbUp(votesThumbDown + upCount)
        setVotesThumbDown(votesThumbDown + downCount)
    }
    return {
        percentageUp,
        percentageDown,
        votesThumbUp,
        votesThumbDown
    }
}

export default useCandidateState
