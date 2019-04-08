import React from 'react'

class TableCell extends React.PureComponent<{}, {}> {
    render(): React.ReactNode {
        const {children} = this.props;
        return (
            <td>
                {children}
            </td>
        );
    }
}

export default TableCell