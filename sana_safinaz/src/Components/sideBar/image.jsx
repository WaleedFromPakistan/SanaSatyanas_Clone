import './image.css'


function Image ({onMouseEnter }) {
    return (
        <div className="image3">
            <img src="https://up.yimg.com/ib/th?id=OIP.etgkR4UV5E5u61N3-NMplQHaHa&pid=Api&rs=1&c=1&qlt=95&w=116&h=116" alt="sideBar" 
              onMouseEnter={onMouseEnter} style={{cursor: 'pointer'}} />
        </div>

    )
        
    
}

export default Image;