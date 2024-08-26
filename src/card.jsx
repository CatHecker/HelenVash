import {useState, useRef} from 'react'
export default function Card({id, title, maintenance}) {
    let firstStr = useRef()
    let [oldHeight, newHeight] = useState()
    let [opened, newFase] = useState(false)
    let [content, newContent] = useState('Читать далее')
    let poemOnclick = function() {
        let firstStrStyle = firstStr.current.style
        newHeight(!opened ? firstStr.current.offsetHeight : oldHeight)
        firstStrStyle.height = 'auto'
        let autoHeight = firstStr.current.offsetHeight

        if (!opened) {
            firstStrStyle.height = '48px'
            firstStrStyle.height = firstStr.current.offsetHeight
            firstStrStyle.height = autoHeight+'px'
            newContent('Свернуть')
            newFase(true)
        }
        else {
            firstStrStyle.height = autoHeight + 'px'
            firstStrStyle.height = firstStr.current.offsetHeight
            firstStrStyle.height = oldHeight+'px'
            newContent('Читать далее')
            newFase(false)
        }
    }
return (
<div className='poem' id='poem'>
    <p className='poemTitle' id='poemT'>{title}</p>
    <p className="firstStr" id={'firstStr'+id} ref={firstStr} style={{height:(!title ? '2.5em' : '1.25em')}}>{maintenance}</p>
    <button className='readMoreButton' onClick={poemOnclick}>{content}</button>
</div>
)
}