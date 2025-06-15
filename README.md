
# HRMS - Frontend (React)

This is the front-end application for the Human Resource Management System (HRMS), built with React. It provides the user interface for candidates, employers, and system staff to interact with the [HRMS Backend API](https://github.com/your-username/hrms-back-end-main).

## Built With

This project is a modern single-page application built with a robust set of tools and libraries:

*   **Core:**
    *   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/128px-React-icon.svg.png" width=20/> [React](https://reactjs.org/)
    *   <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg" width=20/> [Redux](https://redux.js.org/) for state management.
    
*   **UI & Styling:**
    *   <img src="https://cdn.worldvectorlogo.com/logos/semantic-ui.svg" width=20/> [Semantic UI React](https://react.semantic-ui.com/) for the component library.
    *   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" width=15 height=20/> CSS for custom styling.
*   **Forms & Data:**
    *   <img src="https://axios-http.com/assets/logo.svg" width=80/> [Axios](https://axios-http.com/) for making API requests.
    *   **Formik** & **Yup** for efficient and validatable form building.
*   **Notifications:**
    *   **React Toastify** for user-friendly feedback and notifications.

##  Features

*   **Role-Specific Dashboards:** The UI adapts based on the logged-in user type (Candidate, Employer, or Staff), showing relevant navigation and actions.
*   **User Authentication:** Secure registration and login flows for all user types.
*   **Job Listings with Filtering:**
    *   View all active job advertisements.
    *   Filter jobs by City, Job Position, Work Place, and Work Time.
    *   Pagination for browsing through large sets of job ads.
*   **Comprehensive CV Management:** Candidates can view and dynamically update their CVs through intuitive pop-up modals for each section:
    *   Profile Picture Upload (integrated with Cloudinary via the backend).
    *   Personal Biography.
    *   GitHub and LinkedIn profiles.
    *   Education History.
    *   Work Experience.
    *   Languages and proficiency levels.
    *   Technical skills and technologies.
*   **Employer-Specific Features:**
    *   Create new job advertisements.
    *   Submit company profile information for updates, which enters a staff approval queue.
*   **Staff-Specific Features:**
    *   View and approve/confirm pending job advertisements.
    *   View and approve pending employer profile updates.
*   **Job Ad Favorites:** Candidates can add/remove job ads from a personal favorites list.

## Project Screenshots

![Ekran görüntüsü 2021-07-14 132249](https://user-images.githubusercontent.com/77547523/125606901-fc388143-aa4c-4fa7-a42f-0a6529837b5c.png)
![Ekran görüntüsü 2021-07-14 132316](https://user-images.githubusercontent.com/77547523/125606906-bd3d9d6c-b919-415c-9808-0ef4fb85750f.png)
![Ekran görüntüsü 2021-07-14 132347](https://user-images.githubusercontent.com/77547523/125606909-e9458d70-a4e7-42eb-aa55-1b38efbad3fe.png)
![Ekran görüntüsü 2021-07-14 132403](https://user-images.githubusercontent.com/77547523/125606911-a1ecd4e5-f84f-447d-872a-1bbd5c6d974b.png)
![Ekran görüntüsü 2021-07-14 132424](https://user-images.githubusercontent.com/77547523/125606915-02841229-0f8c-41c9-ab87-7db8849b1378.png)

## ⚙️ Setup and Running the Project

### Prerequisites
*   [Node.js](https://nodejs.org/) (which includes npm)
*   The [HRMS Backend API](https://github.com/your-username/hrms-back-end-main) must be running, as this front-end application depends on it for all data.

### Installation & Configuration

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/hrms-front-end-main.git
    cd hrms-front-end-main
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Configure API URL (Recommended):**
    By default, all API requests in `src/services/` are hardcoded to `http://localhost:8080`. For better configuration management, it is recommended to use an environment file.

    Create a file named `.env` in the root of the project (`hrms-front-end-main/`) and add the following line:
    ```
    REACT_APP_API_URL=http://localhost:8080
    ```
    Then, update the service files to use this variable. For example, in `src/services/CityService.jsx`:
    ```javascript
    // Before
    getCitys(){
        return axios.get("http://localhost:8080/city/getAll")
    }

    // After
    getCitys(){
        return axios.get(`${process.env.REACT_APP_API_URL}/city/getAll`)
    }
    ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 📂 Project Structure
```
hrms-front-end-main/
├── public/
│   ├── index.html         # The main HTML template
│   └── ...
├── src/
│   ├── layouts/           # Main layout components (Navi, Footer, Dashboard, etc.)
│   ├── pages/             # Page components routed in Dashboard.jsx
│   │   ├── popups/        # Modal components for updating CV sections
│   │   └── ...
│   ├── services/          # Axios services for making API calls
│   ├── store/             # Redux store configuration (actions, reducers)
│   ├── App.js             # Root application component
│   └── index.js           # Entry point of the application
├── package.json
└── README.md
```
