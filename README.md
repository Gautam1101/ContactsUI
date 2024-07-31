Overview

The Contacts UI is a frontend application built with Angular that interacts with the Contacts API to provide a user interface for managing contact information.

Setup Instructions

1. Clone the Repository:

   Open your terminal and run the following command to clone the repository:
   git clone https://github.com/yourusername/contacts-ui.git
   Then navigate into the project directory:
   cd contacts-ui

2. Install Dependencies:
   Install the necessary dependencies by running:
   npm install

3. Run the Application:
   Start the Angular development server with:
   ng serve
   The application will be available at http://localhost:4200.


How to Run the Application

1. Ensure Dependencies are Installed:
   Make sure the necessary dependencies are installed by running:
   npm install

2. Start the Frontend Application:
   Run the Angular development server using:
   ng serve
   You can view the application at http://localhost:4200.


Design Decisions and Application Structure

- Technology Stack:
  - Angular: Chosen for its comprehensive framework for building single-page applications (SPAs) with a rich feature set.
  - Angular CLI: Used for development, build, and deployment processes.

- Application Structure:
  - Components: Reusable Angular components that encapsulate different parts of the UI.
  - Modules:  Angular modules that group related components, services, and other code for better organization.
  - Services: Contains logic for interacting with the Contacts API, typically using Angular's HttpClient.
  - Routing: Angular Router is used for navigating between different views of the application.

- Design Decisions:
  - Component-Based Architecture: Encourages reuse and separation of concerns, which helps in managing and scaling the application.
  - Reactive Forms: Used for handling form inputs and validations in a reactive manner.
  - Modular Design: Promotes a clean and organized structure by breaking the application into modules and components.


