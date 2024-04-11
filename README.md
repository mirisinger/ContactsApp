# Contacts App

## Overview

This project aims to develop a full-stack Contacts app using React for the client-side and Express for the server-side. The app allows users to manage their contacts by viewing, creating, updating, and deleting contacts.

## Client Side

### Technologies Used

React
React Router
Redux (optional)

### Installation

1. Clone this repository.
2. Install dependencies using npm install.

### Features

**Viewing Contacts:**
  - Display a list of contacts with their name, phone number, and title.
  - Filter contacts by name or phone number using the search bar.
  - Clicking on a contact's name directs to the contact details page.
**Creating Contacts:**
  - Clicking the "New Contact" button navigates to the contact creation screen.
  - Enter a contact's name, phone number, and title.
  - Validate the contact's name (max 30 characters) and phone number format.
**Updating Contacts:**
  - Edit contact details by navigating to /contacts/:id route.
  - Update contact information and save changes.
**Deleting Contacts:**
  - Clicking the delete button removes a contact from the list.

### Routing

/contacts: Contacts screen displaying all contacts.
/contacts/new: New contact creation screen.
/: Redirects to the contacts screen.
/contacts/:id: Contact editing screen with contact details.

## Server Side

### Technologies Used

Express
MVC Architecture

### Setup

1. Install Node.js and npm.
2. Clone this repository.
3. Install dependencies using npm install.

### Features

**RESTful API:**
  - Define routes for viewing, creating, updating, and deleting contacts.
  - Receive and return information in JSON format.
**Data Management:**
  - Store contact data in server-side memory.
  - Integrate with an RDBMS for persistent storage.

### API Routes

GET /api/contacts: Get all contacts.
POST /api/contacts: Create a new contact.
GET /api/contacts/:id: Get contact by ID.
PUT /api/contacts/:id: Update contact by ID.
DELETE /api/contacts/:id: Delete contact by ID.
