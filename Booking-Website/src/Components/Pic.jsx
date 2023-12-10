function Pic (props){
    return(
        <div className="w-full h-80 relative flex items-center justify-center">
            <img src={props.bg} alt="" className="absolute brightness-50 h-full w-full object-cover -z-10"/>
            <h1 className=" font-semibold text-6xl text-Puti">{props.header}</h1>            
        </div>
    )
}

export default Pic