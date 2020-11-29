const host = "http://127.0.0.1:8000"

const blog = "/blog";
const api = "/api";

export const blogList = `${host}${blog}/blog/`
export const blogDetail= slug => `${host}${blog}/blog/${slug}`
export const contact = `${host}${api}/contact/`
export const newsletter = `${host}${api}/newsletter/`

export const loginURL = `${host}/rest-auth/login`
export const signURL = `${host}/rest-auth/registration/`
