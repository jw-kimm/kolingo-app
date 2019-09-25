import React, { Component } from "react";
import Navbar from './shared/Navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Img = styled.img`
  width: 100px;
  filter: grayscale(1) opacity(40%);
  cursor: pointer;
  width: 140px;
  padding: 75px;
  :hover {
    
  }
`

const ListContainer = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 0!important;
  text-align: center;
  width: 100%;
  height: 500px;
  margin: auto;
  z-index: -2;
  position: absolute;
  justify-content: space-evenly;
`

const SubList = styled.div`
  cursor: pointer;
  margin-bottom: 40px;
  border: 2px solid rgb(229, 229, 229);
  border-radius: 20px;
  padding: 10px;
  // :hover{
  //   <TooltipBox>
  // }
`


const TooltipBox = styled.div`
  display: inline-table;
  position: relative;
  border: 1px dotted black;
  margin: 250px;
  width: 100px;
  left: 25%;
  padding: 20px;
  background-color: rgba(184, 181, 181, 0.59);
  transform: translateY(-50%);
  border-radius: 24px;
  :after{
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
  }
}
`

const TooltipBox2 = styled.div`
  display: flex
  border: 1px dotted black;
  margin: 260px 188px 0 0;
  width: 100px;
  float: right;
  padding: 20px;
  background-color: rgba(184, 181, 181, 0.59);
  transform: translateY(-50%);
  border-radius: 24px;
  :after{
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
  }
}
`

const TooltipMessage = styled.div`
  border-radius: 3px;
  color: white;
  font-size: .75rem;
  line-height: 1.4;
  padding: .75em;
  text-align: center;
  font-size: 16px;
  width: 100px;
`

class LessonsList extends Component {

  state = {
    level2Tooltip: false,
    level3Tooltip: false,
  }

  firstUnlock = false
  secondUnlock = false
  thirdUnlock = false

  hideTooltip = () => {
    setTimeout(() => {
      this.setState({
        level2Tooltip: false,
        level3Tooltip: false,
      })
    }, 300)
  }
  showTooltip = () => {
    this.setState({
      level2Tooltip: true,
      level3Tooltip: true,
    })
  }

  render() {
    const { user } = this.props.auth

    let message = "Level locked"


    if (this.props.isAuthenticated) {
      if (user.userExp >= 50) {
        this.firstUnlock = true
        this.secondUnlock = true
        this.thirdUnlock = true
      } else if (user.userExp >= 30) {
        this.firstUnlock = true
        this.secondUnlock = true
      } else {
        this.firstUnlock = true
      }
    } else {
      this.firstUnlock = true
    }


    return (
      <>
        <Navbar />
        <ListContainer>

          <SubList >
            <Link
              to="/alphabet" className={this.firstUnlock ? "activeLessonsLink" : "lessonsLink"} >
              <Img src="sunshower.png" alt="" style={this.firstUnlock ? { filter: "none" } : null} />
            </Link>
          </SubList>

          <SubList onMouseEnter={() => this.showTooltip()} onMouseLeave={() => this.hideTooltip()} message={message}>
            <Link
              to="/matching" className={this.firstUnlock && this.secondUnlock ? "activeLessonsLink" : "lessonsLink"} >
              <Img src="cactus.png" alt="" style={this.firstUnlock && this.secondUnlock ? { filter: "none" } : null} />
            </Link>
          </SubList>

          <SubList onMouseEnter={() => this.showTooltip()} onMouseLeave={() => this.hideTooltip()} message={message}>
            <Link
              to="/advanced" className={this.firstUnlock && this.secondUnlock && this.thirdUnlock ? "activeLessonsLink" : "lessonsLink"} >
              <Img src="llama.png" alt="" style={this.firstUnlock && this.secondUnlock && this.thirdUnlock ? { filter: "none" } : null} />
            </Link>
          </SubList>
        </ListContainer>

        {
          this.state.level2Tooltip ?
            (<TooltipBox>
              <TooltipMessage>{message}</TooltipMessage>
            </TooltipBox>) :
            this.state.level3Tooltip ?
              (<TooltipBox2>
                <TooltipMessage>{message}</TooltipMessage>
              </TooltipBox2>)
              : null
        }
      </>
    )
  }
}

LessonsList.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(LessonsList);
