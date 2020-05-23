import React, {Component} from "react"
import Link from "gatsby-link"

class MainMenu extends Component {
    render() {
      const data = this.props.menu.allWordpressMenusMenusItems.edges[0].node.items
      // this.props.menu.allWordpressMenusMenusItems.edges[0].node.items
    return (
      <div>
      <ul>
          {data.map((item) =>
              <li key={item.slug}>
                  <Link to={item.slug === 'lottojackpot.ru'? '/' : item.slug}>
                      {item.title}
                  </Link>
                  <ul>
                      {item.child_items && item.child_items.map((subitem) =>
                          <li key={subitem.slug}>
                              <Link to={subitem.slug}>
                                  {subitem.title}
                              </Link>
                          </li>
                      )}
                  </ul>
              </li>
          )}
      </ul>
  </div>

    )
    }
}

export default MainMenu