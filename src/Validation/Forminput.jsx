const Forminput = (prop) => {
    let {name, title, type,value,handleChange,error ,required}=prop
    return ( <>
    <label > {title}</label>
    <input type={type} placeholder={title} name={name}required={required} value={value} onChange={handleChange} /><br />
    {/* <span>{error}</span> */}
    <error>{error}</error><br /><br />
    </> );
}
 
export default Forminput;