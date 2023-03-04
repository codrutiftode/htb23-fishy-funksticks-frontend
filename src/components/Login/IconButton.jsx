function IconButton({imgsrc,isDisabled,iconButtonClick}){
        return <div onClick={iconButtonClick}><img src={imgsrc} disabled={isDisabled}/></div>
}

export default IconButton