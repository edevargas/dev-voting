import React, {useEffect} from 'react'
import {CandidateContainer, Description, ProfileImage, ResumeBox, ResumeThumb, ThumbDown, ThumbUp, Name} from "./styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import useCandidateState from "./state";
import {GetStaticProps, InferGetStaticPropsType } from "next";
import Header from "@components/layouts/Header";

export const getStaticPaths = async () => {
    const response = await fetch('https://dev-voting.vercel.app/api/people')
    const peopleList = await response.json()
    const paths = peopleList.map(({id}: TPerson ) => ({ params: { idPerson: id } }))
    return {
        paths,
        fallback: false  // paths not included will return 404
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const idPerson = params?.idPerson as string

    const response = await fetch(`https://dev-voting.vercel.app/api/people/${params?.idPerson}`)
    const person = await response.json()

    return {
        props: {
            person
        }
    }
}

const Candidate = ({person} : InferGetStaticPropsType<typeof getStaticProps>) => {
    useEffect(() => {
        console.log(person)
    }, [person])
    const { percentageUp, percentageDown } = useCandidateState(person)

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

    const fillResume = () => (
        <ResumeBox>
            <Name>{person.name}</Name>
            <Description>{person.description}</Description>
            {fillResumeThumb()}
        </ResumeBox>
    )
    return (
        <CandidateContainer>
            <Header/>
            <ProfileImage image={person.image}>
                {fillResume()}
            </ProfileImage>
        </CandidateContainer>
    )
}

export default Candidate
