import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./CompareModal.css"

const Title = styled.h1`
  font-size: 2rem;
`

/**
 * Cleans out our food array
 * @param {*} foodCount
 */
const trimFood = (foodCount) => {
  console.log("Food count pre trim", foodCount);
  const keys = Object.keys(foodCount)
  const trimmedFood = keys.map(key => {
    if (key === "") return null

    const { name, emoji } = foodCount[key].obj

    return {
      name,
      emoji,
      count: foodCount[key].count
    }
  }).filter(food => food)

  return trimmedFood
}

const CompareLayout = ({ count, onClick }) => {
  let trimmedFood = trimFood(count)

  return (
    <details-dialog>
      <ul>
        {trimmedFood.map(food => <li>{food.name} | {food.count}</li>)}
      </ul>
      <button onClick={onClick}>Close</button>
    </details-dialog>
  )
}

CompareLayout.propTypes = {
  count: PropTypes.object
}

CompareLayout.defaultProps = {
  count: {}
}

export default CompareLayout
