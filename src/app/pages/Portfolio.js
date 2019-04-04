// Portfolio.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

const PortfolioWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: #7A8F98;
`
const PortfolioGrid = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
`

const PortfolioItem = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  transition: opacity .25s ease-in-out;

  &:focus,
  &:hover {
    opacity: .5;
  }

  @media (max-width: 767px) {
    &:nth-child(n+2) {
      margin-top: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: calc(50% - 32px);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    &:nth-child(even) {
      margin-left: 32px;
    }

    &:nth-child(n+3) {
      margin-top: 48px;
    }
  }

  @media (min-width: 992px) {
    width: calc(33.33333% - 32px);

    &:first-child,
    &:nth-child(4),
    &:nth-child(7) {
      margin-right: 32px;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(8), {
      margin-left: 16px;
      margin-right: 16px;
    }

    &:nth-child(3),
    &:nth-child(6),
    &:last-child {
      margin-left: 32px;
    }

    &:nth-child(n+4) {
      margin-top: 24px;
    }
  }
`

const PortfolioItemThumbnail = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`

export default class Portfolio extends React.Component {
    render () {
        return (
            <PortfolioWrapper>
                <Container>
                    <Subheading>Dave Clifford</Subheading>

                    <Heading>My work</Heading>

                    <Text>Some links to clients that I have worked with on developing solutions for.</Text>

                    <PortfolioGrid>
                        <PortfolioItem href="https://www.costco.com">
                            <PortfolioItemThumbnail src="https://svenhards.com/wp-content/uploads/2017/08/costco-wholesale-logo.png"
                                                    srcSet="https://svenhards.com/wp-content/uploads/2017/08/costco-wholesale-logo.png 1x,
                                                            https://svenhards.com/wp-content/uploads/2017/08/costco-wholesale-logo.png 2x"
                                                    alt="Costco" />
                        </PortfolioItem>

                        <PortfolioItem href="https://www.entegris.com">
                            <PortfolioItemThumbnail src="https://cdn.freebiesupply.com/logos/large/2x/entegris-logo-png-transparent.png"
                                                    srcSet="https://cdn.freebiesupply.com/logos/large/2x/entegris-logo-png-transparent.png 1x,
                                                            https://cdn.freebiesupply.com/logos/large/2x/entegris-logo-png-transparent.png 2x"
                                                    alt="Entegris" />
                        </PortfolioItem>

                        <PortfolioItem href="https://www.sherwin-williams.com/">
                            <PortfolioItemThumbnail src="http://www.nwcustomcabinets.com/policies/finish/sherwin-williams-logo.svg"
                                                    srcSet="http://www.nwcustomcabinets.com/policies/finish/sherwin-williams-logo.svg 1x,
                                                            http://www.nwcustomcabinets.com/policies/finish/sherwin-williams-logo.svg 2x"
                                                    alt="Sherwin Williams" />
                        </PortfolioItem>

                        <PortfolioItem href="https://www.zales.com/">
                            <PortfolioItemThumbnail src="http://images.zales.com/images/logos/img/png/zalesLogo600.png"
                                                    srcSet="http://images.zales.com/images/logos/img/png/zalesLogo600.png 1x,
                                                            http://images.zales.com/images/logos/img/png/zalesLogo600.png 2x"
                                                    alt="Zales" />
                        </PortfolioItem>

                        <PortfolioItem href="https://www.peoplesjewellers.com/">
                            <PortfolioItemThumbnail src="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/29488.png"
                                                    srcSet="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/29488.png 1x,
                                                            https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/29488.png 2x"
                                                    alt="Peoples Jewellers" />
                        </PortfolioItem>

                        <PortfolioItem href="https://www.tacobell.com/">
                            <PortfolioItemThumbnail src="https://www.tacobell.com/medias/Taco-Bell-Logo.svg?context=bWFzdGVyfGltYWdlc3wyOTI4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzNy9oZDIvODgyNTIyNzgwNDcwMi5zdmd8MGMxNTUxM2YzM2Y3OTgwN2I2MWZhZGQ0OTE2MzI4OGNkYTAxOGY1MGI4MTlhMzNhOTM4OWFiMmYyOTU5MGE1NQ"
                                                    srcSet="https://www.tacobell.com/medias/Taco-Bell-Logo.svg?context=bWFzdGVyfGltYWdlc3wyOTI4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzNy9oZDIvODgyNTIyNzgwNDcwMi5zdmd8MGMxNTUxM2YzM2Y3OTgwN2I2MWZhZGQ0OTE2MzI4OGNkYTAxOGY1MGI4MTlhMzNhOTM4OWFiMmYyOTU5MGE1NQ x1,
                                                            https://www.tacobell.com/medias/Taco-Bell-Logo.svg?context=bWFzdGVyfGltYWdlc3wyOTI4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gzNy9oZDIvODgyNTIyNzgwNDcwMi5zdmd8MGMxNTUxM2YzM2Y3OTgwN2I2MWZhZGQ0OTE2MzI4OGNkYTAxOGY1MGI4MTlhMzNhOTM4OWFiMmYyOTU5MGE1NQ x2"
                                                    alt="Taco Bell"/>
                        </PortfolioItem>
                    </PortfolioGrid>

                    <Text>Let's get in touch:</Text>

                    <Link href="mailto:dclifford14@gmail.com">dclifford14@gmail.com</Link>
                </Container>
            </PortfolioWrapper>
        )
    }
}