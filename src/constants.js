const host = "http://127.0.0.1:8000/"

const blog = "blog";
const api = "api";

export const endpoint = `${host}${api}`
export const orderSummaryURL = `${endpoint}/order-summary/`
export const addToCartUrl = `${endpoint}/add-to-cart/`
export const productList = `${endpoint}/list/`
export const blogList = `${host}${blog}/blog/`
export const blogDetail= slug => `${host}${blog}/blog/${slug}/`
export const contact = `${endpoint}/contact/`
export const newsletter = `${endpoint}/newsletter/`
export const loginURL = `${host}rest-auth/login/`
export const signURL = `${host}rest-auth/registration/`
export const orderItemDeleteURL = id => `${endpoint}/order-item/${id}/delete/`
export const orderItemUpdateQuantityURL =  `${endpoint}/order-item/update-quantity/`
export const addressListUrl = `${endpoint}/address-list/`
export const countriesListURL = `${endpoint}/countries/`
export const addressCreate = `${endpoint}/address/create/`
export const productDetailURL = slug => `${endpoint}/product/${slug}/`
export const addToWishlist = `${endpoint}/wishlist/`
export const checkWishlistURL = `${endpoint}/check-wishlist/`
export const reviewsURL = `${endpoint}/review/`
export const checkReviewsURL = `${endpoint}/check-review/`
export const passwordResetURL = `${host}rest-auth/password/reset/`
export const passwordConfirmResetURL = `${host}rest-auth/password/reset/confirm/`
export const addCouponURL = `${endpoint}/add-coupon/`



