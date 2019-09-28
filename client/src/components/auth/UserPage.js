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
  display: flex;
  flex-direction: column;
  width: 90%;
`
const ContainerHeader = styled.div`
  text-align: center;
  font-size: 30px;
  margin-top: 60px;
  color: #a5a5a5;
`

const UserForm = styled.form`
  background-color: #FFF;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`

const Label = styled.label`
  font-size: 20px;
  color: #848080d6;
  width: 125px;
  text-align: right;
  clear: both;
  float: left;
  margin: 4px 10px 12px 16px;
  pointer-events: none;
`

const FormInput = styled.input`
  height: 20px;
  width: 350px;
  border: none;
  float: left;
  background: #f0f0f0;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 12px;
  color: transparent;
  text-shadow: 0 0 0 grey;
  cursor: no-drop;
`

const Img = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
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
                <MainContainer>
                  <Img src="ryan.png" alt="" />
                  <UserForm>
                    <div>
                      <Label htmlFor="username" >Username: </Label>
                      <FormInput
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={this.handleInputChange}
                        readOnly
                      />
                    </div>
                    <div>
                      <Label htmlFor="email"> Email :  </Label>
                      <FormInput
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={this.handleInputChange}
                        readOnly
                      />
                    </div>

                    <div>
                      <Label htmlFor="email"> Total XP :  </Label>
                      <FormInput
                        type="text"
                        name="email"
                        value={user.userExp}
                        readOnly
                        style={{ color: "darkgrey" }}
                      />
                    </div>
                  </UserForm>

                </MainContainer>
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
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}



export default connect(mapStateToProps, null)(UserPage);
