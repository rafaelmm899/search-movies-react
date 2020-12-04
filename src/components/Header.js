import React, { Component } from 'react'

import { Title } from './Title'

export class Header extends Component {
  _renderRightItems = () => {
    const { rightItems } = this.props
    if (rightItems) {
      console.log(rightItems)
      return rightItems.map((item, index) => {
        return (
          <p className="level-item" key={index}>
            <a href={item.href}>{item.title}</a>
          </p>
        )
      })
    }

    return null
  }

  render() {
    const { leftContent, rightContent } = this.props
    return (
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">
              <Title>Search movies</Title>
            </p>
          </div>
          <div className="level-item">
            <div className="field has-addons">
              <div className="control">{leftContent ? leftContent : ''}</div>
            </div>
          </div>
        </div>

        <div className="level-right">{rightContent}</div>
      </nav>
    )
  }
}
