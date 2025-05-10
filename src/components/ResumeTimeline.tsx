
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2023-Present",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Full Stack Developer</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Working with modern JavaScript frameworks to build responsive, user-friendly web applications
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Developed and maintained client websites using React, Node.js
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Implemented responsive designs and optimized performance
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Collaborated with cross-functional teams to meet client requirements
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020-2023",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Teaching Assistant - Computer Engineering</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Assisted professors in programming courses, providing one-on-one help to students struggling with assignments and concepts
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Led workshop sessions on Object-Oriented Programming
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Graded assignments and provided detailed feedback
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Created supplementary learning materials for complex topics
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2018-2020",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Music Program Coordinator</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Led a community choir training program for beginners, helping members develop their skills and confidence
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Organized weekly practice sessions and performances
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Provided individual coaching to new members
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Facilitated community outreach through music
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div>
        <h4 className="font-semibold text-xl mb-3 text-primary">Computer Engineering Degree</h4>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Graduated with honors, specializing in software development and systems architecture
        </p>
        <div className="mb-6">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Senior thesis on optimizing database queries for large-scale applications
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Led student programming club for two years
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
            ✅ Completed internship with local tech startup
          </div>
        </div>
      </div>
    ),
  },
];

export function ResumeTimeline() {
  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
}
