/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import * as d3 from "d3"

import "./layout.css"

class Layout extends React.Component {
  componentDidMount() {
    const xExtent = d3.extent([0, 100])
    const yExtent = d3.extent([100, 0])

    const xScale = d3
      .scaleLinear()
      .domain(xExtent)
      .range([0, window.innerWidth])
    const yScale = d3
      .scaleLinear()
      .domain(yExtent)
      .range([window.innerHeight, 0])

    const data = []

    for (let index = 0; index < 50; index++) {
      data.push({})
    }

    d3.select("body")
      .style("background-color", d3.interpolateRdYlBu(Math.random(1)))
      .append("svg")
      .attr("class", "background-pattern")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("g")
      .classed("circle-group", true)
      .attr("transform", function(d) {
        return `translate(${xScale(
          Math.random(window.innerWidth) * 100
        )},${yScale(Math.random(window.innerWidth) * 100)})`
      })
      .on("mouseover", function() {
        d3.select(this).attr("transform", function(d) {
          return `translate(${xScale(
            Math.random(window.innerWidth) * 100
          )},${yScale(Math.random(window.innerWidth) * 100)})`
        })
      })
      .append("circle")
      .classed("dot", true)
      .attr("r", d3.randomUniform(1, 20))
      .attr("opacity", d => {
        return Math.random(1)
      })
      .style("fill", d => {
        return d3.interpolateRdYlBu(Math.random(1))
      })
      .style("stroke-width", d3.randomUniform(1, 3))
      .style("stroke", "black")

    const t = d3
      .transition()
      .duration(4000)
      .ease(d3.easePolyOut)

    d3.selectAll(".circle-group")
      .transition(t)
      .attr("transform", function(d) {
        return `translate(${xScale(
          Math.random(window.innerWidth) * 100
        )},${yScale(Math.random(window.innerWidth) * 100)})`
      })
  }

  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div>
            <main>{children}</main>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
