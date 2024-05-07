import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Welcome to Bharat Stack, where innovation meets excellence.
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Established with a vision to redefine the technological landscape, Bharat Stack is a dynamic company
committed to delivering cutting-edge software and hardware solutions. With a focus on driving progress and
empowering businesses of all sizes, we have emerged as a trusted partner for organizations seeking to
harness the power of technology to achieve their goals.
Our journey began with a simple yet ambitious goal: to bridge the gap between businesses and technology,
and to make advanced solutions accessible to all. Guided by this vision, we have cultivated a team of
highly skilled professionals who are passionate about leveraging technology to drive positive change.
Through our collective expertise and unwavering dedication, we have earned a reputation for excellence
and innovation in the industry.                      </p><br />
                      <h1 lassName="mt-4 text-gray-600">
                          MISSION.
                      </h1>
                      

                      <p>At Bharat Stack, our mission is to empower businesses and individuals with innovative software and
hardware solutions that drive growth, efficiency, and success. We are committed to leveraging cutting-edge
technology to solve complex challenges and unlock new opportunities for our clients. By delivering tailored
solutions and fostering collaborative partnerships, we strive to be a catalyst for positive change in the digital
landscape.</p>

                  </div>
              </div>
          </div>
      </div>
  );
}