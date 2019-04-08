import React from 'react'

class TableRow extends React.PureComponent<{}, {}> {
    render(): React.ReactNode {
        const {children} = this.props;
        return (
            <tr>
                {children}
            </tr>
        );
    }
}

export default TableRow