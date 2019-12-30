import React from 'react'
import './directory-menu.styles.scss'

import MenuItem from '../menu-item/menu-item.component'


class DirectoryMenu extends React.Component{
    constructor(){
      super()

      this.state = {
          sections: [{

          }]
      }
    }

    render(){
      return (
        <div className='directory-menu'>
          {
            this.state.sections.map(({ title, imageurl, id}) => (
                <MenuItem key={id}title={title} />    
            )) 
          }
        </div>
      )
    }                
}

export default DirectoryMenu