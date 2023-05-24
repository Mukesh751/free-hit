import { useContext } from 'react'
import { ToolContext } from '../../App'

const GridView = () => {
  const {
    filteredProducts,
    category,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)
  return (
    <main className="grid">
      {filteredProducts.map((product, index) => {
        return category === 'all' || category === product.category ? (
          <article key={index}>
            <div className="text">
              <h3>
                <img className="card-img" src={product.image} alt="" />
                <span className="card-title">{product.productName}</span>
              </h3>
              <p>{product.description}</p>
              <div className="btn-cont">
                <a target="_blank" href={product.link}>
                  <button className="visit">
                    <font color="white" size="4">
                      Visit
                    </font>
                  </button>
                </a>
                {bookmarkfilteredProducts.some(
                  (obj) => obj['productName'] === product.productName
                ) ? (
                  <button onClick={() => deleteres(product)}>
                    <a href="#">
                      Delete<i className="ri-bookmark-fill"></i>
                    </a>
                  </button>
                ) : (
                  <a href="#">
                    <button
                      className="bookmark"
                      onClick={() => handelBookmarkAdd(product)}
                    >
                      <font color="white" size="4">
                        Bookmark
                      </font>
                    </button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ) : null
      })}
    </main>
  )
}

export default GridView
