import React from 'react';
import {
    CardBody,
    CardContainer,
    CardDescription,
    Name,
    ResumeThumb,
    ThumbDown,
    ThumbUp,
    Description, VoteZone, ButtonThumbUp, ButtonThumbDown, ButtonVote
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

    const fillResumeThumb = () => (
        <ResumeThumb>
            <ThumbUp>
                <ThumbUpIcon/>
            </ThumbUp>
            <ThumbDown>
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
            <ButtonThumbUp>
                <ThumbUpIcon/>
            </ButtonThumbUp>
            <ButtonThumbDown>
                <ThumbDownIcon/>
            </ButtonThumbDown>
            <ButtonVote>VOTE</ButtonVote>

        </VoteZone>
    )

    return (
        <CardContainer image={image}>
            <CardBody>
                <ThumbUpIcon/>
                {fillCardDescription()}
            </CardBody>
            {fillResumeThumb()}
        </CardContainer>
    );
};

export default Card;
