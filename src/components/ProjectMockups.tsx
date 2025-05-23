
import React from 'react';

// This component will help create placeholder mockups for projects
// In a real scenario, you would replace these with actual screenshots

export const SpendWiseMockup = () => (
  <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
        <span className="text-white text-2xl">💸</span>
      </div>
      <h3 className="font-bold text-green-800 dark:text-green-200">SpendWise AI</h3>
      <p className="text-sm text-green-600 dark:text-green-300">Smart Budget Tracker</p>
    </div>
  </div>
);

export const RoomsyMockup = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
        <span className="text-white text-2xl">🏠</span>
      </div>
      <h3 className="font-bold text-purple-800 dark:text-purple-200">Roomsy</h3>
      <p className="text-sm text-purple-600 dark:text-purple-300">Find Roommates</p>
    </div>
  </div>
);

export const PlanStackMockup = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
        <span className="text-white text-2xl">📋</span>
      </div>
      <h3 className="font-bold text-blue-800 dark:text-blue-200">PlanStack</h3>
      <p className="text-sm text-blue-600 dark:text-blue-300">Project Manager</p>
    </div>
  </div>
);

export const QuickQuoteMockup = () => (
  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
        <span className="text-white text-2xl">📄</span>
      </div>
      <h3 className="font-bold text-orange-800 dark:text-orange-200">QuickQuote</h3>
      <p className="text-sm text-orange-600 dark:text-orange-300">Invoice Generator</p>
    </div>
  </div>
);
