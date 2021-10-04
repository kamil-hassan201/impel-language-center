import React, { useEffect, useState } from 'react';
import useCourses from '../../customHooks/useCourses';
import Course from '../Course/Course';

const Home = (props) => {
    const [courses] = useCourses();
    const featuredCourses = courses.filter(course => course.rating >= 4);
    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-purple-600 font-mono my-8">Featured Courses</h1>
            <hr className="w-3/4 mx-auto" />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 mx-52 my-8">
                {
                    featuredCourses.map(course => <Course course={course} ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;