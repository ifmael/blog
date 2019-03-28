import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allMarkdownRemark: {
        edges: {
          node: {
            id: '001',
            fields: {
              slug: '/test'
            },
            frontmatter: {
              title: 'My title'
            },
          },
        },
      },
    })
  )
})


describe("Header", () =>
  void it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
)