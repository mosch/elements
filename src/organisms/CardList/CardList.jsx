import React from 'react'
import PropTypes from 'prop-types'
import { List } from '../../molecules/List'
import Card from '../../molecules/Card'

/** The CardList is a molecule that is a card containing a list. */
const CardList = ({ children }) => (
  <Card>
    <List>{children}</List>
  </Card>
)

CardList.propTypes = {
  /** Array of ListItem */
  children: PropTypes.node,
}

export default CardList
