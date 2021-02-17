import React, {useEffect, useState} from "react";

type useCardProps = {
    id: string,
    thumbUp: number,
    thumbDown: number
}
const useCardState = ({
                          id,
                          thumbUp,
                          thumbDown
                      }: useCardProps) => {
    const [votesThumbUp, setVotesThumbUp] = useState(thumbUp)
    const [votesThumbDown, setVotesThumbDown] = useState(thumbDown)
    const [thumbSelected, setThumbSelected] = useState<string | null>(null)
    const [votesUserCounter, setVotesUserCounter] = useState(0)
    const [showVoteAgain, setShowVoteAgain] = useState(0)
    const [percentageUp, setPercentageUp] = useState(0)
    const [percentageDown, setPercentageDown] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const [isSnackbarOpened, setOpenSnackbar] = React.useState(false);


    useEffect(() => {
        calculatePercentage()
    }, [votesThumbUp, votesThumbDown])

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
        setVotesUserCounter(votosArray.length | 0)
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

    const onClickThumbUp = (e: any) => {
        e.preventDefault()
        setThumbSelected('UP')
    }
    const onClickThumbDown = (e: any) => {
        e.preventDefault()
        setThumbSelected('DOWN')
    }

    const onVote = (e: any) => {
        e.preventDefault()
        const user = getAuthenticatedUser()
        if (!user) {
            setOpenSnackbar(true)
            return
        }
        persist(thumbSelected, user)
        thumbSelected === 'UP' ? setVotesThumbUp(votesThumbUp + 1) : setVotesThumbDown(votesThumbDown + 1)
        setVotesUserCounter(votesUserCounter + 1)
        setThumbSelected('VOTED')

    }
    const persist = (thumb: any, user: string) => {
        const localVotes = localStorage.getItem(`${user}:${id}`)
        if (localVotes) {
            const localVotesUpdated = thumb + "," + localVotes
            console.log(localVotesUpdated)

            localStorage.setItem(`${user}:${id}`, localVotesUpdated)
        } else {

            localStorage.setItem(`${user}:${id}`, thumb)
        }

    }

    const onVoteAgain = (e: any) => {
        e.preventDefault()
        setThumbSelected(null)
    }

    return {
        percentageUp,
        percentageDown,
        thumbSelected,
        votesThumbUp,
        votesThumbDown,
        isSnackbarOpened,
        setOpenSnackbar,
        votesUserCounter,
        onClickThumbUp,
        onClickThumbDown,
        onVoteAgain,
        onVote
    }
}
export default useCardState
