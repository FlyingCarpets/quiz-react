import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header>
                <div className="row">
                    <div className="col-md-6">Header</div>
                    <div className="col-md-6">
                        Header user name:
                        <strong>Header</strong>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
