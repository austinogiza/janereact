export const host = process.env.NODE_ENV === 'development' ? "http://127.0.0.1:8000/": null


export const baseURL = `http://127.0.0.1:8000`
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
export const orderItemDeleteURL = `${endpoint}/order-item/delete/`
export const orderItemUpdateQuantityURL =  `${endpoint}/order-item/update-quantity/`
export const addressListUrl = `${endpoint}/address-list/`
export const countriesListURL = `${endpoint}/countries/`
export const addressCreateURL = `${endpoint}/address/create/`
export const productDetailURL = slug => `${endpoint}/product/${slug}/`
export const addToWishlist = `${endpoint}/wishlist/`
export const checkWishlistURL = `${endpoint}/check-wishlist/`
export const reviewsURL = `${endpoint}/review/`
export const checkReviewsURL = `${endpoint}/check-review/`
export const passwordResetURL = `${host}rest-auth/password/reset/`
export const passwordConfirmResetURL = `${host}rest-auth/password/reset/confirm/`
export const addCouponURL = `${endpoint}/add-coupon/`
export const paystackKeyURL = `${endpoint}/paystackkey/`
export const userEmailURL = `${endpoint}/user-email/`
export const fetchWishListURL = `${endpoint}/fetch-saved/`
export const deleteWishListURL = `${endpoint}/delete-saved/`
export const getShippingFeeURL = `${endpoint}/shipping-fee/`
export const addShippingFeeURL = `${endpoint}/add-shipping-fee/`
export const paymentDoneURL = `${endpoint}/payment-done/`
export const orderedItemsURL = `${endpoint}/ordered-items/`
export const deleteAddressUrl = `${endpoint}/delete-address/`
export const getOrderDetailURL = `${endpoint}/get-order-details/`
export const getOrderItemDetailURL = `${endpoint}/get-order-item-details/`
export const getUserDetails = `${endpoint}/get-user/`
export const getRelatedItems = `${endpoint}/related-post/`
export const defaultAddressListUrl = `${endpoint}/default-address/`
export const getDefaultShippingFeeURL = `${endpoint}/default-shipping-fee/`
export const addDefaultShippingFeeURL = `${endpoint}/add-default-shipping-fee/`
export const addressDefaultCreateURL = `${endpoint}/address/create/default/`
export const paymentCheckView = `${endpoint}/payment-check/`







