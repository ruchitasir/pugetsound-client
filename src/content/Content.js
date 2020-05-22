// Packages
import React from 'react'
import { Route } from 'react-router-dom'

// Custom componentd
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import NewClass from './teacher/NewClass'
import StudentHome from './student/StudentHome'
import TeacherCalendar from './teacher/TeacherCalendar'
import NewHW from './teacher/NewHW'
import AllClasses from './teacher/AllClasses'
import SignupClass from './student/SignupClass'
import ViewSignedUpClasses from './student/ViewSignedUpClasses'

const Content = props => {
  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/login" render={
        () => <Login user={props.user} updateToken={props.updateToken}/>
      } />
      <Route path="/profile" render={
        () => <Profile user={props.user} updateToken={props.updateToken}/>
      } />
      <Route path="/signup" render={
        () => <Signup user={props.user}  updateToken={props.updateToken}/>
      } />
      <Route path="/calendar" render={
        () => <TeacherCalendar user={props.user}  />
      } />
     <Route path="/newclass" render={
        () => <NewClass user={props.user}  />
      } />
       <Route path="/student" render={
        () => <StudentHome user={props.user}  />
      } />
      <Route path="/homework" render={
        () => <NewHW user={props.user}  />
      } />
      <Route path="/classes" render={
        () => <AllClasses user={props.user}  />
      } />

        <Route path="/signupclass" render={
        () => <SignupClass user={props.user}  />
      } />
       <Route path="/viewsignedclasses" render={
        () => <ViewSignedUpClasses user={props.user}  />
      } />

    </div>
  )
}

export default Content
