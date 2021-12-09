import React from 'react'
import { Route } from 'react-router-dom'
import CollectionPageContainer from '../collection/collection.component'

import { connect } from 'react-redux'
import { fetchCollectionStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container'



class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props
    fetchCollectionStart()
  }

  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
