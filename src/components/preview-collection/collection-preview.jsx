import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.style.scss'

const CollectionPreview = ({ title, items }) => {
    console.log(items)
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
