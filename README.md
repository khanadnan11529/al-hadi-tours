# Al-Hadi Tours & Travels

A web application for Al-Hadi Tours & Travels to showcase travel services, visa assistance, and Umrah tour packages, with a contact and enquiry feature.

## Features

* Travel services and tour package display
* Visa and Umrah package information
* Customer enquiry submission
* Admin login with JWT authentication
* Admin dashboard for viewing and managing enquiries
* Enquiry status management

## Technologies Used

**Frontend**

* React.js
* JavaScript
* HTML and CSS

**Backend**

* Java
* Spring Boot
* Spring Data JPA / Hibernate
* REST APIs
* JWT authentication

**Database**

* MySQL

## Project Structure

```text
al-hadi-tours/
├── backend/
│   └── tours/
└── frontend/
    └── src/
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/khanadnan11529/al-hadi-tours.git
cd al-hadi-tours
```

### 2. Start the backend

Configure your database connection and JWT secret using environment variables.

From the backend directory:

```bash
cd backend/tours
./mvnw spring-boot:run
```

On Windows, you can use:

```bash
mvnw.cmd spring-boot:run
```

The backend is configured to use port `8081` by default.

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Follow the local URL shown in the terminal to open the application.

## Security

* Keep database credentials and JWT secrets private.
* Do not commit `.env` files containing real secrets.
* Use appropriate authentication for admin-only endpoints.

## Author

Khan Adnan

## License

No license has been specified yet.
