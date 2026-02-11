import React from 'react'
import Taskcomponent from './Taskcomponent'

function Task1() {
    return (
        <div className="border-2 border-neutral-400 rounded-2xl bg-neutral-300 p-4 md:p-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-1 mt-2">
                Departments
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-3
            ">
                <Taskcomponent
                    heading="Computer Engineering"
                    content="Computer Engineering is a four year undergraduate programme introducing its students to realms of computer, including the theory and design of data storage, software, operating systems."
                />
                <Taskcomponent
                    heading="IT Engineering"
                    content="Information Technology is an undergraduate engineering course which focuses on expanding and growing in terms of dissemination of knowledge within and outside curriculum and skill development activities."
                />
                <Taskcomponent
                    heading="Computer Science"
                    content="Computer Engineering with ML & AI at Silver Oak University is a 4-year undergraduate specialization programme that presents a solid foundation in the principles and technologies to get on the path of an exciting, sprouting career."
                />
            </div>

        </div>
    )
}

export default Task1
