import React from "react"
import Header from "../header"
import { StaticQuery } from "gatsby"
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow'
import ReactTestUtils from 'react-dom/test-utils'; 
import TestRenderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';


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
    /* const tree = TestRenderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot() */

    const tree = shallow(<Header />)
    expect(toJson(tree)).toMatchSnapshot()
    
    /* const renderer = new ShallowRenderer()
    const tree = renderer.render(<Header />)
    expect(tree).toMatchSnapshot(); */

    /*const renderer = ReactTestUtils.createRenderer();
    expect(renderer.render(<Header />)).toMatchSnapshot();*/

    
  })
)