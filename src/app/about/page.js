// About.jsx
import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our website! We are committed to providing the best service
          possible. Our team is dedicated to making sure you have a great
          experience.
        </p>
        <p className="text-gray-700 mb-4">
          We value our customers and always strive to meet your needs. If you
          have any questions, feel free to reach out to us.
        </p>
        <p className="text-gray-700">
          Thank you for visiting and we hope to see you again soon!
        </p>
      </div>
    </div>
  );
}

export default About;
