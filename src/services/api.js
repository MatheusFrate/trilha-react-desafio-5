import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fldcidjaxfezbvfrigsu.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZGNpZGpheGZlemJ2ZnJpZ3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMjg1NTUsImV4cCI6MjAyMjkwNDU1NX0.I2esOtg0cEoTb5VFQG5NEkHj6OQyGZHP-6O7Ud8OLa8',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZGNpZGpheGZlemJ2ZnJpZ3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMjg1NTUsImV4cCI6MjAyMjkwNDU1NX0.I2esOtg0cEoTb5VFQG5NEkHj6OQyGZHP-6O7Ud8OLa8',
  },
});
