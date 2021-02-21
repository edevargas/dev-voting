import React from 'react';
import {BarContent, Container, LeftText, RightText} from "./styles";

const MessageBar = () => {
    return (
        <Container>
            <BarContent>
                <LeftText>
                    Hi, this are <br/><strong>The Rules</strong>
                </LeftText>
                <RightText>
                    You have to be logged in to vote a max of 3 times per candidate.
                </RightText>
            </BarContent>
            <span>X</span>
        </Container>
    );
};

export default MessageBar;
