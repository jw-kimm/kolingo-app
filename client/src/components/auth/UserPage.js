import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Navbar from '../lessons/shared/Navbar'
import { updateUserInfo } from '../../store/actions/userAction';

const PageContent = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`
const ContainerHeader = styled.div`
  text-align: left;
  font-size: 30px;
  width: 200px;
  margin-top: 60px;
  color: #a5a5a5;
`

const UserForm = styled.form`
  background-color: #FFF;
  height: 300px;
  width: 600px;
`

const Label = styled.label`
  font-size: 20px;
  color: #848080d6;
  width: 200px;
  text-align: right;
  clear: both;
  float: left;
  margin: 4px 10px 12px 16px;
`

const FormInput = styled.input`
  height: 20px;
  width: 350px;
  border: 1px solid #000;
  float: left;
  background: #f0f0f0;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 12px;
`

const Button = styled.button`
  font-weight: bold;
  width: 120px;
  color: white;
  background-color: #4e89d2e0;
  border-radius: 12px;
  text-align: center;
  text-transform: UPPERCASE;
  font-size: 12px;
  height: 36px;
  margin-top: 24px;
`

class UserPage extends Component {
  state = {
    username: "",
    email: "",
  }

  // componentDidMount() {
  //   this.props.loadUser()
  //   const { user } = this.props.auth
  //   this.setState({
  //     username: user.username,
  //     email: user.email
  //   })
  // }

  getCurrentUser = () => {
    //bring current user data
    this.setState({
      username: this.state.username,
      email: this.state.email
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email } = this.state;

    const user = {
      username: username.username,
      email: email.email,
    }

    this.props.updateUserInfo(user)
  }

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
                <div>
                  <UserForm onSubmit={this.onSubmit}>
                    <div>
                      <Label htmlFor="username" >Username: </Label>
                      <FormInput
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email"> Email :  </Label>
                      <FormInput
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email"> Total XP :  </Label>
                      <FormInput
                        type="text"
                        name="email"
                        value={user.userExp}
                        readOnly
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <Button type="submit" value="Save Changes" >
                        Save Changes </Button>
                    </div>

                  </UserForm>

                </div>
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
  updateUserInfo: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps, { updateUserInfo })(UserPage);
