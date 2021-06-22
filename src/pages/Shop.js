import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import ProductCard from '../components/ProductCard'
import SiteBanner from '../components/SiteBanner'
import Skeleton from '../components/Skeleton'
import { addToCartUrl, productDetailURL, shopProducts,shopProductSearch,baseURL} from '../constants'
import { fetchCart } from '../store/actions/cart'
import { themes } from '../styles/ColorStyles'
import {H2, H3, SmallCaption,P } from '../styles/TextStyles'
import { authAxios } from '../utils'
import ModalLoading from '../components/ModalLoading'
import ProductModal from '../components/ProductModal'
import Modal from '../components/Modal'
import { useParams } from 'react-router-dom'
import { wideButton } from '../styles/Button'

const Shop = (props) => {

    const [pageLoading , setPageLoading] = useState(true)
    const [data, setData] = useState([])
    const [modalData, setModalData] = useState([])
    const [modalProduct, setModalProduct] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [ modalLoading, setModalLoading] = useState(false)

    const {query} = useParams()
    const closeModal = e =>{
        setShowModal(false)
     }
const {authenticated} =props;
 


     const fetchProduct =()=>{
       if(query){

        setPageLoading(true)
        axios
        .get(shopProductSearch, {params: {query}})
        .then(res=>{
           setData(res.data)
           setPageLoading(false)
        })
        .catch(err=>{
           setPageLoading(false)

        })
       }
       
       else{
        setPageLoading(true)
        axios
        .get(shopProducts)
        .then(res=>{
           setData(res.data)
           setPageLoading(false)
        })
        .catch(err=>{
           setPageLoading(false)

        })
       }
     }

     const onChange = e =>{
         const {name, value}= e.target
     }

     useEffect(() => {
        document.title = "Jane's Fashion Shop"
        fetchProduct()
        if(query){
            console.log(query)
        }
     }, [query])

     const cardModal = slug =>{
        setModalLoading(true)
        axios
        .get(productDetailURL(slug))
        .then(res=>{
            setModalData(res.data)
            setModalLoading(false)
            setModalProduct(true)
         
        })
        .catch(err=>{
            setModalLoading(false)
            setModalProduct(false)
        })
         }
            
         const closePop =()=>{
            setModalProduct(false)
         }

     const handleAddToCart =(title,slug)=>{
        if(authenticated){
      
          authAxios
          .post(addToCartUrl, {slug})
          .then(res => {
              console.log(res.data)
              //updatecart count
              props.fetchCart()
              toast.success(`${title} added to your cart`)
         
              fetchCart()
          
          }).catch(err=>{
          
            //setError(err)
          })
        }else{
            alert("Please login")
        }
      }
    
    
    return (
        <div>
            <SiteBanner/>

             
<ShopTitle>
    <ShopTitletext>{query ? `${query} search`: "Shop"}</ShopTitletext>

  
    {modalProduct && 
<ProductModal anime={modalProduct} closePop={closePop} /> }
       {modalLoading && <ModalLoading />}
       {showModal && 
       <Modal modalClose={closeModal}/> }  
</ShopTitle>
            <Productionsection>

                <Productfilter>
<Filtertitle>
<Filterh2>Filter Search</Filterh2>
</Filtertitle>
<Filtersection>
    <Filtertop>
        <Filterh3>Price</Filterh3> 
        <Filterbutton>APply</Filterbutton>
    </Filtertop>
<Filtermiddle>
<Filtermax>
<FIlterh1>Min</FIlterh1>

    <Filterinput placeholder="00"   type="number" />

    </Filtermax>

    <Filtermax>
    <FIlterh1>   Max</FIlterh1>
    <Filterinput  type="number" placeholder="0000" />

    </Filtermax>

    </Filtermiddle>
    {/* <Filterrow>
    <Filtertop>
        <Filterh3>Color</Filterh3> 
       
    </Filtertop>
<Filtercolor>
<Colorlabel><Colorinput type="radio" name="color" value="" onChange={onChange}/>
<Black/>
</Colorlabel>

<Colorlabel><Colorinput type="radio" name="color" value=""/><White/></Colorlabel>
<Colorlabel><Colorinput type="radio" name="color" value=""/><Red/></Colorlabel>
<Colorlabel><Colorinput type="radio" name="color" value=""/><Pink/></Colorlabel>
<Colorlabel><Colorinput type="radio" name="color" value=""/><Green/></Colorlabel>
<Colorlabel><Colorinput type="radio" name="color" value=""/><Purple/></Colorlabel>
<Colorlabel><Colorinput type="radio" name="color" value=""/><Brown/></Colorlabel>
</Filtercolor>
    </Filterrow> */}
</Filtersection>

                </Productfilter>

{query &&

<>
{query && data.length === 0 &&
    <>
<Empty>
<Emptyh1>No item in query search</Emptyh1>
<EmptyButton to='/shop'>Go To Shop</EmptyButton>
</Empty>
</>}

</>}
                <Products>
                {pageLoading && [1,2,3,4,5,6].map(n=><Skeleton key={n}/>)}

             {query && data.length> 0
&&
                <>

{data.map(item=>{
    return(
        <>

        <ProductCard key={item.id} title={item.title} slug={`/product/${item.slug}`} price={item.price} discount={item.discount_price} cardAdd={handleAddToCart} img={`${baseURL}${item.image}`} item={modalProduct} cardSearch={() =>cardModal(item.slug)}/>
        </>
    )
})}
</>}

         
                {!query && data && 
                
                <>

                    {data.map(item=>{
                        return(
                            <>

                            <ProductCard key={item.id} title={item.title} slug={`/product/${item.slug}`} price={item.price} discount={item.discount_price} cardAdd={handleAddToCart} img={item.image} item={modalProduct} cardSearch={() =>cardModal(item.slug)}/>
                            </>
                        )
                    })}
                </>}


                </Products>
            </Productionsection>



        </div>
    )
}

const ShopTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
margin: 16px 0;
`
const ShopTitletext = styled(H2)`

`

const Productionsection =styled.div`
min-height: 600px;
width:100%;
padding: 15px 25px;
margin: 40px 0;
display: grid;
grid-template-columns: 300px auto;
grid-auto-rows: minmax(300px,auto);
grid-gap: 50px;

@media only screen and (max-width: 850px){
    grid-template-columns: 1fr;

}
`
const Productfilter =styled.div`
height: 200px;
width:100%;
display: flex;
flex-direction: column;
`
const Products =styled.div` 

min-height:300px;
width:100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-auto-rows: minmax(350px,auto);
grid-gap: 30px;

@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);

}
`

const Filtertitle = styled.div`
margin: 8px 0;
height: 50px; 
width: 100%;
`
const Filterh2 = styled(H2)``
const Filtersection = styled.form``
const Filtertop = styled.div`
height: 50px; 
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Filterh3 = styled(H3)`
`
const Filterbutton = styled.button`
text-transform: uppercase;
outline: none;
border: none;
background: transparent;
cursor: pointer;
font-weight: 600;
color: ${themes.jane};
font-size: 17px;
padding: 4px 8px;
height: 40px;
border-radius: 5px;
transition: 0.3s ease-in;
:hover{
    background: ${themes.janeBright};
}
`
const Filtermiddle = styled.div`
width: 100%;
min-height: 60px;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
padding: 10px 25px;
`

// const Filterrow  = styled.div`
// width: 100%;
// min-height: 60px;
// display: flex;
// flex-direction: column;
// `
// const Filtercolor = styled.div`
// width: 100%;
// min-height: 60px;
// display: grid;
// grid-template-columns: repeat(7,1fr);
// padding: 10px 25px;
// `

const FIlterh1 = styled(SmallCaption)`
margin: 4px 0;
`
const Filterinput = styled.input`
height: 40px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
border-radius: 8px;
outline: none;
font-size: 14px;
line-height: 1.42857143;
color: #333333;
vertical-align: middle;
background-color: #ffffff;
border:2px solid #cccccc;

::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}
`
const Filtermax = styled.label`
width: 100%;
min-height: 30px;

`
// const Colorlabel = styled.label`
// width: 100%;
// min-height: 30px;
// `
// const Black = styled.div`
// width:24px;
// height: 24px;
// background: ${themes.black};
// `
// const White = styled.div`
// width:24px;
// height: 24px;
// background: ${themes.white};
// border:1px solid #cccccc;
// `
// const Red = styled.div`
// width:24px;
// height: 24px;
// background: ${themes.swatchRed};
// `
// const Pink = styled.div`
// width:24px;
// height: 24px;
// background: ${themes.swatchPink};
// `
// const Green = styled.div`
// width:24px;
// height: 24px;
// background: ${themes.swatchGreen};
// `
// const Purple = styled.div`
// width:24px;
// height: 24px;
// background: ${themes.swatchPurple};
// `
// const Brown = styled.div`
// width:24px;
// height: 24px;
// background: ${themes.swatchBrown};
// `
// const Colorinput = styled.input`
// display: none;
// width:24px;
// height: 24px;
// `
const Empty = styled.div`
width: 100%;
min-height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Emptyh1 = styled(P)`
margin: 24px 0;
text-align: center;
`
const EmptyButton = styled(wideButton)`

`

const mapStateToProps = state =>{
    return {
      authenticated: state.auth.token !== null,
      cart: state.cart.shoppingCart
    }
  }
  
  const mapDispatchToProps = dispatch =>{
      return{
        fetchCart: () => dispatch(fetchCart())
        
      };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Shop)
