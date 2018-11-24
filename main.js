// My Reads módulo principal.

// React.
import React from 'react'
import { render } from 'react-dom'

// Material-UI components.
import Button from '@material-ui/core/Button'

const App = () => (
    <Button variant='contained' color='primary'>Hello World</Button>
)

render(<App />, document.getElementById('react-app'))
