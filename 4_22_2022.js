
// Language: javascript
// Date: 4/22/2022
// Path: 4_22_2022.js
// Time: ??
// Description: learning axios

// Example Overview
// For every client data, we are storing an identifier to find that client data and we will send back that identifier to the client for reference.

// POST

// If the client sends data without any identifier, then we will store the data and assign/generate a new identifier.
// If the client again sends the same data without any identifier, then we will store the data and assign/generate a new identifier.
// Note: Duplication is allowed here.
// PUT

// If the client sends data with an identifier, then we will check whether that identifier exists. If the identifier exists, we will update the resource with the data, else we will create a resource with the data and assign/generate a new identifier.
// PATCH

// If the client sends data with an identifier, then we will check whether that identifier exists. If the identifier exists, we will update the resource with the data, else we will throw an exception.
// Note: On the PUT method, we are not throwing an exception if an identifier is not found. But in the PATCH method, we are throwing an exception if the identifier is not found.



// Here is a simple description of all:

// POST is always for creating a resource ( does not matter if it was duplicated )
// PUT is for checking if resource exists then update, else create new resource
// PATCH is always for updating a resource