
import { UserData } from "../types";

const USER_DATA_KEY = 'course_explorer_user_data';

// Initialize default user data
const defaultUserData: UserData = {
  favorites: [],
  lastLogin: null,
  streakCount: 0,
  streakLastUpdated: null
};

// Get user data from localStorage or create default if not exists
export const getUserData = (): UserData => {
  const storedData = localStorage.getItem(USER_DATA_KEY);
  if (!storedData) {
    setUserData(defaultUserData);
    return defaultUserData;
  }
  return JSON.parse(storedData);
};

// Save user data to localStorage
export const setUserData = (data: UserData): void => {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
};

// Toggle course favorite status
export const toggleFavorite = (courseId: string): boolean => {
  const userData = getUserData();
  const isFavorite = userData.favorites.includes(courseId);
  
  if (isFavorite) {
    userData.favorites = userData.favorites.filter(id => id !== courseId);
  } else {
    userData.favorites.push(courseId);
  }
  
  setUserData(userData);
  return !isFavorite; // Return new favorite status
};

// Check if course is favorited
export const isFavorite = (courseId: string): boolean => {
  const userData = getUserData();
  return userData.favorites.includes(courseId);
};

// Get all favorite course IDs
export const getFavorites = (): string[] => {
  const userData = getUserData();
  return userData.favorites;
};

// Update user streak
export const updateStreak = (): number => {
  const userData = getUserData();
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
  // First login ever
  if (!userData.lastLogin) {
    userData.lastLogin = today;
    userData.streakCount = 1;
    userData.streakLastUpdated = today;
    setUserData(userData);
    return 1;
  }
  
  // Already updated streak today
  if (userData.streakLastUpdated === today) {
    return userData.streakCount;
  }
  
  const lastLogin = new Date(userData.lastLogin);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  const lastLoginDate = new Date(lastLogin).setHours(0, 0, 0, 0);
  const yesterdayDate = yesterday.setHours(0, 0, 0, 0);
  
  // If last login was yesterday, increment streak
  if (lastLoginDate === yesterdayDate || userData.lastLogin === yesterday.toISOString().split('T')[0]) {
    userData.streakCount += 1;
  } else if (userData.lastLogin !== today) {
    // If last login wasn't yesterday or today, reset streak
    userData.streakCount = 1;
  }
  
  userData.lastLogin = today;
  userData.streakLastUpdated = today;
  setUserData(userData);
  
  return userData.streakCount;
};

// Get current streak count
export const getStreakCount = (): number => {
  const userData = getUserData();
  return userData.streakCount;
};
