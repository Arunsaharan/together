import React, { useState } from 'react';
import './personalize.css'

const steps = [
  {
    question: 'Your gender?',
    options: ['Male', 'Female', 'Other'],
    key: 'gender',
  },
  {
    question: 'Your favorite landscape?',
    options: ['Beach', 'Mountains', 'Plains','Forests', 'Deserts', 'Lakes', 'Rivers'],
    key: 'landscape',
  },
  {
    question: 'Your favorite budget?',
    options: ['Budget', 'Mid-range', 'Luxury', 'Flexible'],
    key: 'Budget',
  },
  {
    question:'Your favorite Mode',
    options: ['Flights', 'Train', 'Road Trips', 'Flexible'],
    key: 'Mode',
  },
  {
    "question": "What is your accommodation preference?",
    "options": ["Luxury hotels/resorts", "Budget hostels or Airbnb", "Eco-friendly stays", "Boutique hotels", "Rural or nature-based stays"],
    "key": "Accommodation"
  },
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  // Handle selection or deselection of an option
  const handleSelectOption = (option) => {
    const currentQuestion = steps[currentStep].key;

    // Get the current selections for this question (or an empty array if none)
    const currentSelections = selectedOptions[currentQuestion] || [];

    // If the option is already selected, remove it; otherwise, add it
    const updatedSelections = currentSelections.includes(option)
      ? currentSelections.filter((item) => item !== option)
      : [...currentSelections, option];

    // Update the state with the new selections
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion]: updatedSelections,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };



  const currentQuestion = steps[currentStep];
  return (
    <div className="container">
      <div className="card-wrap">
        <h1>Step {currentStep + 1} of {steps.length}</h1>
        <h2>{currentQuestion.question}</h2>
        <div className="option-buttons">
          {currentQuestion.options.map((option) => (
            <div
              key={option}
              className={`card ${selectedOptions[currentQuestion.key]?.includes(option) ? 'selected' : ''}`}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div>
          <button className="nav-button" onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </button>
          <button className="nav-button mob-mt-0" onClick={handleNext} disabled={currentStep === steps.length - 1}>
            Next
          </button>

        </div>
        <h3>Selected Options:</h3>
        <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
