const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const URL = (uri) => `${BASE_URL}${uri}`;

/***** Auth Routes*********/
export const REGISTRATION = URL('/register');
export const USER_LOGIN = URL('/login');
export const FORGOT_PASSWORD = URL('/password/email');
export const RESET_PASSWORD = URL('/reset-password');
export const VERIFY_TOKEN = URL('/verify-email');
export const USER_LOGOUT = URL('/logout');
export const RESEND_EMAIL_VERIFICATION = URL('/resend-email-verification');

/****** Contact  Routes ******/
export const ADD_CONTACT = URL('/contact/create');
export const LIST_CONTACT = URL('/contact/list');
export const DELETE_CONTACT = URL('/contact/delete');
export const GET_CONTACT_BY_ID = URL('/contact/view');
export const UPDATE_CONTACT = URL('/contact/update');
export const ADD_CONTACT_NOTE = URL('/contact/note/create');
export const LIST_CONTACT_NOTE = URL('/contact/note/list');
export const DELETE_CONTACT_NOTE = URL('/contact/note/delete');
export const UPDATE_CONTACT_NOTE = URL('/contact/note/update');
export const ADD_CONTACT_TASK = URL('/contact/task/create');
export const CONTACT_IMPORT = URL('/contact/import');
export const CONTACT_TASK_DATA = URL('/contact/task/list');
export const DELETE_CONTACT_TASK = URL('/contact/task/delete');
export const UPDATE_CONTACT_TASK = URL('/contact/task/update');
