import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import MyCourses from './components/MyCourses/MyCourses';
import NotFound from './components/NotFount/NotFound';
import React from 'react';
import useCart from './customHooks/useCart';
import useCourses from './customHooks/useCourses';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Course from './components/Course/Course';
import useAuth from './hooks/useAuth';
import useFirebase from './hooks/useFirebase';



function App() {
  const [courses] = useCourses();
  const [cart, setCart] = useCart();

  const handleEnrol = (id) => {
    const addedCourse = courses.find(course => course.id === id);
    if (addedCourse) {
      setCart([...cart, addedCourse]);
    }


  }

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home handleEnrol={handleEnrol} ></Home>
            </Route>
            <Route path="/courses">
              <Courses handleEnrol={handleEnrol}></Courses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/mycourses">
              <MyCourses cart={cart} ></MyCourses>
            </PrivateRoute>
            <Route path="/signin">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
