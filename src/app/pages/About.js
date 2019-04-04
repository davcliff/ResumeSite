// About.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text , Paragraph} from './../components/Typography'

export default class About extends React.Component {
    render () {
        return (
            <Section centered>
                <Container>
                    <Subheading>David Clifford</Subheading>

                    <Heading>About Me</Heading>

                    <Text>I am currently a software engineer that is always willing to take on new challenges. I built this site as a fun way to learn React.js in a fun, productive way.</Text>

                    <Text>Email:&nbsp;</Text>

                    <a href="mailto:dclifford14@gmail.com">dclifford14@gmail.com</a>
                </Container>
            </Section>
        )
    }
}