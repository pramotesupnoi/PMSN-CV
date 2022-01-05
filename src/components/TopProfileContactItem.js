import React from 'react'

export default function TopProfileContactItem(props) {
    
    const LinkItem = (props) => {
        if(props.data.type === "link"){
            return (<a href={props.data.val} target="_blank" className="text-dark fw-light text-decoration-none text-break">{props.data.text}</a>)
        }
        return (<a href={`${props.data.type}:${props.data.val}`} className="text-dark fw-light text-decoration-none text-break">{props.data.text}</a>)
    }
    
    return (
        <div className="col-sm-6 col-md-4 col-lg-12 mb-2">
            <i className={`${props.fa_class} me-2`}></i>
            <LinkItem data={props} />
        </div>
    )
}
