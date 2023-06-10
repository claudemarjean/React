import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('%c render() du PureComponent enfant simple','color:pink');
    return (
      <div>
        Pure Component
      </div>
    )
  }
}

export default PureComp;