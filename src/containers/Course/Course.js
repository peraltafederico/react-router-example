import React, { Component } from 'react';

class Course extends Component {
    render () {
      const search = this.props.location.search
      const params = new URLSearchParams(search)
        return (
            <div>
                <h1>{params.get('title')}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
