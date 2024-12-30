import {serviceData} from '../DataPath/products'



const Cards=()=>{
    return(
        <>
        <div className=" cards ">
        <div className="row my-5 mx-2 d-flex justify-content-center " >
            {serviceData.length>0?(serviceData.map((data,index)=>(
                  <div key={index} style={{backgroundColor:data.bg}} className="col-xs-12 col-md-6 col-lg-2 p-4 m-1 d-flex-column justify-content-center cardWidth">
                      <p className='text-center'><span className='bg-light p-2 icons'>{data.icon}</span></p>
                      <p className='text-center fw-bold'>{data.title}</p>
                      <p className='text-center'>{data.subtitle}</p>
                  </div>
            ))):<p>loading</p>}
            </div>       
        </div>
        </>
    )
}
export default Cards