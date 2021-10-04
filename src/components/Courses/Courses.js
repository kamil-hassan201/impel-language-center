import React, { useEffect, useState } from 'react';
import useCourses from '../../customHooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            <h1 className="text-5xl text-center font-bold text-purple-600 font-mono my-8">Our Courses</h1>
            <hr className="w-3/4 mx-auto" />
            <div className="mx-16 my-8 grid sm:grid-cols-1 md:grid-cols-3 gap-16">
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;