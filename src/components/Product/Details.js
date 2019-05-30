import React from 'react'
// import PropTypes from 'prop-types';

class Details extends React.Component {


    renderDetails(data) {

        let toRet = []

        for (let key in data) {
            console.log(key, data[key]);
            toRet.push(
                <div key={key}>
                    <strong>{key}: </strong>
                    <span> {data[key]}</span>
                </div>
            )

        }

        return toRet

    }

    render() {
        const { data } = this.props
        return (
            <div className="product-ctr">
              {this.renderDetails(data)}
                
                <span className="hr-vertical"></span>

                

            </div>

        )
    }
}

export default Details