import React, {PropsWithChildren} from 'react';
import {ListContainer} from "@components/Home/ListCard/styles";
import Card from "@components/Home/Card/card";

const ListCard: React.FC = ({people}: PropsWithChildren<any>) => {
    console.log('list', people)
    return (
        <ListContainer>
            {people.map((person: TPerson) => {
                if(!person.feat){
                    return (
                        <Card {...person} key={person.id} />
                    )
                }
            })}
            
        </ListContainer>
    );
};

export default ListCard;
