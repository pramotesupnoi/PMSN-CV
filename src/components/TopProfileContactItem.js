import React, {useEffect} from 'react'
import { Tooltip } from 'bootstrap'

export default function TopProfileContactItem(props) {
    
    useEffect(() => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new Tooltip(tooltipTriggerEl)
        })
    }, [])

    const LinkItem = (props) => {
        const colorClass = !props.data.colorClass ? 'text-dark' : props.data.colorClass;
        if(props.data.type === "link"){
            return (<a href={props.data.val} target="_blank" className={`${colorClass} fw-light text-decoration-none text-break`} data-bs-toggle="tooltip" data-bs-placement="top" title="Click to open link!">{props.data.text}</a>)
        }
        return (<a href={`${props.data.type}:${props.data.val}`} className={`${colorClass} fw-light text-decoration-none text-break`} data-bs-toggle="tooltip" data-bs-placement="top" title="Click to contact me!">{props.data.text}</a>)
    }
    
    return (
        <div className="col-sm-6 col-md-4 col-lg-12 mb-2">
            <i className={`${props.fa_class} me-2`}></i>
            <LinkItem data={props} />
        </div>
    )
}
