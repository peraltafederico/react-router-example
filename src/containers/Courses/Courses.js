import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    articleClickedHandler = (id) => {
      // this.props.history.push('/courses/' + id)
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                          // return <article className="Course" onClick={() => this.articleClickedHandler(course.id)}>{course.title}</article>
                            return  <NavLink to={{ pathname:  '/courses/' + course.id , search: '?title=' + course.title }} key={course.id}>
                                      <article  className="Course" >{course.title}</article>
                                    </NavLink>;
                        } )
                    }
                </section>
                <section>
                  <Route path='/courses/:id' component={Course}/>
                </section>
            </div>
        );
    }
}

export default Courses;
