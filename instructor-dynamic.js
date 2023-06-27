/* eslint linebreak-style: ["error", "windows"] */
/* Create Instructor Section Dynamically */

const section = document.querySelector('#speakers');

const loadInstructor = () => {
  const headingCont = document.createElement('div');
  headingCont.id = 'heading-container2';
  section.appendChild(headingCont);
  const sectionHeading = document.createElement('h2');
  sectionHeading.className = 'lato dark section-heading';
  sectionHeading.id = 'speakers-heading';
  sectionHeading.innerText = 'Instructors';

  const cardCont = document.createElement('div');
  cardCont.id = 'speaker-cards-container';
  section.appendChild(cardCont);

}