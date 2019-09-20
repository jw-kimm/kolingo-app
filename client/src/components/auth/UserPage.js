import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Navbar from '../lessons/shared/Navbar'

const PageContent = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: block;
  left 30%;
  position: fixed;
`
const ContainerHeader = styled.div`
  text-align: left;
  font-size: 30px;
  width: 800px;
  display: flex;
  margin-top: 60px;
`

const InnerDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 42px
  width: 500px;
  line-height: 36px;
`
const InnerP = styled.p`
  border-bottom: 1px solid grey;
  width: 300px;
  margin-bottom: 20px;
  font-size: 24px;
`


class UserPage extends Component {

  render() {
    const { user } = this.props.auth
    return (
      <>
        <Navbar />
        <PageContent>
          {
            this.props.isAuthenticated ?
              <Container>
                <ContainerHeader >
                  Profile
              </ContainerHeader>
                <InnerDiv>
                  <InnerP>Name: {user.username}</InnerP>
                  <InnerP>Total XP: {user.userExp}</InnerP>
                </InnerDiv>
              </Container>
              : <h4>Please Log In</h4>
          }

        </PageContent>
      </>
    );
  }
}

UserPage.propTypes = {
  auth: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserPage);
