import React from 'react';
import {
    CardBody,
    CardContainer,
    CardDescription,
    Name,
    ResumeThumb,
    ThumbDown,
    ThumbUp,
    Description, VoteZone, ButtonThumbUp, ButtonThumbDown, ButtonVote, WinnerZone,
    Filter, LinkMore, Percentage
} from "@components/Home/Card/styles";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CustomSnackbar from "@components/layouts/Snackbar";
import useCardState from "@components/Home/Card/state";

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
    const {
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
    } = useCardState({id, thumbUp, thumbDown})

    const fillResumeThumb = () => (
        <ResumeThumb>
            <ThumbUp per={percentageUp}>
                {percentageUp > 20 && <ThumbUpIcon/>}
                {percentageUp > 33.33 && <Percentage>{percentageUp.toFixed(2)} %</Percentage>}
            </ThumbUp>
            <ThumbDown per={percentageDown}>
                {percentageDown > 20 && <ThumbDownIcon/>}
                {percentageDown > 33.33 && <Percentage>{percentageDown.toFixed(2)} %</Percentage>}
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
            {thumbSelected != 'VOTED' && <ButtonVote thumbSelected={thumbSelected} disabled={!thumbSelected} onClick={onVote}>VOTE</ButtonVote>}
            {thumbSelected === 'VOTED' && votesUserCounter < 3  &&
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

    const fillSnackbar = () => (
        <CustomSnackbar
            message="You must log in to vote"
            open={isSnackbarOpened}
            handleClose={() => setOpenSnackbar(false)}/>
    )

    return (
        <CardContainer image={image}>
            <Filter/>
            <CardBody>
                {fillWinner()}
                {fillCardDescription()}
            </CardBody>
            <LinkMore  href={`/candidate/${id}`}>See more</LinkMore>
            {fillResumeThumb()}
            {fillSnackbar()}
        </CardContainer>
    );
};

export default Card;
