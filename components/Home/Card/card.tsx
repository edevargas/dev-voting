import React, {useEffect, useState} from 'react';
import {
    CardBody,
    CardContainer,
    CardDescription,
    Name,
    ResumeThumb,
    ThumbDown,
    ThumbUp,
    Description, VoteZone, ButtonThumbUp, ButtonThumbDown, ButtonVote, WinnerZone
} from "@components/Home/Card/styles";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {Button} from "@material-ui/core";

const Card: React.FC<TPerson> = ({
                                     name,
                                     id,
                                     thumbUp,
                                     thumbDown,
                                     image,
                                     information_url,
                                     description,
                                     feat,
                                     publishedDate,
                                     category
                                 }) => {
    const [votesThumbUp, setVotesThumbUp] = useState(thumbUp)
    const [votesThumbDown, setVotesThumbDown] = useState(thumbDown)
    const [thumbSelected, setThumbSelected] = useState<string | null>(null)
    const [votesUserCounter, setVotesUserCounter] = useState(0)
    const [showVoteAgain, setShowVoteAgain] = useState(0)
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
            console.log(perUp)
            const perDown = votesThumbDown * 100 / total
            setPercentageDown(perDown)
        }

    }

    const onClickThumbUp = (e: any) => {
        e.preventDefault()
        console.log('asasdasdasd')
        setThumbSelected('UP')
    }
    const onClickThumbDown = (e: any) => {
        e.preventDefault()
        setThumbSelected('DOWN')
    }

    const onVote = (e: any) => {
        e.preventDefault()
        thumbSelected === 'UP' ? setVotesThumbUp(votesThumbUp + 1) : setVotesThumbDown(votesThumbDown + 1)
        setVotesUserCounter(votesUserCounter + 1)
        setThumbSelected('VOTED')
    }

    const onVoteAgain = (e: any) => {
        e.preventDefault()
        setThumbSelected(null)
    }

    const fillResumeThumb = () => (
        <ResumeThumb>
            <ThumbUp per={percentageUp}>
                <ThumbUpIcon/>
            </ThumbUp>
            <ThumbDown per={percentageDown}>
                <ThumbDownIcon/>
            </ThumbDown>
        </ResumeThumb>
    )
    const fillCardDescription = () => (
        <CardDescription>
            <Name>{name}</Name>
            <Description>{description}</Description>
            {fillButtonsVoteZone()}
        </CardDescription>
    )

    const fillButtonsVoteZone = () => (
        <VoteZone>
            {(thumbSelected === null || thumbSelected === 'UP') &&
            <ButtonThumbUp onClick={onClickThumbUp}>
                <ThumbUpIcon/>
            </ButtonThumbUp>}
            {(thumbSelected === null || thumbSelected === 'DOWN') &&
            <ButtonThumbDown onClick={onClickThumbDown}>
                <ThumbDownIcon/>
            </ButtonThumbDown>}
            {thumbSelected != 'VOTED' && <ButtonVote disabled={!thumbSelected} onClick={onVote}>VOTE</ButtonVote>}
            {thumbSelected === 'VOTED' && votesUserCounter < 3 &&
            <ButtonVote onClick={onVoteAgain}>VOTE AGAIN</ButtonVote>}

        </VoteZone>
    )

    const fillWinner = () => (
        <WinnerZone>
            {(votesThumbUp > votesThumbDown) &&
            <ButtonThumbUp>
                <ThumbUpIcon/>
            </ButtonThumbUp>}
            {(votesThumbDown > votesThumbUp) &&
            <ButtonThumbDown>
                <ThumbDownIcon/>
            </ButtonThumbDown>}
        </WinnerZone>
    )
    return (
        <CardContainer image={image}>
            <CardBody>
                {fillWinner()}
                {fillCardDescription()}
            </CardBody>
            {fillResumeThumb()}
        </CardContainer>
    );
};

export default Card;
