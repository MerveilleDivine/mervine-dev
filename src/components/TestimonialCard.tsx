
import React from 'react';

interface TestimonialCardProps {
  text: string;
  name: string;
  position: string;
  imageUrl?: string;
}

const TestimonialCard = ({ text, name, position, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="mb-4">
        <svg
          className="h-8 w-8 text-primary opacity-50"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic">{text}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 mr-3">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-primary text-white text-lg font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
