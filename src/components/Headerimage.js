const Headerimage=(props)=>{
    return(
        <>
            <div className="header-image">
            {/* image container start */}
            <div className="image-container">
            <img src="./table.jpg" alt="images" className="image"/>
            <div className="container-text">  
            </div>
            <p  className='container-text-align'>{props.porduct} {props.productname}</p>
            </div>
            {/* image container ends */}
        </div>
        </>
    )
}
export default Headerimage;