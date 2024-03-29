import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MainNavbar from './MainNavbar'
import styled from 'styled-components'


class Splash extends Component {

  render() {
    return (
      <>
        <MainNavbar />

        <ContentBackground>
          <ContentSection>
            <SectionOneLeft>
              <h1 style={{ fontSize: 35, margin: "0 0px 40px 40px" }}>LET'S LEARN KOREAN! </h1>
              {this.props.isAuthenticated ? (
                <Link to="/lessons" style={{ fontSize: 15, marginBottom: 45 }} >
                  <Button> GET STARTED </Button>
                </Link>
              ) : (
                  <Link to="/register" style={{ fontSize: 15, marginBottom: 45 }} >
                    <Button> GET STARTED </Button>
                  </Link>
                )}
            </SectionOneLeft>
            <SectionOneRight>
              <img src="koreanFlag.png" alt="" style={{ height: 350 }} />
            </SectionOneRight>
          </ContentSection>
        </ContentBackground>

        <ContentSection>
          <SectionOneRight style={{ width: '40%', alignItems: "center" }}>
            <img src="muzi.png" alt="" style={{ height: 250 }} />
          </SectionOneRight>
          <SectionOneLeft>
            <h3>The best new way to learn a language.</h3>
            <p style={{ color: "#777", textAlign: "left", lineHeight: "1.5rem" }}>
              Learing with Kolingo is fun and addictive. Earn points for correct answers, race against the clock, and level up.
              Our bite-sized lessons are effective, and we have proof that is works!
            </p>
          </SectionOneLeft>
        </ContentSection>

        <Border />
        <ContentSection>
          <SectionOneLeft>
            <h3> Learn anytime, anywhere</h3>
            <p style={{ color: "#777", textAlign: "left", lineHeight: "1.5rem" }}> Make your breaks and commutes more productive with our apps.
            </p>
          </SectionOneLeft>
          <SectionOneRight style={{ alignItems: "center" }}>
            <img src="ryanmuzi.png" alt="" style={{ height: 300, width: "100%" }} />
          </SectionOneRight>
        </ContentSection>

        <ContentBottom>
          <SectionTwoTop>
            <h2 style={{ fontSize: 25, marginRight: 30, padding: 5 }} >Learn Korean with Kolingo </h2>

            {this.props.isAuthenticated ? (
              <Link to="/lessons" style={{ fontSize: 15, marginBottom: 45 }} >
                <Button> GET STARTED </Button>
              </Link>
            ) : (
                <Link to="/register" style={{ fontSize: 15, marginBottom: 45 }} >
                  <Button> GET STARTED </Button>
                </Link>
              )}
          </SectionTwoTop>
        </ContentBottom>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(Splash);

const ContentSection = styled.section`
  height: 350px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
`

const ContentBackground = styled.div`
  background-image: url("https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg");
  background-color: #235390;
`

const SectionOneLeft = styled.div`
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SectionOneRight = styled.div`
  display: flex;
  justify-content: center;
`

const Border = styled.div`
  border-top: 2px solid #e5e5e5;
  width: 100%; 
`

const ContentBottom = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  background-color: #235390;
`

const SectionTwoTop = styled.section`
  color: white;
  display: inline-flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.div`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Varela Round', sans-serif;
  text-decoration: none;
  background-color: #78c800;  
  text-decoration: none;
  padding: 12px 24px;
  width: 120px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 12px;
  :hover {
    -webkit-box-shadow: 0 0 10px rgb(184, 181, 181);
    box-shadow: 0 0 10px rgb(184, 181, 181);
  }
`
